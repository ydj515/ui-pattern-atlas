import { useEffect, useId, useRef, useState } from "react";
import { useLocation } from "react-router";

import { LOCALE_NAMES, LOCALES, localizedHref, useLocale, type Locale } from "@/shared/i18n/locale";
import { useMessages } from "@/shared/i18n/messages";
import { buttonClassName } from "@/shared/ui/primitives/Button";

/**
 * Language menu: the current language, and links to the same page in each language. A
 * language switch is a full page load, because each language has its own router basename.
 */
export function LanguageSwitcher() {
  const locale = useLocale();
  const messages = useMessages();
  const { pathname, search, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function closeOnOutsidePress(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [open]);

  const hrefFor = (target: Locale) => localizedHref(target, `${pathname}${search}${hash}`);

  return (
    <div
      ref={rootRef}
      className="relative"
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !open) return;
        event.stopPropagation();
        setOpen(false);
        buttonRef.current?.focus();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${messages.site.language}: ${LOCALE_NAMES[locale]}`}
        onClick={() => setOpen((current) => !current)}
        className={`${buttonClassName("quiet")} min-h-9 whitespace-nowrap`}
      >
        {LOCALE_NAMES[locale]}
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-3.5">
          <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
        </svg>
      </button>
      <ul
        id={listId}
        hidden={!open}
        aria-label={messages.site.language}
        className="absolute top-full right-0 z-20 mt-2 w-36 rounded-surface border border-rule bg-paper p-1 shadow-overlay"
      >
        {LOCALES.map((target) => (
          <li key={target}>
            <a
              href={hrefFor(target)}
              lang={target}
              hrefLang={target}
              aria-current={target === locale ? "true" : undefined}
              className="flex min-h-10 items-center rounded-control px-3 text-caption text-graphite hover:bg-field hover:text-ink aria-[current]:font-medium aria-[current]:text-ink"
            >
              {LOCALE_NAMES[target]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
