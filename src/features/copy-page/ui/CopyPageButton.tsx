import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

import type { Pattern } from "@/entities/pattern/model/pattern";
import { loadPatternMarkdown } from "@/features/copy-page/model/patternMarkdown";
import { useLocale } from "@/shared/i18n/locale";
import { useMessages, type Messages } from "@/shared/i18n/messages";

type CopyStatus = "idle" | "loading" | "copied" | "failed";

const RESET_DELAY_MS = 2000;
const BLOB_URL_LIFETIME_MS = 60_000;

const ICON_COPY =
  "M7 3.5A1.5 1.5 0 0 1 8.5 2h6A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 7 12.5v-9ZM4 7a1 1 0 0 1 1 1v7.5c0 .3.2.5.5.5H11a1 1 0 1 1 0 2H5.5A2.5 2.5 0 0 1 3 15.5V8a1 1 0 0 1 1-1Z";
const ICON_CHECK =
  "M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z";
const ICON_CHEVRON =
  "M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z";
const ICON_DOCUMENT =
  "M5 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.4a2 2 0 0 0-.6-1.4L12 1.6A2 2 0 0 0 10.6 1H5Zm1 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7Z";

function menuItems(copyPage: Messages["copyPage"]) {
  return [
    {
      id: "copy",
      label: copyPage.copyLabel,
      description: copyPage.copyDescription,
      path: ICON_COPY,
    },
    {
      id: "view",
      label: copyPage.viewLabel,
      description: copyPage.viewDescription,
      path: ICON_DOCUMENT,
    },
  ] as const;
}

function Icon({ path }: { readonly path: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4 shrink-0">
      <path d={path} />
    </svg>
  );
}

/**
 * Writes text that is still being produced. Handing the clipboard a promise keeps the user
 * gesture alive in Safari while the source files load; other browsers fall back to `writeText`.
 */
async function writeToClipboard(text: Promise<string>): Promise<void> {
  if (typeof ClipboardItem !== "undefined" && typeof navigator.clipboard?.write === "function") {
    const blob = text.then((value) => new Blob([value], { type: "text/plain" }));
    await navigator.clipboard.write([new ClipboardItem({ "text/plain": blob })]);
    return;
  }
  await navigator.clipboard.writeText(await text);
}

export interface CopyPageButtonProps {
  readonly pattern: Pattern;
}

/**
 * Split button that copies the whole pattern page as Markdown for LLMs. The chevron opens a
 * menu with the same copy action and a plain-text view of the Markdown.
 */
export function CopyPageButton({ pattern }: CopyPageButtonProps) {
  const locale = useLocale();
  const messages = useMessages();
  const statusLabel: Record<CopyStatus, string> = {
    idle: messages.copyPage.idle,
    loading: messages.copyPage.loading,
    copied: messages.copyPage.copied,
    failed: messages.copyPage.failed,
  };
  const [status, setStatus] = useState<CopyStatus>("idle");
  const [menuOpen, setMenuOpen] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const markdownRef = useRef<Promise<string> | undefined>(undefined);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  useEffect(() => {
    if (!menuOpen) return;
    itemRefs.current[0]?.focus();
    function closeOnOutsidePress(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [menuOpen]);

  /** One fetch per page visit; a failed attempt is dropped so the next click retries. */
  function markdown(): Promise<string> {
    if (!markdownRef.current) {
      const attempt = loadPatternMarkdown(pattern, window.location.href, locale);
      markdownRef.current = attempt;
      attempt.catch(() => {
        if (markdownRef.current === attempt) markdownRef.current = undefined;
      });
    }
    return markdownRef.current;
  }

  function finish(next: CopyStatus) {
    setStatus(next);
    timerRef.current = window.setTimeout(() => setStatus("idle"), RESET_DELAY_MS);
  }

  async function copy() {
    window.clearTimeout(timerRef.current);
    setStatus("loading");
    try {
      await writeToClipboard(markdown());
      finish("copied");
    } catch {
      finish("failed");
    }
  }

  async function view() {
    window.clearTimeout(timerRef.current);
    // Open the tab before the async load so the popup blocker sees the click.
    const tab = window.open("", "_blank");
    if (!tab) {
      finish("failed");
      return;
    }
    setStatus("loading");
    try {
      const text = await markdown();
      const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
      tab.location.href = url;
      window.setTimeout(() => URL.revokeObjectURL(url), BLOB_URL_LIFETIME_MS);
      setStatus("idle");
    } catch {
      tab.close();
      finish("failed");
    }
  }

  function closeMenu(restoreFocus: boolean) {
    setMenuOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  }

  function onMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const items = itemRefs.current.filter((item): item is HTMLButtonElement => item !== null);
    const current = items.indexOf(document.activeElement as HTMLButtonElement);
    const focusAt = (index: number) => {
      event.preventDefault();
      items[(index + items.length) % items.length]?.focus();
    };
    switch (event.key) {
      case "ArrowDown":
        focusAt(current + 1);
        break;
      case "ArrowUp":
        focusAt(current - 1);
        break;
      case "Home":
        focusAt(0);
        break;
      case "End":
        focusAt(items.length - 1);
        break;
      case "Escape":
        event.preventDefault();
        closeMenu(true);
        break;
      case "Tab":
        setMenuOpen(false);
        break;
    }
  }

  const segment =
    "inline-flex items-center justify-center gap-2 border border-rule-strong py-1.5 max-sm:min-h-11 max-sm:min-w-11 text-caption font-medium text-graphite hover:bg-field hover:text-ink disabled:pointer-events-none disabled:opacity-50";

  return (
    <div ref={rootRef} className="relative shrink-0">
      <div className="inline-flex">
        <button
          type="button"
          onClick={() => void copy()}
          disabled={status === "loading"}
          className={`${segment} rounded-l-control px-3`}
        >
          <Icon path={status === "copied" ? ICON_CHECK : ICON_COPY} />
          <span aria-live="polite">{statusLabel[status]}</span>
        </button>
        <button
          ref={triggerRef}
          type="button"
          aria-label={messages.copyPage.more}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? menuId : undefined}
          onClick={() => setMenuOpen((open) => !open)}
          className={`${segment} -ml-px rounded-r-control px-2`}
        >
          <Icon path={ICON_CHEVRON} />
        </button>
      </div>

      {menuOpen ? (
        <div
          id={menuId}
          role="menu"
          aria-label={messages.copyPage.actions}
          onKeyDown={onMenuKeyDown}
          className="absolute top-full left-0 z-20 mt-2 w-64 max-w-[calc(100vw-2rem)] sm:right-0 sm:left-auto rounded-surface border border-rule bg-paper p-1 shadow-overlay"
        >
          {menuItems(messages.copyPage).map((item, index) => (
            <button
              key={item.id}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              type="button"
              role="menuitem"
              tabIndex={-1}
              onClick={() => {
                closeMenu(false);
                void (item.id === "copy" ? copy() : view());
              }}
              className="flex w-full items-start gap-3 rounded-control p-2 text-left hover:bg-field"
            >
              <span className="rounded-control border border-rule p-1.5 text-graphite">
                <Icon path={item.path} />
              </span>
              <span className="min-w-0">
                <span className="block text-caption font-medium text-ink">{item.label}</span>
                <span className="block text-micro text-graphite">{item.description}</span>
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
