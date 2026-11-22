import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same alert as TapTargetDemo: 누르는 영역 보기 → the 44px area shows → tap × → 알림을 닫았어요. */
export function TapTargetThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-tap-card absolute top-[22px] left-[12px] flex h-[26px] w-[152px] items-center rounded-md border border-slate-200 bg-white pl-[8px] text-[7.5px]">
        <span className="flex-1">택배가 도착했어요</span>
        <span className="relative grid size-[24px] place-items-center text-[11px] text-slate-500">
          <span
            className="thumb-anim thumb-tap-press absolute inset-0 rounded bg-slate-200"
            style={{ opacity: 0 }}
          />
          <span className="relative">×</span>
          <span className="thumb-anim thumb-tap-area absolute inset-0 rounded outline-1 outline-rose-400 outline-dashed" />
        </span>
      </div>
      <p
        className="thumb-anim thumb-tap-done absolute top-[28px] left-[14px] text-[7.5px] text-slate-600"
        style={{ opacity: 0 }}
      >
        알림을 닫았어요 <b className="text-blue-700">다시 보기</b>
      </p>
      <p className="absolute top-[64px] left-[14px] flex items-center gap-[4px] text-[7px] text-slate-700">
        <span className="relative size-[8px] rounded-[2px] border border-slate-400">
          <span className="thumb-anim thumb-tap-check absolute inset-0 grid place-items-center bg-blue-600 text-[6px] leading-none text-white">
            ✓
          </span>
        </span>
        누르는 영역 보기
      </p>
      <ThumbCursor motion="thumb-tap-cursor" />
    </ThumbStage>
  );
}
