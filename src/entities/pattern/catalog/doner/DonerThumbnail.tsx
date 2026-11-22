import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same results as DonerDemo: the stepped lines open 정렬 → 가격 낮은 순. */
export function DonerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px]">
        <p className="flex h-[18px] items-center justify-between border-b border-slate-100 px-[6px]">
          <b>검색 결과 24개</b>
          <svg viewBox="0 0 24 24" className="size-[10px] stroke-slate-800 stroke-2">
            <path d="M4 7h16M7 12h10M10 17h4" />
          </svg>
        </p>
        <p className="grid p-[6px] text-slate-600">
          <span className="thumb-anim thumb-doner-a col-start-1 row-start-1" style={{ opacity: 0 }}>
            <span>추천순</span>으로 보는 중
          </span>
          <span className="thumb-anim thumb-doner-b col-start-1 row-start-1">
            <span>가격 낮은 순</span>으로 보는 중
          </span>
        </p>
        <div
          className="thumb-anim thumb-doner-sheet absolute inset-0 bg-slate-900/30"
          style={{ opacity: 0 }}
        >
          <div className="absolute inset-x-0 bottom-0 rounded-t-[8px] bg-white p-[6px]">
            <b>정렬</b>
            {["추천순", "가격 낮은 순", "후기 많은 순"].map((item, index) => (
              <p key={item} className="mt-[3px] flex items-center gap-[3px]">
                <span
                  className={`size-[6px] rounded-full border ${index === 0 ? "border-[2px] border-blue-600" : "border-slate-400"}`}
                />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-doner-cursor" />
    </ThumbStage>
  );
}
