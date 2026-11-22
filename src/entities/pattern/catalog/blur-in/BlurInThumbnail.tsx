import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same sentence as BlurInDemo: 다시 보기 → the line comes into focus. */
export function BlurInThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[10px] h-[64px] w-[156px] rounded-lg bg-gradient-to-br from-indigo-50 to-sky-50 p-[8px]">
        <p className="text-[6px] text-slate-600">오늘의 문장</p>
        <div className="relative mt-[4px] text-[11px] leading-[15px] font-semibold">
          <p
            className="thumb-anim thumb-bi-blur absolute inset-0 blur-[2px]"
            style={{ opacity: 0 }}
          >
            작은 습관이 큰 변화를 만듭니다
          </p>
          <p className="thumb-anim thumb-bi-sharp">작은 습관이 큰 변화를 만듭니다</p>
        </div>
      </div>
      <span className="absolute top-[80px] left-[10px] rounded border border-slate-200 px-[6px] py-[2px] text-[7px]">
        다시 보기
      </span>
      <ThumbCursor motion="thumb-bi-cursor" />
    </ThumbStage>
  );
}
