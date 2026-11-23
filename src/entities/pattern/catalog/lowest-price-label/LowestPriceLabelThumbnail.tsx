import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same earphones as LowestPriceLabelDemo: 최근 30일 최저가 → 기준 보기 shows how it was checked. */
export function LowestPriceLabelThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <span className="block h-[28px] rounded-md bg-gradient-to-br from-slate-100 to-slate-200" />
        <b className="mt-[3px] block text-[8px]">무선 이어폰</b>
        <b className="block text-[11px]">29,000원</b>
        <p className="mt-[2px] flex items-center gap-[3px]">
          <span className="rounded-[2px] bg-blue-600 px-[3px] text-[5.5px] font-semibold text-white">
            최근 30일 최저가
          </span>
          <span className="text-[5.5px] text-slate-600 underline">기준 보기</span>
        </p>
        <div className="thumb-anim thumb-plp-open mt-[3px] rounded bg-slate-50 p-[3px] text-[5.5px] text-slate-700">
          <p>11월 1일~30일 판매가</p>
          <p>이 판매처 기준, 쿠폰 제외</p>
        </div>
      </div>
      <ThumbCursor motion="thumb-plp-cursor" />
    </ThumbStage>
  );
}
