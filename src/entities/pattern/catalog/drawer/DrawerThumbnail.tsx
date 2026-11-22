import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SORT_OPTIONS = ["추천순", "최신순", "가격 낮은순", "가격 높은순"] as const;
const OPTION_TOP = 32;
const OPTION_GAP = 14;

/** Same flow as DrawerDemo: 필터 열기 → pick 최신순 → 적용하기 → current sort updates. */
export function DrawerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[10px] grid h-[16px] w-[44px] place-items-center rounded-full border border-slate-300 font-semibold">
        필터 열기
      </div>
      <p className="thumb-anim thumb-drawer-sort-before absolute top-[32px] left-[10px] text-[7px] text-slate-500">
        현재 정렬: 추천순
      </p>
      <p className="thumb-anim thumb-drawer-sort-after absolute top-[32px] left-[10px] text-[7px] text-slate-500">
        현재 정렬: 최신순
      </p>

      <div className="thumb-anim thumb-drawer-overlay absolute inset-0 bg-slate-900/35" />
      <div className="thumb-anim thumb-drawer-panel absolute top-0 right-0 h-full w-[96px] bg-white shadow-lg">
        <p className="absolute top-[7px] left-[8px] text-[9px] font-semibold">필터</p>
        <p className="absolute top-[21px] left-[8px] text-[7px] font-semibold">정렬</p>
        {SORT_OPTIONS.map((option, index) => (
          <div
            key={option}
            className="absolute left-[8px] flex h-[12px] w-[80px] items-center gap-[4px] rounded border border-slate-200 px-[4px] text-[7px]"
            style={{ top: OPTION_TOP + index * OPTION_GAP }}
          >
            <span className="size-[6px] rounded-full border border-slate-400" />
            {option}
          </div>
        ))}
        <div className="thumb-anim thumb-drawer-select absolute top-[32px] left-[8px] h-[12px] w-[80px] rounded border-[1.5px] border-slate-900">
          <span className="absolute top-[2.5px] left-[4.5px] size-[4px] rounded-full bg-slate-900" />
        </div>
        <div className="absolute top-[94px] left-[8px] grid h-[12px] w-[26px] place-items-center rounded border border-slate-300 text-[7px]">
          초기화
        </div>
        <div className="absolute top-[94px] left-[38px] grid h-[12px] w-[50px] place-items-center rounded bg-slate-900 text-[7px] font-semibold text-white">
          적용하기
        </div>
      </div>
      <ThumbCursor motion="thumb-drawer-cursor" />
    </ThumbStage>
  );
}
