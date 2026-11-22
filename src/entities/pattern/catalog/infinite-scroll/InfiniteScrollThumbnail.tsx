import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same feed as InfiniteScrollDemo: near the end → 더 불러오는 중 → the next 소식 appear. */
export function InfiniteScrollThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[40px] h-[104px] w-[96px] overflow-hidden rounded-md border border-slate-200">
        <ul
          className="thumb-anim thumb-is-list relative text-[6px]"
          style={{ transform: "translateY(-100px)" }}
        >
          {Array.from({ length: 14 }, (_, index) => (
            <li
              key={index}
              className={`h-[13px] border-b border-slate-100 px-[6px] leading-[13px] text-slate-700 ${index >= 10 ? "thumb-anim thumb-is-more" : ""}`}
            >
              소식 {index + 1}
            </li>
          ))}
          <li className="thumb-anim thumb-is-loading absolute inset-x-0 top-[130px] flex h-[13px] items-center justify-center gap-[3px] text-[5.5px] text-slate-500 opacity-0">
            <span className="thumb-anim thumb-lo-spin size-[6px] rounded-full border border-slate-200 border-t-blue-600" />
            더 불러오는 중
          </li>
        </ul>
      </div>
      <ThumbCursor motion="thumb-is-cursor" />
    </ThumbStage>
  );
}
