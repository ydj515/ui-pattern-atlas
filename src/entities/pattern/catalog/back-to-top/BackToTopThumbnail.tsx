import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same list as BackToTopDemo: scroll down → 맨 위로 appears → back at 공지사항 with focus. */
export function BackToTopThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[40px] h-[104px] w-[96px] overflow-hidden rounded-md border border-slate-200">
        <div className="thumb-anim thumb-btt-scroll text-[6px]">
          <p className="relative px-[6px] pt-[5px] pb-[3px] text-[7px] font-semibold">
            <span className="thumb-anim thumb-btt-focus absolute inset-x-[3px] inset-y-[2px] rounded-[2px] ring-[1.5px] ring-blue-500" />
            공지사항
          </p>
          {Array.from({ length: 16 }, (_, index) => (
            <p
              key={index}
              className="h-[12px] border-b border-slate-100 px-[6px] leading-[12px] text-slate-700"
            >
              공지 {index + 1}
            </p>
          ))}
        </div>
        <span className="thumb-anim thumb-btt-button absolute right-[6px] bottom-[6px] grid h-[14px] w-[40px] place-items-center rounded-full bg-slate-900 text-[5.5px] font-medium text-white opacity-0">
          ↑ 맨 위로
        </span>
      </div>
      <ThumbCursor motion="thumb-btt-cursor" />
    </ThumbStage>
  );
}
