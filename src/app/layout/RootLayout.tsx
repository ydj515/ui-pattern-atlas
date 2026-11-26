import { Link, Outlet, ScrollRestoration, useLocation } from "react-router";

import { useTheme } from "@/features/switch-theme/model/useTheme";
import { PatternCommandPalette } from "@/features/search-patterns/ui/PatternCommandPalette";
import { LanguageSwitcher } from "@/features/switch-language/ui/LanguageSwitcher";
import { ThemeToggle } from "@/features/switch-theme/ui/ThemeToggle";
import { useMessages } from "@/shared/i18n/messages";
import { buttonClassName } from "@/shared/ui/primitives/Button";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";

import { MobileNavigation } from "@/app/layout/MobileNavigation";

const REPOSITORY_URL = "https://github.com/ydj515/ui-pattern-atlas";
const ISSUES_URL = `${REPOSITORY_URL}/issues`;

export function RootLayout() {
  const theme = useTheme();
  const messages = useMessages();
  // The catalog has its own large search box; elsewhere the header offers ⌘K search.
  const { pathname } = useLocation();
  const isCatalog = pathname === "/";

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-paper focus:px-4 focus:py-2 focus:shadow-overlay"
      >
        {messages.site.skipToContent}
      </a>
      <header className="relative z-30 border-b border-rule">
        <div className="mx-auto flex h-14 max-w-page items-center justify-between px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 font-serif text-lead font-bold">
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="size-6 shrink-0">
              <rect
                x="3"
                y="3"
                width="58"
                height="58"
                rx="13"
                className="fill-paper stroke-ink"
                strokeWidth="4"
              />
              <rect x="14" y="45" width="36" height="8" rx="3" className="fill-marker" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-ink"
                d="M30.4 11H34.2L44.8 37.2H48V40H36.6V37.2H39.4L36.9 30.8H26.1L23.6 37.2H26.8V40H16V37.2H19.4L30.4 11ZM31.5 17.8L27.3 28H35.7L31.5 17.8Z"
              />
            </svg>
            UI Pattern Atlas
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            {isCatalog ? null : <PatternCommandPalette />}
            <a
              href={REPOSITORY_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className={`max-sm:hidden ${buttonClassName("icon")}`}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 2 10c0-4.42 3.58-8 8-8Z"
                />
              </svg>
            </a>
            <ThemeToggle theme={theme.resolved} onToggle={theme.toggle} />
            <span aria-hidden="true" className="h-5 w-px bg-rule max-sm:hidden" />
            <div className="max-sm:hidden">
              <LanguageSwitcher />
            </div>
            <MobileNavigation key={pathname} repositoryUrl={REPOSITORY_URL} />
          </div>
        </div>
      </header>
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-rule">
        <p className="mx-auto max-w-page px-4 py-8 text-caption text-graphite sm:px-6">
          {messages.site.footer.before}
          <a href={ISSUES_URL} className={textLinkClassName}>
            GitHub
          </a>
          {messages.site.footer.after}
        </p>
      </footer>
      {/* Fresh deep links share the router key "default". Keep their saved positions distinct. */}
      <ScrollRestoration
        getKey={(location) =>
          location.key === "default" && location.hash
            ? `${location.pathname}${location.search}${location.hash}`
            : location.key
        }
      />
    </div>
  );
}
