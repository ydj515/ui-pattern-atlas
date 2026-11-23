import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as FittsLawDemo: 작고 먼 버튼 → 크고 가까운 버튼. */
export function FittsLawThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-fitts-law-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">작고 먼 버튼</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-fitts-law-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">크고 가까운 버튼</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-fitts-law-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <span className="absolute top-[2px] right-[2px] text-[5px] text-blue-700 underline">
            결제하기
          </span>
          <span className="mt-[14px] block">린넨 셔츠 39,000원</span>
        </div>
        <div className="thumb-anim thumb-dk-fitts-law-b absolute inset-0 bg-white p-[6px]">
          <span className="block">린넨 셔츠 39,000원</span>
          <span className="absolute inset-x-[6px] bottom-[6px] grid h-[18px] place-items-center rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
            결제하기
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-fitts-law-cursor" />
    </ThumbStage>
  );
}
