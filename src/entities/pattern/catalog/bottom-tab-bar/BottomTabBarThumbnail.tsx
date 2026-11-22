import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TABS = ["홈", "검색", "알림", "내 정보"] as const;

/** Same tabs as BottomTabBarDemo: 홈 → tap 알림 (3) → the screen and the highlight move. */
export function BottomTabBarThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[58px] h-[108px] w-[60px] overflow-hidden rounded-[10px] border-2 border-slate-900 bg-slate-50">
        <p className="thumb-anim thumb-bt-home absolute top-[8px] left-[6px] text-[8px] font-semibold opacity-0">
          홈
        </p>
        <p className="thumb-anim thumb-bt-alerts absolute top-[8px] left-[6px] text-[8px] font-semibold">
          알림
        </p>
        <div className="absolute inset-x-0 bottom-0 h-[18px] border-t border-slate-200 bg-white">
          {TABS.map((tab, index) => (
            <span
              key={tab}
              className="absolute top-[2px] flex w-[14px] flex-col items-center text-[4px] text-slate-500"
              style={{ left: index * 14 }}
            >
              <span className="size-[6px] rounded-full border border-current" />
              {tab}
              {tab === "알림" ? (
                <span className="absolute -top-[1px] right-[1px] grid size-[5px] place-items-center rounded-full bg-rose-600 text-[3.5px] text-white">
                  3
                </span>
              ) : null}
            </span>
          ))}
          <span className="thumb-anim thumb-bt-home absolute top-[2px] left-0 flex w-[14px] flex-col items-center bg-white text-[4px] font-semibold text-blue-600 opacity-0">
            <span className="size-[6px] rounded-full border border-current bg-blue-100" />홈
          </span>
          <span className="thumb-anim thumb-bt-alerts absolute top-[2px] left-[28px] flex w-[14px] flex-col items-center bg-white text-[4px] font-semibold text-blue-600">
            <span className="size-[6px] rounded-full border border-current bg-blue-100" />
            알림
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-bt-cursor" />
    </ThumbStage>
  );
}
