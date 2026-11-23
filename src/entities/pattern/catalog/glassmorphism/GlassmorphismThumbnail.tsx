import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same playlist card as GlassmorphismDemo: 재생 → 일시정지, then 반복 is switched off. */
export function GlassmorphismThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-400">
        <span className="absolute -top-[8px] -left-[8px] size-[48px] rounded-full bg-amber-300" />
        <span className="absolute -right-[10px] -bottom-[14px] size-[60px] rounded-full bg-cyan-300" />
        <div className="absolute top-[14px] left-[26px] h-[84px] w-[124px] p-[8px] rounded-[8px] border border-white/50 bg-white/20 backdrop-blur-[3px]">
          <div className="flex items-center gap-[6px]">
            <span className="grid size-[24px] shrink-0 place-items-center rounded-[6px] border border-white/60 bg-white/30 text-white">
              <svg viewBox="0 0 24 24" className="size-[12px]">
                <path
                  d="M9 18V6l10-2v12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="18" r="2.5" fill="currentColor" />
                <circle cx="17" cy="16" r="2.5" fill="currentColor" />
              </svg>
            </span>
            <span>
              <b className="block text-[7.5px] leading-[10px] text-white">오늘의 플레이리스트</b>
              <span className="block text-[5.5px] text-white/85">잔잔한 아침 음악 · 12곡</span>
            </span>
          </div>
          <div className="mt-[14px] flex items-center justify-between text-[6.5px]">
            <span className="relative grid h-[14px] w-[42px]">
              <span
                className="thumb-anim thumb-ds-glassmorphism-idle absolute inset-0 grid place-items-center rounded-[4px] border border-white/60 bg-white/25 font-semibold text-white"
                style={{ opacity: 0 }}
              >
                재생
              </span>
              <span className="thumb-anim thumb-ds-glassmorphism-on absolute inset-0 grid place-items-center rounded-[4px] border border-white/60 bg-white/50 font-semibold text-white">
                일시정지
              </span>
            </span>
            <span className="flex items-center gap-[3px] text-white">
              <span className="relative h-[10px] w-[18px]">
                <span className="absolute inset-0 rounded-full border border-white/60 bg-white/20" />
                <span
                  className="thumb-anim thumb-ds-glassmorphism-trackon absolute inset-0 rounded-full border border-white/60 bg-white/50"
                  style={{ opacity: 0 }}
                />
                <span className="thumb-anim thumb-ds-glassmorphism-knob absolute top-[2px] left-[2px] size-[6px] rounded-full bg-white" />
              </span>
              반복
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-ds-glassmorphism-cursor" />
    </ThumbStage>
  );
}
