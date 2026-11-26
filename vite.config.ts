import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

/**
 * Public path the app is served from. Cloudflare Pages serves the site at the root, so this
 * stays `/`; set BASE_PATH only to try a sub-path deploy.
 */
function resolveBasePath(value: string | undefined): string {
  const trimmed = value?.trim() ?? "";
  if (trimmed === "" || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
}

/**
 * Maps each catalog folder to its pattern category by reading the entry file, so thumbnails
 * can be bundled per category.
 */
function readPatternCategories(): ReadonlyMap<string, string> {
  const root = fileURLToPath(new URL("./src/entities/pattern/catalog", import.meta.url));
  const categories = new Map<string, string>();
  for (const folder of readdirSync(root, { withFileTypes: true })) {
    if (!folder.isDirectory()) continue;
    for (const file of readdirSync(join(root, folder.name))) {
      if (!/^[a-z][A-Za-z]*\.tsx$/.test(file)) continue;
      const source = readFileSync(join(root, folder.name, file), "utf8");
      const category = /^\s*category: "([^"]+)",$/m.exec(source)?.[1];
      if (category) categories.set(folder.name, category);
    }
  }
  return categories;
}

const PATTERN_CATEGORIES = readPatternCategories();

/**
 * One chunk per category for catalog thumbnails: scrolling into a topic fetches its
 * miniatures in one request instead of one per card.
 */
function thumbnailChunkName(moduleId: string): string | null {
  const folder = /catalog[\\/]([^\\/]+)[\\/][^\\/]+Thumbnail\.tsx$/.exec(moduleId)?.[1];
  const category = folder ? PATTERN_CATEGORIES.get(folder) : undefined;
  return category ? `thumbs-${category}` : null;
}

export default defineConfig({
  base: resolveBasePath(process.env.BASE_PATH),
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "vendor",
              test: /node_modules[\\/](?:react|react-dom|react-router|scheduler)[\\/]/,
            },
            { name: thumbnailChunkName, debugName: "thumbnails-by-category" },
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@storybook-config": fileURLToPath(new URL("./.storybook", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: false,
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/**/*.stories.{ts,tsx}",
        "src/test/**",
        "src/main.tsx",
        "src/vite-env.d.ts",
      ],
      reporter: ["text", "html", "lcov"],
      // Start just below the measured baseline (~91/85/88/92) and only raise over time.
      thresholds: {
        statements: 85,
        branches: 80,
        functions: 85,
        lines: 85,
      },
    },
  },
});
