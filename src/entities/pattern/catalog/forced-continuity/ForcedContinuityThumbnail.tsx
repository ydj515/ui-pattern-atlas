import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as ForcedContinuityDemo: 다크 패턴 → 바른 방법. */
export function ForcedContinuityThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-forced-continuity-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-forced-continuity-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-forced-continuity-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[8px]">7일 무료 체험</b>
          <span className="mt-[4px] block text-center rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
            무료로 시작하기
          </span>
          <span className="mt-[3px] block text-[5px] text-slate-400">
            이후 월 14,900원 자동 결제
          </span>
        </div>
        <div className="thumb-anim thumb-dk-forced-continuity-b absolute inset-0 bg-white p-[6px]">
          <b className="text-[8px]">7일 무료 체험</b>
          <span className="mt-[2px] block text-[6px]">12월 1일부터 월 14,900원이 결제돼요</span>
          <span className="block text-[5px] text-slate-500">
            결제 하루 전에 알려 드리고, 언제든 해지할 수 있어요
          </span>
          <span className="mt-[3px] block text-center rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
            무료로 시작하기
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-forced-continuity-cursor" />
    </ThumbStage>
  );
}
