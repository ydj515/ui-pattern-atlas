import { useId, type ReactNode } from "react";

export interface ShareTarget {
  readonly id: string;
  readonly label: string;
  readonly icon: ReactNode;
}

export interface ShareSheetProps {
  readonly title: string;
  readonly url: string;
  /** Icon style people know from their platform: iOS box-and-arrow or Android three dots. */
  readonly platform: "ios" | "android";
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
  /** Fallback targets when the device share sheet is not available. */
  readonly targets: readonly ShareTarget[];
  readonly onTarget: (id: string) => void;
  readonly shareLabel?: string;
  readonly closeLabel?: string;
}

export function ShareIcon({ platform }: { readonly platform: "ios" | "android" }) {
  return platform === "ios" ? (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <path
        d="M12 3v12M8 7l4-4 4 4M6 11H5v10h14V11h-1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8 11l8-5M8 13l8 5" className="fill-none stroke-current stroke-2" />
    </svg>
  );
}

/**
 * Share button that opens the device's own share sheet (navigator.share) and falls
 * back to a small sheet of targets where that API is missing, such as most desktop
 * browsers. The icon follows the platform people use.
 */
export function ShareSheet({
  title,
  url,
  platform,
  open,
  onOpenChange,
  targets,
  onTarget,
  shareLabel = "공유",
  closeLabel = "닫기",
}: ShareSheetProps) {
  const id = useId();

  async function share() {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    onOpenChange(true);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={share}
        aria-expanded={open}
        aria-controls={id}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
      >
        <ShareIcon platform={platform} />
        {shareLabel}
      </button>
      {open ? (
        <section
          id={id}
          role="dialog"
          aria-label={shareLabel}
          onKeyDown={(event) => event.key === "Escape" && onOpenChange(false)}
          className="absolute right-0 bottom-full z-10 mb-2 w-60 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200"
        >
          <p className="truncate text-xs text-slate-500">{url}</p>
          <ul className="mt-2 grid grid-cols-3 gap-2">
            {targets.map((target, index) => (
              <li key={target.id}>
                <button
                  type="button"
                  autoFocus={index === 0}
                  onClick={() => onTarget(target.id)}
                  className="grid w-full justify-items-center gap-1 rounded-lg py-2 text-xs text-slate-700 hover:bg-slate-100"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-9 place-items-center rounded-full bg-slate-100"
                  >
                    {target.icon}
                  </span>
                  {target.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="mt-2 w-full rounded-lg py-1.5 text-xs text-slate-600 hover:bg-slate-100"
          >
            {closeLabel}
          </button>
        </section>
      ) : null}
    </div>
  );
}
