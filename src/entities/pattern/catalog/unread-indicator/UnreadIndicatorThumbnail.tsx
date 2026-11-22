import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MAILS = [
  ["김하늘", "시안 확인 부탁드려요"],
  ["이도윤", "회의록 공유해요"],
  ["박서준", "점심 메뉴 투표"],
] as const;

/** Same inbox as UnreadIndicatorDemo: open the first mail → its dot and bold text go away. */
export function UnreadIndicatorThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[12px] left-[24px] w-[128px] rounded-md border border-slate-200">
        {MAILS.map(([from, subject], index) => (
          <div
            key={subject}
            className="relative h-[22px] border-b border-slate-100 last:border-b-0"
          >
            {index < 2 ? (
              <span
                className={`absolute top-[6px] left-[6px] size-[4px] rounded-full bg-blue-600 ${index === 0 ? "thumb-anim thumb-un-new opacity-0" : ""}`}
              />
            ) : null}
            <p
              className={`absolute top-[2px] left-[14px] text-[6.5px] ${index === 1 ? "font-semibold" : "text-slate-600"}`}
            >
              {subject}
            </p>
            {index === 0 ? (
              <p className="thumb-anim thumb-un-new absolute top-[2px] left-[14px] bg-white text-[6.5px] font-semibold opacity-0">
                {subject}
              </p>
            ) : null}
            <p className="absolute top-[11px] left-[14px] text-[5px] text-slate-500">{from}</p>
          </div>
        ))}
      </div>
      <p className="absolute top-[82px] left-[24px] text-[5.5px] text-slate-500 underline">
        처음 상태로
      </p>
      <ThumbCursor motion="thumb-un-cursor" />
    </ThumbStage>
  );
}
