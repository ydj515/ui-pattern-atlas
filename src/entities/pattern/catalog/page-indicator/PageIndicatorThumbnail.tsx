import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PAGES = [
  "할 일을 한곳에 모아요",
  "마감일을 알려 드려요",
  "팀과 함께 나눠요",
  "이제 시작해 볼까요",
] as const;

/** Same onboarding as PageIndicatorDemo: 다음 three times; the wide dot follows. */
export function PageIndicatorThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[44px] h-[100px] w-[88px] rounded-[8px] border border-slate-200">
        {PAGES.map((page, index) => (
          <div
            key={page}
            className={`thumb-anim thumb-pi-p${index} absolute inset-0 ${index === 3 ? "" : "opacity-0"}`}
          >
            <p className="absolute inset-x-[6px] top-[24px] text-center text-[7px] leading-[10px] font-semibold">
              {page}
            </p>
            <span className="absolute top-[64px] left-1/2 flex -translate-x-1/2 gap-[2px]">
              {PAGES.map((dot, dotIndex) => (
                <span
                  key={dot}
                  className={`h-[3px] rounded-full ${dotIndex === index ? "w-[9px] bg-slate-900" : "w-[3px] bg-slate-300"}`}
                />
              ))}
            </span>
          </div>
        ))}
        <span className="absolute top-[78px] left-[8px] grid h-[14px] w-[72px] place-items-center rounded-[3px] bg-slate-900 text-[6.5px] font-semibold text-white">
          <span className="thumb-anim thumb-pi-next opacity-0">다음</span>
          <span className="thumb-anim thumb-pi-p3 absolute">처음으로</span>
        </span>
      </div>
      <ThumbCursor motion="thumb-pi-cursor" />
    </ThumbStage>
  );
}
