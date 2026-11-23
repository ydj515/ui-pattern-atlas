import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as PeakEndDemo: 밋밋한 끝 → 좋은 끝. */
export function PeakEndThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-peak-end-rule-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">밋밋한 끝</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-peak-end-rule-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">좋은 끝</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-peak-end-rule-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[8px]">배송 완료</b>
          <span className="block text-slate-500">주문 #2481</span>
        </div>
        <div className="thumb-anim thumb-dk-peak-end-rule-b absolute inset-0 bg-white p-[6px]">
          <b className="text-[8px]">배송 완료</b>
          <span className="mt-[3px] block h-[22px] rounded bg-gradient-to-br from-amber-100 to-amber-300" />
          <span className="mt-[3px] block">문 앞에 두었어요. 맛있게 드세요</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-peak-end-rule-cursor" />
    </ThumbStage>
  );
}
