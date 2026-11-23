import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as LossAversionDemo: 이득으로 말하기 → 손실로 말하기. */
export function LossAversionThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-loss-aversion-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">이득으로 말하기</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-loss-aversion-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">손실로 말하기</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-loss-aversion-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="mt-[10px] block text-[8px]">오늘 가입하면 5,000원 쿠폰을 받아요</b>
        </div>
        <div className="thumb-anim thumb-dk-loss-aversion-b absolute inset-0 bg-white p-[6px]">
          <b className="mt-[10px] block text-[8px]">오늘 가입하지 않으면 5,000원 쿠폰이 사라져요</b>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-loss-aversion-cursor" />
    </ThumbStage>
  );
}
