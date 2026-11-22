import { useEffect, useId, useRef, useState } from "react";

export interface MobileMenuLink {
  readonly href: string;
  readonly label: string;
}

export interface MobileMenuProps {
  readonly links: readonly MobileMenuLink[];
  readonly current: string;
  readonly onNavigate: (href: string) => void;
  readonly openLabel?: string;
  readonly closeLabel?: string;
  readonly label?: string;
}

/**
 * Hamburger button that opens the site menu on small screens. The button says what it
 * does ("메뉴 열기"/"메뉴 닫기") and has aria-expanded. Opening moves focus to the first
 * link; Escape or choosing a link closes it and returns focus to the button.
 */
export function MobileMenu({
  links,
  current,
  onNavigate,
  openLabel = "메뉴 열기",
  closeLabel = "메뉴 닫기",
  label = "주 메뉴",
}: MobileMenuProps) {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) panelRef.current?.querySelector("a")?.focus();
  }, [open]);

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? close() : setOpen(true))}
        className="grid size-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
          className="size-5"
        >
          {open ? <path d="M5 5l10 10M15 5 5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </button>
      <nav
        ref={panelRef}
        id={panelId}
        aria-label={label}
        hidden={!open}
        onKeyDown={(event) => {
          if (event.key === "Escape") close();
        }}
        className="absolute top-full right-0 z-20 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
      >
        <ul className="space-y-0.5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={link.href === current ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(link.href);
                  close();
                }}
                className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100 focus-visible:bg-slate-100 focus-visible:outline-none aria-[current=page]:font-semibold aria-[current=page]:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
