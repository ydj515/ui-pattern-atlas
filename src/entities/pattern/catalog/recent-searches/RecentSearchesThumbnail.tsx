import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const X = (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="size-[6px] text-slate-400">
    <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

/** Same history as RecentSearchesDemo: delete 캔버스 백 → tap 린넨 셔츠 to search it again. */
export function RecentSearchesThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <span className="relative block h-[16px] rounded-[4px] border border-slate-300 px-[4px] leading-[14px]">
          <span
            className="thumb-anim thumb-srs-empty absolute text-slate-400"
            style={{ opacity: 0 }}
          >
            상품 검색
          </span>
          <span className="thumb-anim thumb-srs-filled absolute">린넨 셔츠</span>
        </span>
        <p className="mt-[6px] flex justify-between">
          <b>최근 검색어</b>
          <span className="text-[5.5px] text-slate-500">전체 삭제</span>
        </p>
        <p className="mt-[2px] flex h-[12px] items-center justify-between">린넨 셔츠 {X}</p>
        <p
          className="thumb-anim thumb-srs-gone flex h-[12px] items-center justify-between"
          style={{ opacity: 0 }}
        >
          캔버스 백 {X}
        </p>
        <p
          className="thumb-anim thumb-srs-up flex h-[12px] items-center justify-between"
          style={{ transform: "translateY(-12px)" }}
        >
          무선 이어폰 {X}
        </p>
        <span className="mt-[2px] block text-[5.5px] text-slate-500 underline">처음부터</span>
      </div>
      <ThumbCursor motion="thumb-srs-cursor" />
    </ThumbStage>
  );
}
