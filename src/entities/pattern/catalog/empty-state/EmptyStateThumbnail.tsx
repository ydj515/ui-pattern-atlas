import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

/** Same flow as EmptyStateDemo: 프로젝트 만들기 → the list gets 새 프로젝트 → back to empty. */
export function EmptyStateThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-empty-message absolute inset-0 text-center">
        <div className="absolute top-[10px] left-[76px] grid size-[24px] place-items-center rounded-full bg-slate-100">
          <div className="h-[8px] w-[11px] rounded-[2px] border-[1.5px] border-slate-400" />
        </div>
        <p className="absolute inset-x-0 top-[38px] text-[9px] font-semibold">
          아직 프로젝트가 없어요
        </p>
        <p className="absolute inset-x-0 top-[52px] text-[7px] text-slate-500">
          첫 프로젝트를 만들고 팀원을 초대해 보세요.
        </p>
        <div className="absolute top-[70px] left-[58px] grid h-[16px] w-[60px] place-items-center rounded bg-slate-900 text-[7px] font-semibold text-white">
          프로젝트 만들기
        </div>
      </div>

      <div className="thumb-anim thumb-empty-row absolute top-[14px] left-[12px] flex h-[20px] w-[152px] items-center rounded-md border border-slate-200 px-[8px] font-medium">
        새 프로젝트
      </div>
      <p className="thumb-anim thumb-empty-row absolute inset-x-0 top-[44px] text-center text-[7px] text-slate-500 underline">
        빈 상태로 되돌리기
      </p>
      <ThumbCursor motion="thumb-empty-cursor" />
    </ThumbStage>
  );
}
