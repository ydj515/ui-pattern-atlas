import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as DefaultEffectDemo: 기본값 없음 → 기본값 있음. */
export function DefaultEffectThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-default-effect-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본값 없음</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-default-effect-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">기본값 있음</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-default-effect-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b>기부 금액</b>
          <span className="mt-[3px] grid grid-cols-3 gap-[2px]">
            {["5,000원", "10,000원", "30,000원"].map((amount) => (
              <span key={amount} className="rounded border border-slate-200 py-[3px] text-center">
                {amount}
              </span>
            ))}
          </span>
        </div>
        <div className="thumb-anim thumb-dk-default-effect-b absolute inset-0 bg-white p-[6px]">
          <b>기부 금액</b>
          <span className="mt-[3px] grid grid-cols-3 gap-[2px]">
            <span className="rounded border border-slate-200 py-[3px] text-center">5,000원</span>
            <span className="rounded border border-blue-600 bg-blue-50 py-[3px] text-center">
              10,000원
            </span>
            <span className="rounded border border-slate-200 py-[3px] text-center">30,000원</span>
          </span>
          <span className="mt-[2px] block text-[5px] text-slate-500">
            가장 많이 고른 금액이에요
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-default-effect-cursor" />
    </ThumbStage>
  );
}
