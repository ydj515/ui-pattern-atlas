import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same playlist card as ClaymorphismDemo: 재생 → 일시정지, then 반복 is switched off. */
export function ClaymorphismThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 overflow-hidden bg-violet-100">
        <div className="absolute top-[14px] left-[26px] h-[84px] w-[124px] p-[8px] rounded-[14px] bg-violet-300 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.12),inset_4px_4px_8px_rgba(255,255,255,0.55),5px_7px_10px_rgba(91,33,182,0.25)]">
          <div className="flex items-center gap-[6px]">
            <span className="grid size-[24px] shrink-0 place-items-center rounded-[8px] bg-amber-300 text-amber-800 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.12),inset_2px_2px_4px_rgba(255,255,255,0.6)]">
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
              <b className="block text-[7.5px] leading-[10px] text-violet-950">
                오늘의 플레이리스트
              </b>
              <span className="block text-[5.5px] text-violet-800">잔잔한 아침 음악 · 12곡</span>
            </span>
          </div>
          <div className="mt-[14px] flex items-center justify-between text-[6.5px]">
            <span className="relative grid h-[14px] w-[42px]">
              <span
                className="thumb-anim thumb-ds-claymorphism-idle absolute inset-0 grid place-items-center rounded-full bg-pink-400 font-bold text-white shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.15),inset_1px_1px_3px_rgba(255,255,255,0.5)]"
                style={{ opacity: 0 }}
              >
                재생
              </span>
              <span className="thumb-anim thumb-ds-claymorphism-on absolute inset-0 grid place-items-center rounded-full bg-pink-500 font-bold text-white shadow-[inset_1px_1px_3px_rgba(0,0,0,0.25)]">
                일시정지
              </span>
            </span>
            <span className="flex items-center gap-[3px] text-violet-900">
              <span className="relative h-[10px] w-[18px]">
                <span className="absolute inset-0 rounded-full bg-violet-200" />
                <span
                  className="thumb-anim thumb-ds-claymorphism-trackon absolute inset-0 rounded-full bg-pink-300"
                  style={{ opacity: 0 }}
                />
                <span className="thumb-anim thumb-ds-claymorphism-knob absolute top-[2px] left-[2px] size-[6px] rounded-full bg-white" />
              </span>
              반복
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-ds-claymorphism-cursor" />
    </ThumbStage>
  );
}
