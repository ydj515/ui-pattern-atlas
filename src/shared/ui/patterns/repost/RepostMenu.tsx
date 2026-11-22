import { useEffect, useRef, useState } from "react";

export interface RepostMenuProps {
  readonly reposted: boolean;
  readonly count: number;
  readonly onRepost: (reposted: boolean) => void;
  readonly onQuote: () => void;
  readonly labels?: {
    readonly button: string;
    readonly repost: string;
    readonly undo: string;
    readonly quote: string;
  };
}

const DEFAULT_LABELS = {
  button: "리포스트",
  repost: "리포스트",
  undo: "리포스트 취소",
  quote: "인용하기",
};

function RepostIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <path
        d="M7 7h10l-3-3M17 17H7l3 3M17 7v5M7 17v-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Repost button that opens a two-item menu: share the post to your followers as is, or
 * quote it with your own words. Once reposted, the same menu offers to undo it.
 */
export function RepostMenu({
  reposted,
  count,
  onRepost,
  onQuote,
  labels = DEFAULT_LABELS,
}: RepostMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) menuRef.current?.querySelector("button")?.focus();
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${labels.button} ${count}`}
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm hover:bg-slate-100 ${reposted ? "text-emerald-600" : "text-slate-700"}`}
      >
        <RepostIcon />
        <span className="tabular-nums">{count}</span>
      </button>
      {open ? (
        <div
          ref={menuRef}
          role="menu"
          onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
          className="absolute bottom-full left-0 z-10 mb-1 grid w-36 rounded-xl bg-white p-1 shadow-lg ring-1 ring-slate-200"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              onRepost(!reposted);
              setOpen(false);
            }}
            className="rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 focus-visible:bg-slate-100"
          >
            {reposted ? labels.undo : labels.repost}
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              onQuote();
              setOpen(false);
            }}
            className="rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 focus-visible:bg-slate-100"
          >
            {labels.quote}
          </button>
        </div>
      ) : null}
    </div>
  );
}
