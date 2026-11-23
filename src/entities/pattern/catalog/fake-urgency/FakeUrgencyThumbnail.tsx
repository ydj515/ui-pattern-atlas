import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as FakeUrgencyDemo: 다크 패턴 → 바른 방법. */
export function FakeUrgencyThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-fake-urgency-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-fake-urgency-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-fake-urgency-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <span className="block rounded bg-rose-600 py-[3px] text-center font-bold text-white">
            특가 종료까지 09:59
          </span>
          <span className="mt-[3px] block text-center text-[5px] text-slate-400">
            새로고침하면 다시 10:00부터
          </span>
        </div>
        <div className="thumb-anim thumb-dk-fake-urgency-b absolute inset-0 bg-white p-[6px]">
          <span className="block rounded bg-slate-100 py-[3px] text-center font-semibold">
            특가는 11월 30일 23:59에 끝나요
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-fake-urgency-cursor" />
    </ThumbStage>
  );
}
