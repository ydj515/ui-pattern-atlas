import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same transfer as SuccessCheckmarkDemo: 보내기 → 보내는 중 → the check draws itself → 보냈어요. */
export function SuccessCheckmarkThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[44px] h-[108px] w-[88px] rounded-[12px] border border-slate-200 text-center">
        <div
          className="thumb-anim thumb-sck-before absolute inset-x-[6px] top-[26px] grid gap-[3px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[6px] text-slate-600">받는 분 하늘</p>
          <p className="text-[12px] font-bold tabular-nums">50,000원</p>
          <span className="relative mt-[6px] grid h-[12px] rounded bg-blue-600 text-[6.5px] font-semibold text-white">
            <span className="thumb-anim thumb-sck-idle col-start-1 row-start-1 place-self-center">
              보내기
            </span>
            <span
              className="thumb-anim thumb-sck-busy col-start-1 row-start-1 place-self-center"
              style={{ opacity: 0 }}
            >
              보내는 중
            </span>
          </span>
        </div>
        <div className="thumb-anim thumb-sck-after absolute inset-x-[6px] top-[20px] grid justify-items-center gap-[5px]">
          <span className="thumb-anim thumb-sck-circle relative grid size-[26px] place-items-center rounded-full bg-emerald-500">
            <svg viewBox="0 0 52 52" className="size-[26px]">
              <path
                d="M15 27l7 7 15-15"
                fill="none"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="thumb-anim thumb-sck-cover absolute top-[7px] right-[5px] h-[12px] w-[16px] origin-right bg-emerald-500"
              style={{ transform: "scaleX(0)" }}
            />
          </span>
          <p className="text-[8px] font-bold">보냈어요</p>
          <span className="rounded border border-slate-200 px-[4px] text-[6px]">다시 보내기</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-sck-cursor" />
    </ThumbStage>
  );
}
