import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same playlist card as SkeuomorphismDemo: 재생 → 일시정지, then 반복 is switched off. */
export function SkeuomorphismThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-stone-400 to-stone-600">
        <div className="absolute top-[14px] left-[26px] h-[84px] w-[124px] p-[8px] rounded-[6px] border border-stone-500 bg-gradient-to-b from-stone-50 to-stone-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_8px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-[6px]">
            <span className="grid size-[24px] shrink-0 place-items-center rounded-full bg-[repeating-radial-gradient(circle,#1c1917_0_1px,#292524_1px_2px)] text-rose-500">
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
              <b className="block text-[7.5px] leading-[10px] text-stone-800">
                오늘의 플레이리스트
              </b>
              <span className="block text-[5.5px] text-stone-600">잔잔한 아침 음악 · 12곡</span>
            </span>
          </div>
          <div className="mt-[14px] flex items-center justify-between text-[6.5px]">
            <span className="relative grid h-[14px] w-[42px]">
              <span
                className="thumb-anim thumb-ds-skeuomorphism-idle absolute inset-0 grid place-items-center rounded-full border border-emerald-900 bg-gradient-to-b from-emerald-400 to-emerald-700 font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                style={{ opacity: 0 }}
              >
                재생
              </span>
              <span className="thumb-anim thumb-ds-skeuomorphism-on absolute inset-0 grid place-items-center rounded-full border border-emerald-900 bg-gradient-to-b from-emerald-700 to-emerald-500 font-bold text-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                일시정지
              </span>
            </span>
            <span className="flex items-center gap-[3px] text-stone-700">
              <span className="relative h-[10px] w-[18px]">
                <span className="absolute inset-0 rounded-full border border-stone-500 bg-gradient-to-b from-stone-400 to-stone-200" />
                <span
                  className="thumb-anim thumb-ds-skeuomorphism-trackon absolute inset-0 rounded-full border border-stone-500 bg-gradient-to-b from-emerald-600 to-emerald-400"
                  style={{ opacity: 0 }}
                />
                <span className="thumb-anim thumb-ds-skeuomorphism-knob absolute top-[2px] left-[2px] size-[6px] rounded-full bg-gradient-to-b from-white to-stone-300 shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
              </span>
              반복
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-ds-skeuomorphism-cursor" />
    </ThumbStage>
  );
}
