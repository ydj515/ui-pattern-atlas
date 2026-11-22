import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const COLUMNS = [
  {
    title: "만들기",
    links: [
      ["문서", "함께 쓰는 문서"],
      ["화이트보드", "생각을 펼치는 판"],
    ],
  },
  {
    title: "관리",
    links: [
      ["프로젝트", "일의 흐름 보기"],
      ["일정", "팀 일정 맞추기"],
    ],
  },
] as const;

/** Same menu as MegaMenuDemo: open 제품 → the two-column panel → 일정 → 일정 페이지로 이동해요. */
export function MegaMenuThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[12px] h-[16px] w-[152px] rounded-t-md border border-slate-200 text-[6.5px] font-medium text-slate-700">
        <span className="absolute top-[3.5px] left-[8px]">제품 ▾</span>
        <span className="absolute top-[3.5px] left-[40px]">솔루션 ▾</span>
      </div>
      <div className="thumb-anim thumb-mega-panel absolute top-[24px] left-[12px] h-[54px] w-[152px] rounded-b-md border border-slate-200 bg-white shadow-md opacity-0">
        {COLUMNS.map((column, index) => (
          <div
            key={column.title}
            className="absolute top-[5px] w-[64px]"
            style={{ left: 8 + index * 76 }}
          >
            <p className="text-[5px] font-semibold text-slate-500">{column.title}</p>
            {column.links.map(([label, description]) => (
              <div key={label} className="relative mt-[2px] h-[16px]">
                {label === "일정" ? (
                  <span className="thumb-anim thumb-mega-hover absolute -inset-x-[2px] inset-y-0 rounded-[2px] bg-slate-100" />
                ) : null}
                <p className="relative text-[6px] font-medium">{label}</p>
                <p className="relative text-[4.5px] text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="thumb-anim thumb-mega-done absolute inset-x-0 top-[90px] text-center text-[6.5px] text-slate-600">
        일정 페이지로 이동해요
      </p>
      <ThumbCursor motion="thumb-mega-cursor" />
    </ThumbStage>
  );
}
