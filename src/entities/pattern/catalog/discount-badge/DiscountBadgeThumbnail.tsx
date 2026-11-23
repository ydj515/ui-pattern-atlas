import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same earphones as DiscountBadgeDemo: 쿠폰 적용 → the badge recalculates from the same reference, 25% → 50%. */
export function DiscountBadgeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b className="text-[8px]">무선 이어폰</b>
        <p className="mt-[5px] flex items-baseline gap-[3px]">
          <span className="grid rounded-[2px] bg-rose-600 px-[3px] font-bold text-white">
            <span className="thumb-anim thumb-pdb-a col-start-1 row-start-1" style={{ opacity: 0 }}>
              25%
            </span>
            <span className="thumb-anim thumb-pdb-b col-start-1 row-start-1">50%</span>
          </span>
          <span className="text-[5px] text-slate-500">최근 30일 판매가 39,000원 기준</span>
        </p>
        <p className="mt-[4px] grid text-[12px] font-bold tabular-nums">
          <span className="thumb-anim thumb-pdb-a col-start-1 row-start-1" style={{ opacity: 0 }}>
            29,000원
          </span>
          <span className="thumb-anim thumb-pdb-b col-start-1 row-start-1">19,500원</span>
        </p>
        <span className="mt-[6px] grid w-fit rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
          <span className="thumb-anim thumb-pdb-a col-start-1 row-start-1" style={{ opacity: 0 }}>
            쿠폰 적용
          </span>
          <span className="thumb-anim thumb-pdb-b col-start-1 row-start-1">쿠폰 적용 취소</span>
        </span>
      </div>
      <ThumbCursor motion="thumb-pdb-cursor" />
    </ThumbStage>
  );
}
