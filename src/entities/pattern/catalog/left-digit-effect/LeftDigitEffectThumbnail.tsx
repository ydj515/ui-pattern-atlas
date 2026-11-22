import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

export function LeftDigitEffectThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[16px] left-[16px] text-slate-700">
        <span>□</span>
        <span className="thumb-anim thumb-price-picked absolute left-0 bg-white text-blue-700">
          ✓
        </span>{" "}
        첫 자리 바꾸기
      </p>
      <div className="thumb-anim thumb-price-before absolute inset-x-[16px] top-[39px]">
        <p className="text-[15px] tabular-nums">
          <b className="text-blue-700">5</b>,800원 → <b className="text-blue-700">5</b>,900원
        </p>
        <p className="mt-1">가격 차이 100원 · 첫 자리가 같아요</p>
      </div>
      <div className="thumb-anim thumb-price-picked absolute inset-x-[16px] top-[39px]">
        <p className="text-[15px] tabular-nums">
          <b className="text-blue-700">5</b>,900원 → <b className="text-blue-700">6</b>,000원
        </p>
        <p className="mt-1">가격 차이 100원 · 첫 자리가 달라요</p>
      </div>
      <ThumbCursor motion="thumb-digit-cursor" />
    </ThumbStage>
  );
}
