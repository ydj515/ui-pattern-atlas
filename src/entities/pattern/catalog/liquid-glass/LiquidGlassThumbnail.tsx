import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same playlist card as LiquidGlassDemo: 재생 → 일시정지, then 반복 is switched off. */
export function LiquidGlassThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 overflow-hidden bg-[conic-gradient(at_30%_40%,#f97316,#ec4899,#8b5cf6,#06b6d4,#84cc16,#f97316)]">
        <span className="absolute inset-x-0 top-[36px] h-[16px] bg-white/60 blur-[6px]" />
        <div className="absolute top-[14px] left-[26px] h-[84px] w-[124px] p-[8px] rounded-[12px] border border-white/60 bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,0,0.25)] backdrop-blur-[2px] backdrop-saturate-[1.8]">
          <div className="flex items-center gap-[6px]">
            <span className="grid size-[24px] shrink-0 place-items-center rounded-[8px] border border-white/70 bg-white/25 text-white">
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
              <span className="block text-[5.5px] text-white/90">잔잔한 아침 음악 · 12곡</span>
            </span>
          </div>
          <div className="mt-[14px] flex items-center justify-between text-[6.5px]">
            <span className="relative grid h-[14px] w-[42px]">
              <span
                className="thumb-anim thumb-ds-liquid-glass-idle absolute inset-0 grid place-items-center rounded-full border border-white/70 bg-white/25 font-semibold text-white"
                style={{ opacity: 0 }}
              >
                재생
              </span>
              <span className="thumb-anim thumb-ds-liquid-glass-on absolute inset-0 grid place-items-center rounded-full border border-white/70 bg-white/50 font-semibold text-white">
                일시정지
              </span>
            </span>
            <span className="flex items-center gap-[3px] text-white">
              <span className="relative h-[10px] w-[18px]">
                <span className="absolute inset-0 rounded-full border border-white/70 bg-white/20" />
                <span
                  className="thumb-anim thumb-ds-liquid-glass-trackon absolute inset-0 rounded-full border border-white/70 bg-white/55"
                  style={{ opacity: 0 }}
                />
                <span className="thumb-anim thumb-ds-liquid-glass-knob absolute top-[2px] left-[2px] size-[6px] rounded-full bg-white" />
              </span>
              반복
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-ds-liquid-glass-cursor" />
    </ThumbStage>
  );
}
