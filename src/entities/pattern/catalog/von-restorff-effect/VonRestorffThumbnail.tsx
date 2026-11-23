import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as VonRestorffDemo: 모두 같게 → 하나만 다르게. */
export function VonRestorffThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-von-restorff-effect-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">모두 같게</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-von-restorff-effect-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">하나만 다르게</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-von-restorff-effect-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <span className="grid gap-[3px]">
            {["베이직 4,900원", "스탠더드 9,900원", "프리미엄 14,900원"].map((plan) => (
              <span key={plan} className="rounded border border-slate-200 px-[4px] py-[3px]">
                {plan}
              </span>
            ))}
          </span>
        </div>
        <div className="thumb-anim thumb-dk-von-restorff-effect-b absolute inset-0 bg-white p-[6px]">
          <span className="grid gap-[3px]">
            <span className="rounded border border-slate-200 px-[4px] py-[3px]">
              베이직 4,900원
            </span>
            <span className="rounded border-2 border-blue-600 bg-blue-50 px-[4px] py-[3px] font-semibold">
              스탠더드 9,900원 · 추천
            </span>
            <span className="rounded border border-slate-200 px-[4px] py-[3px]">
              프리미엄 14,900원
            </span>
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-von-restorff-effect-cursor" />
    </ThumbStage>
  );
}
