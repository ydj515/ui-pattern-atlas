import { useState } from "react";
import { MicroToggle } from "@/shared/ui/patterns/micro-interaction/MicroToggle";

function BookmarkIcon({ filled }: { readonly filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`size-4 ${filled ? "fill-slate-900" : "fill-none stroke-current stroke-2"}`}
    >
      <path d="M6 3h12v18l-6-4-6 4V3Z" />
    </svg>
  );
}

export function MicroToggleDemo() {
  const [saved, setSaved] = useState(false);
  return (
    <article className="w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="h-28 bg-gradient-to-br from-amber-200 to-orange-300" />
      <div className="flex items-center justify-between gap-2 p-3">
        <h3 className="text-sm font-semibold text-slate-900">주말 브런치 맛집 5곳</h3>
        <MicroToggle
          pressed={saved}
          onPressedChange={setSaved}
          label="저장"
          pressedLabel="저장됨"
          icon={(pressed) => <BookmarkIcon filled={pressed} />}
        />
      </div>
    </article>
  );
}
