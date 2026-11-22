import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same shelf as AchievementBadgeDemo: 후기 쓰기 → 후기 다섯 개 turns from 4/5 to earned. */
export function AchievementBadgeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[28px] h-[108px] w-[120px] rounded-[12px] border border-slate-200 p-[7px] text-center text-[5.5px]">
        <p className="text-left text-[8px] font-bold">내 배지</p>
        <div className="mt-[6px] grid grid-cols-3">
          <span className="grid justify-items-center gap-[2px]">
            <span className="grid size-[24px] place-items-center rounded-full bg-amber-300 text-[11px] text-amber-900">
              ★
            </span>
            <b>첫 주문</b>
            <span className="text-slate-500">11월 3일 획득</span>
          </span>
          <span className="grid justify-items-center gap-[2px]">
            <span className="relative grid size-[24px] place-items-center rounded-full bg-slate-100 text-[11px] text-slate-400">
              ✎
              <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  pathLength={100}
                  strokeDasharray="80 100"
                />
              </svg>
              <span className="thumb-anim thumb-ab-earned absolute inset-0 grid place-items-center rounded-full bg-amber-300 text-amber-900">
                ✎
              </span>
            </span>
            <b>후기 다섯 개</b>
            <span className="grid text-slate-500">
              <span
                className="thumb-anim thumb-ab-locked col-start-1 row-start-1"
                style={{ opacity: 0 }}
              >
                4/5
              </span>
              <span className="thumb-anim thumb-ab-text col-start-1 row-start-1">오늘 획득</span>
            </span>
          </span>
          <span className="grid justify-items-center gap-[2px]">
            <span className="relative grid size-[24px] place-items-center rounded-full bg-slate-100 text-[11px] text-slate-400">
              ◆
              <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  pathLength={100}
                  strokeDasharray="40 100"
                />
              </svg>
            </span>
            <b className="text-slate-500">한 달 연속</b>
            <span className="text-slate-500">12/30</span>
          </span>
        </div>
        <p className="thumb-anim thumb-ab-text mt-[5px] font-semibold text-amber-700">
          배지를 받았어요: 후기 다섯 개
        </p>
        <span className="absolute inset-x-[7px] bottom-[7px] grid h-[12px] rounded bg-slate-900 text-[6px] font-semibold text-white">
          <span
            className="thumb-anim thumb-ab-locked col-start-1 row-start-1 place-self-center"
            style={{ opacity: 0 }}
          >
            후기 쓰기
          </span>
          <span className="thumb-anim thumb-ab-text col-start-1 row-start-1 place-self-center">
            처음부터
          </span>
        </span>
      </div>
      <ThumbCursor motion="thumb-ab-cursor" />
    </ThumbStage>
  );
}
