import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same article as ShareSheetDemo: 공유 → the fallback sheet → 링크 복사 → 링크를 복사했어요. */
export function ShareSheetThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="flex gap-[3px] text-[5.5px]">
          <span className="rounded border border-slate-900 px-[3px] font-semibold">iOS</span>
          <span className="rounded border border-slate-200 px-[3px]">안드로이드</span>
        </p>
        <p className="absolute top-[78px] left-[8px] text-[6.5px] font-bold">가을 산책 코스 5곳</p>
        <span className="absolute top-[78px] right-[6px] flex items-center gap-[2px] rounded border border-slate-200 px-[3px] py-[1px]">
          <svg viewBox="0 0 24 24" className="size-[7px] fill-none stroke-current stroke-2">
            <path d="M12 3v12M8 7l4-4 4 4M6 11H5v10h14V11h-1" />
          </svg>
          공유
        </span>
        <p className="thumb-anim thumb-sh-done absolute top-[92px] left-[8px] text-[5.5px] text-slate-600">
          링크를 복사했어요
        </p>
      </div>
      <div
        className="thumb-anim thumb-sh-sheet absolute top-[22px] left-[56px] w-[84px] rounded-lg bg-white p-[4px] text-center text-[5px] shadow-xl ring-1 ring-slate-200"
        style={{ opacity: 0 }}
      >
        <p className="truncate text-left text-slate-500">https://atlas.example/p/42</p>
        <p className="mt-[3px] grid grid-cols-3">
          {[
            ["⧉", "링크 복사"],
            ["✉", "메시지"],
            ["@", "이메일"],
          ].map(([icon, label]) => (
            <span key={label} className="grid justify-items-center gap-[1px]">
              <span className="grid size-[12px] place-items-center rounded-full bg-slate-100 text-[6px]">
                {icon}
              </span>
              {label}
            </span>
          ))}
        </p>
        <p className="mt-[3px] text-slate-600">닫기</p>
      </div>
      <ThumbCursor motion="thumb-share-sheet-cursor" />
    </ThumbStage>
  );
}
