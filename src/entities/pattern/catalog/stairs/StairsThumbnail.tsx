import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same article as StairsDemo: the stepped lines with 목차 open the outline → 인왕산. */
export function StairsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px]">
        <p className="flex h-[18px] items-center justify-between border-b border-slate-100 px-[6px]">
          <b>주말 산책 코스</b>
          <span className="flex items-center gap-[2px]">
            <svg viewBox="0 0 24 24" className="size-[10px] stroke-slate-800 stroke-2">
              <path d="M4 6h10M8 12h10M12 18h8" />
            </svg>
            목차
          </span>
        </p>
        <p className="thumb-anim thumb-stairs-done p-[6px] text-slate-600">
          <span>인왕산</span> 부분으로 이동했어요
        </p>
        <div
          className="thumb-anim thumb-stairs-menu absolute top-[20px] right-[6px] grid w-[56px] rounded-md bg-white p-[2px] shadow-lg ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          <span className="px-[3px] py-[2px]">서울숲</span>
          <span className="px-[3px] py-[2px]">한강공원</span>
          <span className="rounded bg-slate-100 px-[3px] py-[2px]">인왕산</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-stairs-cursor" />
    </ThumbStage>
  );
}
