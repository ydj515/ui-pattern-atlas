import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same playlist card as MinimalismDemo: 재생 → 일시정지, then 반복 is switched off. */
export function MinimalismThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 overflow-hidden bg-white">
        <div className="absolute top-[14px] left-[26px] h-[84px] w-[124px] p-[8px] ">
          <div className="flex items-center gap-[6px]">
            <span className="grid size-[24px] shrink-0 place-items-center rounded-full border border-slate-300 text-slate-400">
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
              <b className="block text-[7.5px] leading-[10px] font-light text-slate-900">
                오늘의 플레이리스트
              </b>
              <span className="block text-[5.5px] tracking-[0.15em] text-slate-400">
                잔잔한 아침 음악 · 12곡
              </span>
            </span>
          </div>
          <div className="mt-[14px] flex items-center justify-between text-[6.5px]">
            <span className="relative grid h-[14px] w-[42px]">
              <span
                className="thumb-anim thumb-ds-minimalism-idle absolute inset-0 grid place-items-center border-b border-slate-900 text-slate-900"
                style={{ opacity: 0 }}
              >
                재생
              </span>
              <span className="thumb-anim thumb-ds-minimalism-on absolute inset-0 grid place-items-center border-b border-slate-400 text-slate-500">
                일시정지
              </span>
            </span>
            <span className="flex items-center gap-[3px] text-slate-500">
              <span className="relative h-[10px] w-[18px]">
                <span className="absolute inset-0 rounded-full border border-slate-300 bg-white" />
                <span
                  className="thumb-anim thumb-ds-minimalism-trackon absolute inset-0 rounded-full border border-slate-900 bg-white"
                  style={{ opacity: 0 }}
                />
                <span className="thumb-anim thumb-ds-minimalism-knob absolute top-[2px] left-[2px] size-[6px] rounded-full bg-slate-900" />
              </span>
              반복
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-ds-minimalism-cursor" />
    </ThumbStage>
  );
}
