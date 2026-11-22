import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same message as EmojiReactionDemo: + → the picker → 🙏 adds a new reaction. */
export function EmojiReactionThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] rounded-[12px] border border-slate-200 bg-slate-50 p-[8px]">
        <p className="text-[6px] text-slate-500">도윤</p>
        <p className="mt-[2px] w-fit rounded-[8px] rounded-tl-[2px] bg-white px-[6px] py-[3px] text-[7px] shadow-sm">
          회의 자료 올렸어요
        </p>
        <div className="relative mt-[6px] h-[11px] text-[6px]">
          <span className="absolute left-0 flex h-[11px] w-[20px] items-center justify-center gap-[2px] rounded-full border border-slate-200 bg-white">
            👍<b>3</b>
          </span>
          <span className="absolute left-[22px] flex h-[11px] w-[20px] items-center justify-center gap-[2px] rounded-full border border-slate-200 bg-white">
            🎉<b>1</b>
          </span>
          <span className="thumb-anim thumb-er-new absolute left-[44px] flex h-[11px] w-[20px] items-center justify-center gap-[2px] rounded-full border border-blue-500 bg-blue-50">
            🙏<b>1</b>
          </span>
          <span
            className="thumb-anim thumb-er-plus absolute left-[44px] grid size-[11px] place-items-center rounded-full border border-dashed border-slate-300 text-slate-500"
            style={{ transform: "translateX(22px)" }}
          >
            +
          </span>
        </div>
        <div
          className="thumb-anim thumb-er-picker absolute top-[54px] left-[8px] flex gap-[1px] rounded-full bg-white p-[1px] text-[8px] shadow-lg ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          {["👍", "🎉", "😂", "😮", "🙏"].map((emoji) => (
            <span key={emoji} className="grid size-[12px] place-items-center">
              {emoji}
            </span>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-er-cursor" />
    </ThumbStage>
  );
}
