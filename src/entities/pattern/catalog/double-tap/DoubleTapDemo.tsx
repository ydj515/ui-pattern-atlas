import { useState } from "react";
import { DoubleTap } from "@/shared/ui/patterns/double-tap/DoubleTap";

export function DoubleTapDemo() {
  const [liked, setLiked] = useState(false);
  const count = 12 + (liked ? 1 : 0);

  return (
    <article className="w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <DoubleTap label="바다 사진" liked={liked} onLike={() => setLiked(true)}>
        <div className="h-52 bg-gradient-to-b from-sky-300 via-sky-400 to-blue-700" />
      </DoubleTap>
      <div className="flex items-center justify-between px-3 py-2">
        <p className="text-sm text-slate-800">여름 바다</p>
        <button
          type="button"
          aria-pressed={liked}
          onClick={() => setLiked((value) => !value)}
          className="flex items-center gap-1 rounded-full px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 aria-pressed:text-rose-600"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`size-4 ${liked ? "fill-rose-600" : "fill-none stroke-current stroke-2"}`}
          >
            <path d="M12 21s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.1-8 11-8 11Z" />
          </svg>
          좋아요 {count}
        </button>
      </div>
    </article>
  );
}
