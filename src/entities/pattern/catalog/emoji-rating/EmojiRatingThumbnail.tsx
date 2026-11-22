import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MOUTHS = [
  "M8 17c1.5-2 6.5-2 8 0",
  "M8 16.5c1.5-1 6.5-1 8 0",
  "M8 16h8",
  "M8 15.5c1.5 1 6.5 1 8 0",
  "M7.5 14.5c1.5 3 7.5 3 9 0",
];

function Face({ mouth, tone }: { readonly mouth: string; readonly tone: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`size-[16px] ${tone}`}>
      <circle cx="12" cy="12" r="10" className="fill-current opacity-20" />
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="1.2" fill="currentColor" />
      <circle cx="15" cy="10" r="1.2" fill="currentColor" />
      <path d={mouth} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Same question as EmojiRatingDemo: tap the 4th face → 만족. */
export function EmojiRatingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[14px] left-[28px] h-[84px] w-[120px] rounded-[12px] border border-slate-200 p-[8px]">
        <p className="text-[7px] font-semibold">배송은 어떠셨나요?</p>
        <p className="mt-[6px] flex gap-[6px]">
          {MOUTHS.map((mouth, index) => (
            <span key={mouth} className="relative">
              <Face mouth={mouth} tone="text-slate-400" />
              {index === 3 ? (
                <span className="thumb-anim thumb-emr-on absolute inset-0">
                  <Face mouth={mouth} tone="text-amber-500" />
                </span>
              ) : null}
            </span>
          ))}
        </p>
        <p className="thumb-anim thumb-emr-on mt-[6px] text-center text-[7px] font-semibold">
          만족
        </p>
      </div>
      <ThumbCursor motion="thumb-emr-cursor" />
    </ThumbStage>
  );
}
