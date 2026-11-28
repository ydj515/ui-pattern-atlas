import { useEffect, useId, useRef, useState } from "react";
import { NavLink } from "react-router";

import type { ResolvedTheme } from "@/features/switch-theme/model/theme";
import { useMessages } from "@/shared/i18n/messages";
import { buttonClassName } from "@/shared/ui/primitives/Button";
import { navLinkClassName } from "@/shared/ui/primitives/textLink";

const linkClassName = `flex min-h-11 w-full items-center justify-between rounded-control px-3 text-body-sm hover:bg-field aria-[current]:bg-marker aria-[current]:font-medium aria-[current]:text-marker-ink ${navLinkClassName}`;

/**
 * Small-screen site menu: the full topic index, GitHub and the theme. Categories and topics
 * are not repeated here; the catalog's tabs and topic picker, and each page's breadcrumb,
 * already lead to them. The language has its own button in the header.
 */
export function MobileNavigation({
  repositoryUrl,
  theme,
  onToggleTheme,
}: {
  readonly repositoryUrl: string;
  readonly theme: ResolvedTheme;
  readonly onToggleTheme: () => void;
}) {
  const messages = useMessages();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigationId = useId();

  useEffect(() => {
    if (!open) return;
    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [open]);

  function closeAndFocus() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <div
      ref={containerRef}
      className="sm:hidden"
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !open) return;
        event.stopPropagation();
        closeAndFocus();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={messages.nav.menu}
        aria-expanded={open}
        aria-controls={navigationId}
        className={`${buttonClassName("icon")} min-h-11 min-w-11 aria-expanded:bg-field aria-expanded:text-ink`}
        onClick={() => setOpen((current) => !current)}
      >
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
          <path
            d={
              open
                ? "M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4L8.6 10 5.3 6.7a1 1 0 0 1 0-1.4Z"
                : "M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
            }
          />
        </svg>
      </button>
      <nav
        id={navigationId}
        aria-label={messages.nav.mobileMenu}
        hidden={!open}
        className="absolute inset-x-4 top-full mt-2 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain rounded-surface border border-rule bg-paper p-2 shadow-overlay"
      >
        <NavLink to="/roadmap" end className={linkClassName} onClick={closeAndFocus}>
          {messages.nav.allTopics}
          <span aria-hidden="true">›</span>
        </NavLink>
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className={linkClassName}
          onClick={closeAndFocus}
        >
          <span className="inline-flex items-center gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="size-4 shrink-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 2 10c0-4.42 3.58-8 8-8Z"
              />
            </svg>
            GitHub
          </span>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="size-4 shrink-0"
          >
            <path d="M10 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7.4l-5.3 5.3a1 1 0 0 1-1.4-1.4L12.6 6H11a1 1 0 0 1-1-1Z" />
          </svg>
        </a>
        <button
          type="button"
          onClick={onToggleTheme}
          className={`mt-2 border-t border-rule pt-2 ${linkClassName}`}
        >
          {theme === "dark" ? messages.theme.toLight : messages.theme.toDark}
        </button>
      </nav>
    </div>
  );
}
