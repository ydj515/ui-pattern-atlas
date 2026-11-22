import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same chat as SendButtonDemo: type 곧 도착해요 → send → the plane flies off and the bubble rises in. */
export function SendButtonThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[28px] h-[108px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 bg-slate-50 text-[7px]">
        <p className="absolute top-[44px] left-[6px] rounded-[8px] rounded-bl-[2px] bg-white px-[6px] py-[3px] shadow-sm">
          어디쯤이에요?
        </p>
        <p className="thumb-anim thumb-snd-bubble absolute top-[64px] right-[6px] rounded-[8px] rounded-br-[2px] bg-blue-600 px-[6px] py-[3px] text-white">
          곧 도착해요
        </p>
        <div className="absolute inset-x-0 bottom-0 flex h-[22px] items-center gap-[4px] border-t border-slate-200 bg-white px-[6px]">
          <span className="relative h-[14px] flex-1 rounded-full border border-slate-300 px-[5px] leading-[13px]">
            <span className="thumb-anim thumb-snd-hint absolute text-slate-400">곧 도착해요</span>
            <span className="thumb-anim thumb-snd-text absolute" style={{ opacity: 0 }}>
              곧 도착해요
            </span>
          </span>
          <span className="relative grid size-[14px] place-items-center overflow-hidden rounded-full bg-slate-300 text-white">
            <span
              className="thumb-anim thumb-snd-ready absolute inset-0 bg-blue-600"
              style={{ opacity: 0 }}
            />
            <svg
              viewBox="0 0 24 24"
              className="thumb-anim thumb-snd-plane relative size-[8px] fill-current"
            >
              <path d="M3 11.5 20.5 4l-7.5 17.5-2.5-7.5L3 11.5Z" />
            </svg>
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-snd-cursor" />
    </ThumbStage>
  );
}
