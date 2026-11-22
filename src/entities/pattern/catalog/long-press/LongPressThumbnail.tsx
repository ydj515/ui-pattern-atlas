import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same chat as LongPressDemo: hold the message → 답장 · 복사 · 고정 → 고정 선택함. */
export function LongPressThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-[6px] rounded-lg bg-slate-50" />
      <p className="thumb-anim thumb-lp-bubble absolute top-[18px] left-[16px] rounded-[9px] rounded-bl-[2px] bg-white px-[8px] py-[5px] text-[7.5px] shadow-sm">
        내일 몇 시에 만나요?
      </p>
      <span
        className="thumb-anim thumb-lp-ring absolute top-[24px] left-[106px] size-[10px] rounded-full border-2 border-blue-500"
        style={{ opacity: 0 }}
      />
      <div className="thumb-anim thumb-lp-menu absolute top-[44px] left-[16px] flex gap-[2px] rounded-md bg-white p-[2px] text-[7px] shadow-lg">
        <span className="rounded px-[6px] py-[3px]">답장</span>
        <span className="rounded px-[6px] py-[3px]">복사</span>
        <span className="rounded bg-slate-100 px-[6px] py-[3px]">고정</span>
      </div>
      <p
        className="thumb-anim thumb-lp-done absolute top-[70px] left-[16px] text-[6.5px] text-slate-600"
        style={{ opacity: 0 }}
      >
        고정 선택함
      </p>
      <ThumbCursor motion="thumb-lp-cursor" />
    </ThumbStage>
  );
}
