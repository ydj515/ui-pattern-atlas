import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const row =
  "absolute left-[3px] h-[12px] w-[58px] rounded-[3px] px-[5px] text-[6px] leading-[12px] text-slate-600";

/** Same menu as SidebarNavigationDemo: open 프로젝트 → choose 보관함 → it becomes current. */
export function SidebarNavigationThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[12px] h-[100px] w-[152px] overflow-hidden rounded-md border border-slate-200 bg-slate-50">
        <div className="absolute inset-y-0 left-0 w-[64px] border-r border-slate-200 bg-white">
          <p className={`${row} top-[4px]`}>대시보드</p>
          <p
            className={`thumb-anim thumb-sb-dash ${row} top-[4px] bg-slate-900 font-medium text-white opacity-0`}
          >
            대시보드
          </p>
          <p className={`${row} top-[17px] flex justify-between`}>
            프로젝트<span>›</span>
          </p>
          <div className="thumb-anim thumb-sb-open">
            <span className="absolute top-[30px] left-[10px] h-[25px] w-px bg-slate-200" />
            <p className={`${row} top-[30px] left-[12px] w-[49px]`}>진행 중</p>
            <p className={`${row} top-[43px] left-[12px] w-[49px]`}>보관함</p>
            <p
              className={`thumb-anim thumb-sb-archive ${row} top-[43px] left-[12px] w-[49px] bg-slate-900 font-medium text-white`}
            >
              보관함
            </p>
          </div>
          <div className="thumb-anim thumb-sb-push" style={{ transform: "translateY(26px)" }}>
            <p className={`${row} top-[30px]`}>팀</p>
            <p className={`${row} top-[43px]`}>설정</p>
          </div>
        </div>
        <p className="thumb-anim thumb-sb-dash absolute top-[10px] left-[74px] text-[7px] font-semibold opacity-0">
          대시보드
        </p>
        <p className="thumb-anim thumb-sb-archive absolute top-[10px] left-[74px] text-[7px] font-semibold">
          보관함
        </p>
      </div>
      <ThumbCursor motion="thumb-sb-cursor" />
    </ThumbStage>
  );
}
