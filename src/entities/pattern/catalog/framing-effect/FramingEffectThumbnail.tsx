import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as FramingEffectDemo: 지방 20% → 무지방 80%. */
export function FramingEffectThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-framing-effect-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">지방 20%</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-framing-effect-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">무지방 80%</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-framing-effect-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="block text-[7.5px]">플레인 요거트</b>
          <span className="mt-[5px] inline-block rounded-full bg-amber-100 px-[6px] py-[2px] text-[8px] font-bold text-amber-800">
            지방 20%
          </span>
        </div>
        <div className="thumb-anim thumb-dk-framing-effect-b absolute inset-0 bg-white p-[6px]">
          <b className="block text-[7.5px]">플레인 요거트</b>
          <span className="mt-[5px] inline-block rounded-full bg-emerald-100 px-[6px] py-[2px] text-[8px] font-bold text-emerald-800">
            무지방 80%
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-framing-effect-cursor" />
    </ThumbStage>
  );
}
