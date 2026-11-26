import { createContext, useContext, type ReactNode } from "react";

/**
 * Site languages. Korean lives at the existing addresses; English mirrors every page under
 * `/en/`, so a link keeps its language and switching only adds or drops that prefix.
 */
export const LOCALES = ["ko", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/** How each language names itself in the language menu. */
export const LOCALE_NAMES: Readonly<Record<Locale, string>> = { ko: "한국어", en: "English" };

/** Language of a browser path. `base` is the deploy base path, e.g. `/` or `/ui-pattern-atlas/`. */
export function localeFromPathname(pathname: string, base: string): Locale {
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.slice(1);
  return rest === "en" || rest.startsWith("en/") ? "en" : "ko";
}

/** Router basename for a language: the deploy base, plus `en` for English. */
export function routerBasename(base: string, locale: Locale): string {
  return locale === "en" ? `${base}en` : base;
}

/**
 * Full address of a router path (`/patterns/toast?q=a#x`) in a language. Switching languages
 * loads this address, so each language keeps its own router basename.
 */
export function localizedHref(base: string, locale: Locale, path: string): string {
  const rest = path.replace(/^\//, "");
  return locale === "en" ? `${base}en/${rest}` : `${base}${rest}`;
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
