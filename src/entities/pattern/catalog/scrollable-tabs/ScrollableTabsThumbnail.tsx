import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TABS = [
  ["전체", 20],
  ["상의", 20],
  ["하의", 20],
  ["아우터", 26],
  ["원피스", 26],
  ["신발", 20],
  ["가방", 20],
  ["모자", 20],
  ["액세서리", 32],
  ["홈웨어", 26],
] as const;

const LEFTS = TABS.map((_, index) =>
  TABS.slice(0, index).reduce((sum, [, width]) => sum + width, 0),
);

/** Same tabs as ScrollableTabsDemo: › shows more tabs → choose 가방. */
export function ScrollableTabsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[14px] left-[8px] h-[18px] w-[160px] border-b border-slate-200">
        <span className="thumb-anim thumb-st-prev absolute top-[3px] left-[2px] text-[8px] text-slate-500">
          ‹
        </span>
        <span className="absolute top-[3px] right-[2px] text-[8px] text-slate-500">›</span>
        <div className="absolute top-0 left-[10px] h-[18px] w-[140px] overflow-hidden">
          <div
            className="thumb-anim thumb-st-strip absolute inset-y-0 left-0"
            style={{ transform: "translateX(-80px)" }}
          >
            {TABS.map(([tab, width], index) => (
              <span
                key={tab}
                className="absolute top-[5px] text-center text-[6.5px] text-slate-500"
                style={{ left: LEFTS[index], width }}
              >
                {tab}
              </span>
            ))}
            <span className="thumb-anim thumb-st-all absolute bottom-0 left-[3px] h-[1.5px] w-[14px] bg-slate-900 opacity-0" />
            <span className="thumb-anim thumb-st-bag absolute bottom-0 left-[135px] h-[1.5px] w-[14px] bg-slate-900" />
          </div>
        </div>
      </div>
      <p className="thumb-anim thumb-st-all absolute top-[44px] left-[20px] text-[6.5px] text-slate-600 opacity-0">
        전체 상품을 보여 드려요
      </p>
      <p className="thumb-anim thumb-st-bag absolute top-[44px] left-[20px] text-[6.5px] text-slate-600">
        가방 상품을 보여 드려요
      </p>
      <ThumbCursor motion="thumb-st-cursor" />
    </ThumbStage>
  );
}
