import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const ROOT_DIR = resolve(import.meta.dirname, "../..");
const PUBLIC_DIR = resolve(ROOT_DIR, "public");

function parseIndexHead(): Document {
  const html = readFileSync(resolve(ROOT_DIR, "index.html"), "utf-8");
  return new DOMParser().parseFromString(html, "text/html");
}

function getMetaContent(doc: Document, attr: "name" | "property", key: string): string | null {
  return doc.head.querySelector(`meta[${attr}="${key}"]`)?.getAttribute("content") ?? null;
}

describe("site metadata and icons", () => {
  it("declares Open Graph and Twitter card metadata for link sharing", () => {
    const doc = parseIndexHead();

    expect(doc.title).toBe("UI Pattern Atlas · UI 패턴 사전");
    expect(getMetaContent(doc, "name", "description")).toBeTruthy();

    expect(getMetaContent(doc, "property", "og:type")).toBe("website");
    expect(getMetaContent(doc, "property", "og:site_name")).toBe("UI Pattern Atlas");
    expect(getMetaContent(doc, "property", "og:locale")).toBe("ko_KR");
    expect(getMetaContent(doc, "property", "og:title")).toBe("UI Pattern Atlas · UI 패턴 사전");
    expect(getMetaContent(doc, "property", "og:description")).toBe(
      getMetaContent(doc, "name", "description"),
    );

    const ogUrl = getMetaContent(doc, "property", "og:url") ?? "";
    const ogImage = getMetaContent(doc, "property", "og:image") ?? "";
    expect(ogUrl).toMatch(/^https:\/\/.+\/$/);
    expect(ogImage).toMatch(/^https:\/\/.+\/og-image\.png$/);
    expect(getMetaContent(doc, "property", "og:image:type")).toBe("image/png");
    expect(getMetaContent(doc, "property", "og:image:width")).toBe("1200");
    expect(getMetaContent(doc, "property", "og:image:height")).toBe("630");
    expect(getMetaContent(doc, "property", "og:image:alt")).toBeTruthy();

    expect(getMetaContent(doc, "name", "twitter:card")).toBe("summary_large_image");
    expect(getMetaContent(doc, "name", "twitter:title")).toBe(
      getMetaContent(doc, "property", "og:title"),
    );
    expect(getMetaContent(doc, "name", "twitter:description")).toBe(
      getMetaContent(doc, "property", "og:description"),
    );
    expect(getMetaContent(doc, "name", "twitter:image")).toBe(ogImage);
    expect(getMetaContent(doc, "name", "twitter:image:alt")).toBe(
      getMetaContent(doc, "property", "og:image:alt"),
    );

    const ogImagePath = resolve(PUBLIC_DIR, "og-image.png");
    expect(existsSync(ogImagePath)).toBe(true);
    expect(statSync(ogImagePath).size).toBeGreaterThan(0);
  });

  it("links favicons, Apple touch icon, and web app manifest backed by public assets", () => {
    const doc = parseIndexHead();

    const expectedLinks = [
      { selector: 'link[rel="icon"][type="image/svg+xml"]', href: "/favicon.svg" },
      { selector: 'link[rel="icon"][type="image/png"]', href: "/favicon-32x32.png" },
      { selector: 'link[rel="icon"][href="/favicon.ico"]', href: "/favicon.ico" },
      { selector: 'link[rel="apple-touch-icon"]', href: "/apple-touch-icon.png" },
      { selector: 'link[rel="manifest"]', href: "/site.webmanifest" },
    ];

    for (const { selector, href } of expectedLinks) {
      const link = doc.head.querySelector(selector);
      expect(link?.getAttribute("href"), selector).toBe(href);
      const assetPath = resolve(PUBLIC_DIR, href.replace(/^\//, ""));
      expect(existsSync(assetPath), href).toBe(true);
      expect(statSync(assetPath).size, href).toBeGreaterThan(0);
    }

    const manifestRaw = readFileSync(resolve(PUBLIC_DIR, "site.webmanifest"), "utf-8");
    const manifest = JSON.parse(manifestRaw) as {
      readonly name: string;
      readonly icons: readonly { readonly src: string; readonly sizes: string }[];
    };
    expect(manifest.name).toBe("UI Pattern Atlas");
    expect(manifest.icons.length).toBeGreaterThanOrEqual(2);
    for (const icon of manifest.icons) {
      const iconPath = resolve(PUBLIC_DIR, icon.src);
      expect(existsSync(iconPath), icon.src).toBe(true);
      expect(statSync(iconPath).size, icon.src).toBeGreaterThan(0);
    }
  });
});
