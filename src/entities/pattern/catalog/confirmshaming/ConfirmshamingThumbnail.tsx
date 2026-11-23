import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as ConfirmshamingDemo: 다크 패턴 → 바른 방법. */
export function ConfirmshamingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-confirmshaming-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-confirmshaming-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-confirmshaming-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[7px]">첫 구매 10% 할인 쿠폰 받기</b>
          <span className="mt-[5px] block text-center rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
            쿠폰 받기
          </span>
          <span className="mt-[4px] block text-center text-[5.5px] text-slate-500 underline">
            아니요, 저는 제값 다 낼게요
          </span>
        </div>
        <div className="thumb-anim thumb-dk-confirmshaming-b absolute inset-0 bg-white p-[6px]">
          <b className="text-[7px]">첫 구매 10% 할인 쿠폰 받기</b>
          <span className="mt-[5px] block text-center rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
            쿠폰 받기
          </span>
          <span className="mt-[4px] block rounded border border-slate-200 py-[2px] text-center">
            괜찮아요
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-confirmshaming-cursor" />
    </ThumbStage>
  );
}
