import { useEffect, useId, useRef, useState } from "react";
import { NavLink } from "react-router";

import { buttonClassName } from "@/shared/ui/primitives/Button";
import { navLinkClassName } from "@/shared/ui/primitives/textLink";

const LINKS = [
  { to: "/", label: "UI 패턴 사전" },
  { to: "/roadmap", label: "전체 주제" },
  { to: "/compare", label: "헷갈리는 UI" },
] as const;

const linkClassName = `flex min-h-12 items-center justify-between rounded-control px-3 text-body-sm hover:bg-field aria-[current=page]:bg-field aria-[current=page]:font-semibold aria-[current=page]:text-ink ${navLinkClassName}`;

export function MobileNavigation({ repositoryUrl }: { readonly repositoryUrl: string }) {
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
        aria-label="메뉴"
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
        aria-label="모바일 메뉴"
        hidden={!open}
        className="absolute inset-x-4 top-full mt-2 rounded-surface border border-rule bg-paper p-2 shadow-overlay"
      >
        <ul className="space-y-1">
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end className={linkClassName} onClick={closeAndFocus}>
                {label}
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 shrink-0"
                >
                  <path d="M7.3 5.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.3-3.3-3.3-3.3a1 1 0 0 1 0-1.4Z" />
                </svg>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-2 border-t border-rule pt-2">
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
            onClick={closeAndFocus}
          >
            GitHub
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="size-4 shrink-0"
            >
              <path d="M10 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7.4l-5.3 5.3a1 1 0 0 1-1.4-1.4L12.6 6H11a1 1 0 0 1-1-1Z" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}
