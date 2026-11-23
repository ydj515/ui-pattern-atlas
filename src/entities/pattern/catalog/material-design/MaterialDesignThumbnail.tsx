import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same playlist card as MaterialDesignDemo: 재생 → 일시정지, then 반복 is switched off. */
export function MaterialDesignThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 overflow-hidden bg-slate-100">
        <div className="absolute top-[14px] left-[26px] h-[84px] w-[124px] p-[8px] rounded-[3px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.14),0_3px_8px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-[6px]">
            <span className="grid size-[24px] shrink-0 place-items-center rounded-full bg-indigo-500 text-white shadow-[0_2px_4px_rgba(79,70,229,0.4)]">
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
              <b className="block text-[7.5px] leading-[10px] text-slate-900">
                오늘의 플레이리스트
              </b>
              <span className="block text-[5.5px] text-slate-500">잔잔한 아침 음악 · 12곡</span>
            </span>
          </div>
          <div className="mt-[14px] flex items-center justify-between text-[6.5px]">
            <span className="relative grid h-[14px] w-[42px]">
              <span
                className="thumb-anim thumb-ds-material-design-idle absolute inset-0 grid place-items-center rounded-[2px] bg-indigo-600 font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                style={{ opacity: 0 }}
              >
                재생
              </span>
              <span className="thumb-anim thumb-ds-material-design-on absolute inset-0 grid place-items-center rounded-[2px] bg-indigo-800 font-semibold text-white shadow-[0_3px_6px_rgba(0,0,0,0.35)]">
                일시정지
              </span>
            </span>
            <span className="flex items-center gap-[3px] text-slate-700">
              <span className="relative h-[10px] w-[18px]">
                <span className="absolute inset-0 rounded-full bg-slate-300" />
                <span
                  className="thumb-anim thumb-ds-material-design-trackon absolute inset-0 rounded-full bg-indigo-300"
                  style={{ opacity: 0 }}
                />
                <span className="thumb-anim thumb-ds-material-design-knob absolute top-[2px] left-[2px] size-[6px] rounded-full bg-indigo-600 shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
              </span>
              반복
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-ds-material-design-cursor" />
    </ThumbStage>
  );
}
