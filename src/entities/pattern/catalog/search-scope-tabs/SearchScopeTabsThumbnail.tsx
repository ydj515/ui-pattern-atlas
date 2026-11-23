import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TABS = [
  ["전체", "5", 30],
  ["상품", "3", 30],
  ["브랜드", "1", 36],
  ["기획전", "1", 36],
] as const;
const PANELS = [
  ["린넨 셔츠", "린넨 바지", "린넨 원피스", "린넨 공방", "여름 린넨 모음"],
  ["린넨 공방"],
  ["여름 린넨 모음"],
];
const UNDERLINE = [0, 60, 96];

/** Same search as SearchScopeTabsDemo: 린넨 stays, 브랜드 then 기획전 narrow what it looks in. */
export function SearchScopeTabsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="h-[16px] rounded-[4px] border border-slate-300 px-[4px] leading-[14px]">
          린넨
        </p>
        <p className="relative mt-[5px] flex border-b border-slate-200 pb-[3px] text-slate-500">
          {TABS.map(([label, count, width]) => (
            <span key={label} style={{ width }}>
              {label} {count}
            </span>
          ))}
          {UNDERLINE.map((x, index) => (
            <span
              key={x}
              className={`thumb-anim thumb-sscope-s${index} absolute -bottom-px h-[1.5px] w-[22px] bg-slate-900`}
              style={{ left: x, ...(index === 2 ? {} : { opacity: 0 }) }}
            />
          ))}
        </p>
        {PANELS.map((items, index) => (
          <div
            key={items[0]}
            className={`thumb-anim thumb-sscope-s${index} absolute inset-x-[8px] top-[44px]`}
            style={index === 2 ? undefined : { opacity: 0 }}
          >
            {items.map((item) => (
              <p key={item} className="mt-[3px] leading-[8px]">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-sscope-cursor" />
    </ThumbStage>
  );
}
