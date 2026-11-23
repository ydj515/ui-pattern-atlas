import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as RoachMotelDemo: 다크 패턴 → 바른 방법. */
export function RoachMotelThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-roach-motel-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-roach-motel-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-roach-motel-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="text-[7px]">구독 중 · 월 9,900원</b>
          <span className="mt-[8px] block text-[5px] text-slate-400">
            해지는 고객센터(평일 10~17시)로 전화해 주세요
          </span>
        </div>
        <div className="thumb-anim thumb-dk-roach-motel-b absolute inset-0 bg-white p-[6px]">
          <b className="text-[7px]">구독 중 · 월 9,900원</b>
          <span className="mt-[5px] block rounded border border-rose-300 py-[2px] text-center text-rose-700">
            구독 해지
          </span>
          <span className="mt-[3px] block text-[5.5px] text-slate-600">
            다음 결제일 12월 1일까지 이용할 수 있어요
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-roach-motel-cursor" />
    </ThumbStage>
  );
}
