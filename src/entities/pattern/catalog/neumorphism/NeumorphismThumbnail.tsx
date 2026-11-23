import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same playlist card as NeumorphismDemo: 재생 → 일시정지, then 반복 is switched off. */
export function NeumorphismThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 overflow-hidden bg-slate-200">
        <div className="absolute top-[14px] left-[26px] h-[84px] w-[124px] p-[8px] rounded-[10px] bg-slate-200 shadow-[4px_4px_8px_#b6bcc6,-4px_-4px_8px_#ffffff]">
          <div className="flex items-center gap-[6px]">
            <span className="grid size-[24px] shrink-0 place-items-center rounded-[6px] bg-slate-200 text-slate-500 shadow-[inset_2px_2px_4px_#b6bcc6,inset_-2px_-2px_4px_#ffffff]">
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
              <b className="block text-[7.5px] leading-[10px] text-slate-700">
                오늘의 플레이리스트
              </b>
              <span className="block text-[5.5px] text-slate-500">잔잔한 아침 음악 · 12곡</span>
            </span>
          </div>
          <div className="mt-[14px] flex items-center justify-between text-[6.5px]">
            <span className="relative grid h-[14px] w-[42px]">
              <span
                className="thumb-anim thumb-ds-neumorphism-idle absolute inset-0 grid place-items-center rounded-[6px] bg-slate-200 font-semibold text-slate-600 shadow-[2px_2px_4px_#b6bcc6,-2px_-2px_4px_#ffffff]"
                style={{ opacity: 0 }}
              >
                재생
              </span>
              <span className="thumb-anim thumb-ds-neumorphism-on absolute inset-0 grid place-items-center rounded-[6px] bg-slate-200 font-semibold text-slate-600 shadow-[inset_2px_2px_4px_#b6bcc6,inset_-2px_-2px_4px_#ffffff]">
                일시정지
              </span>
            </span>
            <span className="flex items-center gap-[3px] text-slate-700">
              <span className="relative h-[10px] w-[18px]">
                <span className="absolute inset-0 rounded-full bg-slate-200 shadow-[inset_1px_1px_2px_#b6bcc6,inset_-1px_-1px_2px_#ffffff]" />
                <span
                  className="thumb-anim thumb-ds-neumorphism-trackon absolute inset-0 rounded-full bg-slate-200 shadow-[inset_1px_1px_2px_#b6bcc6,inset_-1px_-1px_2px_#ffffff]"
                  style={{ opacity: 0 }}
                />
                <span className="thumb-anim thumb-ds-neumorphism-knob absolute top-[2px] left-[2px] size-[6px] rounded-full bg-sky-400" />
              </span>
              반복
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-ds-neumorphism-cursor" />
    </ThumbStage>
  );
}
