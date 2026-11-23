import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MARK = {
  up: ["▲", "text-rose-600"],
  down: ["▼", "text-blue-600"],
  same: ["–", "text-slate-400"],
  new: ["N", "font-bold text-emerald-700"],
} as const;
type Change = keyof typeof MARK;
const LISTS: readonly (readonly [string, readonly (readonly [string, Change])[]])[] = [
  [
    "오늘 14:00 기준, 최근 1시간",
    [
      ["겨울 패딩", "up"],
      ["전기요", "new"],
      ["니트", "same"],
      ["부츠", "down"],
    ],
  ],
  [
    "11월 17일~23일 기준",
    [
      ["니트", "same"],
      ["겨울 패딩", "up"],
      ["가습기", "new"],
      ["전기요", "down"],
    ],
  ],
];

/** Same lists as TrendingSearchesDemo: switch 지금 → 이번 주 and the ranks and the counting period change together. */
export function TrendingSearchesThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span
            className="thumb-anim thumb-str-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm"
            style={{ transform: "translateX(66px)" }}
          />
          <span className="relative h-[11px] flex-1 leading-[11px]">지금</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">이번 주</span>
        </p>
        {LISTS.map(([basis, items], index) => (
          <div
            key={basis}
            className={`thumb-anim thumb-str-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[26px]`}
            style={index === 0 ? { opacity: 0 } : undefined}
          >
            <p className="flex items-baseline justify-between">
              <b>인기 검색어</b>
              <span className="text-[5px] text-slate-500">{basis}</span>
            </p>
            {items.map(([term, change], rank) => (
              <p key={term} className="mt-[3px] flex h-[10px] items-center gap-[5px]">
                <b className="w-[5px] text-right tabular-nums">{rank + 1}</b>
                <span className="flex-1">{term}</span>
                <span className={`text-[5px] ${MARK[change][1]}`}>{MARK[change][0]}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-str-cursor" />
    </ThumbStage>
  );
}
