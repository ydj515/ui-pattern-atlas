import { createContext, useContext, type ReactNode } from "react";

/**
 * Site languages. Korean lives at the existing addresses; English mirrors every page under
 * `/en/`, so a link keeps its language and switching only adds or drops that prefix.
 */
export const LOCALES = ["ko", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/** How each language names itself in the language menu. */
export const LOCALE_NAMES: Readonly<Record<Locale, string>> = { ko: "한국어", en: "English" };

/** Short language codes for the compact language button on small screens. */
export const LOCALE_CODES: Readonly<Record<Locale, string>> = { ko: "KO", en: "EN" };

/** Language of a browser path. The site is served from the root. */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

/** Router basename for a language: `/en` for English, the root for Korean. */
export function routerBasename(locale: Locale): string {
  return locale === "en" ? "/en" : "/";
}

/**
 * Full address of a router path (`/patterns/toast?q=a#x`) in a language. Switching languages
 * loads this address, so each language keeps its own router basename.
 */
export function localizedHref(locale: Locale, path: string): string {
  const rest = path.replace(/^\//, "");
  return locale === "en" ? `/en/${rest}` : `/${rest}`;
}

const LocaleContext = createContext<Locale>("ko");

export function LocaleProvider({
  locale,
  children,
}: {
  readonly locale: Locale;
  readonly children: ReactNode;
}) {
  return <LocaleContext value={locale}>{children}</LocaleContext>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
