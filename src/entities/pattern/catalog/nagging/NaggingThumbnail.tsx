import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as NaggingDemo: 다크 패턴 → 바른 방법. */
export function NaggingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-nagging-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-nagging-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-nagging-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[7px]">알림을 켜 주세요</b>
          <span className="block text-[5.5px] text-rose-600">오늘 3번째 요청</span>
          <span className="mt-[4px] block rounded border border-slate-200 py-[2px] text-center">
            나중에
          </span>
        </div>
        <div className="thumb-anim thumb-dk-nagging-b absolute inset-0 bg-white p-[6px]">
          <b className="text-[7px]">알림을 켜 주세요</b>
          <span className="block text-[5.5px] text-slate-500">한 번만 물어요</span>
          <span className="mt-[4px] grid grid-cols-2 gap-[2px]">
            <span className="rounded border border-slate-200 py-[2px] text-center">나중에</span>
            <span className="rounded border border-slate-200 py-[2px] text-center">
              다시 묻지 않기
            </span>
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-nagging-cursor" />
    </ThumbStage>
  );
}
