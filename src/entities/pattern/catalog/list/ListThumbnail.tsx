import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const FILES = [
  ["회의록.pdf", "2.1MB · 김하늘", "어제"],
  ["출시 계획.docx", "540KB · 이도윤", "월요일"],
  ["예산표.xlsx", "88KB · 박서준", "11월 20일"],
] as const;

/** Same files as ListDemo: tap the first row → 회의록.pdf을(를) 열었어요. */
export function ListThumbnail() {
  return (
    <ThumbStage>
      <ul className="absolute top-[8px] left-[24px] w-[128px] rounded-md border border-slate-200">
        {FILES.map(([title, meta, when], index) => (
          <li key={title} className="relative h-[22px] border-b border-slate-100 last:border-b-0">
            {index === 0 ? (
              <span className="thumb-anim thumb-li-hover absolute inset-0 bg-slate-50 opacity-0" />
            ) : null}
            <span className="absolute top-[5px] left-[6px] size-[12px] rounded-[3px] bg-slate-100" />
            <span className="absolute top-[3px] left-[23px] text-[6.5px] font-medium">{title}</span>
            <span className="absolute top-[12px] left-[23px] text-[5px] text-slate-500">
              {meta}
            </span>
            <span className="absolute top-[7px] right-[12px] text-[5px] text-slate-500">
              {when}
            </span>
            <span className="absolute top-[6px] right-[5px] text-[6px] text-slate-300">›</span>
          </li>
        ))}
      </ul>
      <p className="thumb-anim thumb-li-done absolute inset-x-0 top-[82px] text-center text-[6.5px] text-slate-600">
        회의록.pdf을(를) 열었어요
      </p>
      <ThumbCursor motion="thumb-li-cursor" />
    </ThumbStage>
  );
}
