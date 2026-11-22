import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same list as LoadMoreDemo: 더 보기 (6/24) → six more 후기 → focus lands on the first new one. */
export function LoadMoreThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[32px] h-[104px] w-[112px] overflow-hidden">
        <div
          className="thumb-anim thumb-lm-scroll relative"
          style={{ transform: "translateY(-60px)" }}
        >
          <ul className="rounded-[4px] border border-slate-200 text-[6px]">
            {Array.from({ length: 12 }, (_, index) => (
              <li
                key={index}
                className={`relative h-[12px] border-b border-slate-100 px-[6px] leading-[12px] text-slate-700 last:border-b-0 ${index >= 6 ? "thumb-anim thumb-lm-new" : ""}`}
              >
                {index === 6 ? (
                  <span className="thumb-anim thumb-lm-new absolute inset-0 bg-blue-50" />
                ) : null}
                <span className="relative">{index + 1}번째 후기</span>
              </li>
            ))}
          </ul>
          <span className="thumb-anim thumb-lm-btn1 absolute top-[76px] left-0 grid h-[13px] w-[112px] place-items-center rounded-[4px] border border-slate-300 bg-white text-[6px] font-medium opacity-0">
            더 보기 (6/24)
          </span>
          <span className="thumb-anim thumb-lm-new mt-[4px] grid h-[13px] w-[112px] place-items-center rounded-[4px] border border-slate-300 bg-white text-[6px] font-medium">
            더 보기 (12/24)
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-lm-cursor" />
    </ThumbStage>
  );
}
