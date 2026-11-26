import { describe, expect, it } from "vitest";

import { localeFromPathname, localizedHref, routerBasename } from "@/shared/i18n/locale";
import { MESSAGES, type Messages } from "@/shared/i18n/messages";

describe("locale paths", () => {
  it.each([
    ["/", "ko"],
    ["/patterns/toast", "ko"],
    ["/en", "en"],
    ["/en/", "en"],
    ["/en/patterns/toast", "en"],
    ["/english-tips", "ko"],
  ] as const)("reads %s as %s", (pathname, locale) => {
    expect(localeFromPathname(pathname)).toBe(locale);
  });

  it("gives English its own router basename", () => {
    expect(routerBasename("ko")).toBe("/");
    expect(routerBasename("en")).toBe("/en");
  });

  it("builds the same page's address in each language", () => {
    const path = "/patterns/toast?q=a#accessibility";
    expect(localizedHref("en", path)).toBe("/en/patterns/toast?q=a#accessibility");
    expect(localizedHref("ko", path)).toBe("/patterns/toast?q=a#accessibility");
    expect(localizedHref("en", "/")).toBe("/en/");
    expect(localizedHref("ko", "/roadmap")).toBe("/roadmap");
  });
});

/** Every string the messages can produce, with sample arguments for the functions. */
function texts(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (typeof value === "function")
    return [String((value as (...args: unknown[]) => unknown)(2, 3))];
  if (Array.isArray(value)) return value.flatMap(texts);
  if (value && typeof value === "object") return Object.values(value).flatMap(texts);
  return [];
}

describe("site messages", () => {
  it("has no Korean left in the English copy", () => {
    const korean = texts(MESSAGES.en).filter((text) => /[가-힣]/.test(text));
    expect(korean).toEqual([]);
  });

  it("leaves no English message empty", () => {
    expect(texts(MESSAGES.en).filter((text) => text.trim() === "")).toEqual([]);
  });

  it("notes the Korean demo copy only on English pages", () => {
    const notes = (messages: Messages) => [
      messages.catalog.demoLanguageNote,
      messages.detail.demoLanguageNote,
    ];
    expect(notes(MESSAGES.ko)).toEqual([null, null]);
    expect(notes(MESSAGES.en).every((note) => typeof note === "string")).toBe(true);
  });
});
