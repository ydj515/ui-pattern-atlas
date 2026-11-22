import { Link, Outlet, ScrollRestoration, useLocation } from "react-router";

import { useTheme } from "@/features/switch-theme/model/useTheme";
import { PatternCommandPalette } from "@/features/search-patterns/ui/PatternCommandPalette";
import { ThemeToggle } from "@/features/switch-theme/ui/ThemeToggle";
import { navLinkClassName, textLinkClassName } from "@/shared/ui/primitives/textLink";

import { MobileNavigation } from "@/app/layout/MobileNavigation";

const REPOSITORY_URL = "https://github.com/ydj515/ui-pattern-atlas";

export function RootLayout() {
  const theme = useTheme();
  // The catalog has its own large search box; elsewhere the header offers ⌘K search.
  const { pathname } = useLocation();
  const isCatalog = pathname === "/";

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-paper focus:px-4 focus:py-2 focus:shadow-overlay"
      >
        본문으로 건너뛰기
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
              className={`hidden text-caption sm:inline ${navLinkClassName}`}
            >
              GitHub
            </a>
            <ThemeToggle theme={theme.resolved} onToggle={theme.toggle} />
            <MobileNavigation key={pathname} repositoryUrl={REPOSITORY_URL} />
          </div>
        </div>
      </header>
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-rule">
        <p className="mx-auto max-w-page px-4 py-8 text-caption text-graphite sm:px-6">
          UI Pattern Atlas는 오픈소스입니다. 빠진 패턴이나 고칠 점은{" "}
          <a href={REPOSITORY_URL} className={textLinkClassName}>
            GitHub
          </a>
          에 남겨 주세요.
        </p>
      </footer>
      <ScrollRestoration />
    </div>
  );
}
