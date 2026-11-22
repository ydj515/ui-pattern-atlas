import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MENU = ["대시보드", "보고서", "설정"] as const;
const item =
  "absolute left-[4px] h-[14px] w-[52px] rounded-[3px] px-[5px] text-[6px] leading-[14px]";

/** Same menu as FeatureDotDemo: the dot on 보고서 goes away once it is opened. */
export function FeatureDotThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[14px] left-[20px] h-[70px] w-[136px] rounded-md border border-slate-200">
        {MENU.map((menu, index) => (
          <span key={menu} className={`${item} text-slate-700`} style={{ top: 4 + index * 16 }}>
            {menu}
          </span>
        ))}
        <span
          className={`thumb-anim thumb-fd-before ${item} top-[4px] bg-slate-900 text-white opacity-0`}
        >
          대시보드
        </span>
        <span className={`thumb-anim thumb-fd-after ${item} top-[20px] bg-slate-900 text-white`}>
          보고서
        </span>
        <span className="thumb-anim thumb-fd-before absolute top-[26px] left-[38px] size-[3px] rounded-full bg-rose-500 opacity-0" />
        <p className="thumb-anim thumb-fd-before absolute top-[8px] left-[66px] text-[7px] font-semibold opacity-0">
          대시보드
        </p>
        <p className="thumb-anim thumb-fd-after absolute top-[8px] left-[66px] text-[7px] font-semibold">
          보고서
        </p>
        <p className="thumb-anim thumb-fd-after absolute top-[22px] left-[66px] text-[5.5px] text-slate-500 underline">
          점 다시 보기
        </p>
      </div>
      <ThumbCursor motion="thumb-fd-cursor" />
    </ThumbStage>
  );
}
