import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ROWS = [
  ["린넨 셔츠", "29,000원 · 리뷰 120"],
  ["린넨 바지", "35,000원 · 리뷰 48"],
  ["린넨 원피스", "49,000원 · 리뷰 210"],
  ["린넨 셔츠 반팔", "25,000원 · 리뷰 86"],
];
const OPTIONS = ["추천순", "낮은 가격순", "높은 가격순", "리뷰 많은순"];

/** Same results as SearchSortDemo: 추천순 → the menu → 낮은 가격순, and the list reorders by price. */
export function SearchSortThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="flex items-center justify-between">
          <b>린넨 검색 결과 4개</b>
          <span className="grid rounded-[4px] border border-slate-200 px-[4px] py-[1px]">
            <span className="thumb-anim thumb-sst-a col-start-1 row-start-1">추천순 ▾</span>
            <span className="thumb-anim thumb-sst-b col-start-1 row-start-1" style={{ opacity: 0 }}>
              낮은 가격순 ▾
            </span>
          </span>
        </p>
        <div className="relative mt-[6px]">
          {ROWS.map(([name, meta], index) => (
            <p
              key={name}
              className={`thumb-anim thumb-sst-r${index} absolute inset-x-0 flex h-[14px] justify-between`}
              style={{ top: index * 14 }}
            >
              {name}
              <span className="text-[5.5px] text-slate-500">{meta}</span>
            </p>
          ))}
        </div>
        <ul
          className="thumb-anim thumb-sst-menu absolute top-[22px] right-[8px] w-[62px] rounded-[4px] border border-slate-200 bg-white py-[2px] shadow-md"
          style={{ opacity: 0 }}
        >
          {OPTIONS.map((option, index) => (
            <li
              key={option}
              className={`flex h-[11px] items-center justify-between px-[4px] ${index === 0 ? "font-semibold" : ""}`}
            >
              {option}
              {index === 0 ? <span>✓</span> : null}
            </li>
          ))}
        </ul>
      </div>
      <ThumbCursor motion="thumb-sst-cursor" />
    </ThumbStage>
  );
}
