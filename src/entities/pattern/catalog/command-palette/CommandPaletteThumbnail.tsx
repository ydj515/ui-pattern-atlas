import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as CommandPaletteDemo: 명령 열기 → type 초대 → only 팀원 초대 remains → Enter. */
export function CommandPaletteThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[22px] left-[60px] grid h-[16px] w-[56px] place-items-center rounded-full bg-slate-900 text-[7px] font-semibold text-white">
        명령 열기
      </span>
      <p className="absolute inset-x-0 top-[44px] text-center text-[6.5px] text-slate-500">
        앱에서는 ⌘K로 열어요
      </p>
      <p className="thumb-anim thumb-cmd-status absolute inset-x-0 top-[60px] text-center text-[7px] text-slate-700">
        팀원 초대 창을 열었어요
      </p>

      <div className="thumb-anim thumb-cmd-overlay absolute inset-0 bg-slate-950/40" />
      <div className="thumb-anim thumb-cmd-palette absolute top-[10px] left-[20px] h-[88px] w-[136px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
        <div className="absolute inset-x-0 top-0 h-[18px] border-b border-slate-200">
          <span className="thumb-anim thumb-cmd-placeholder absolute top-[5px] left-[8px] text-[7px] text-slate-400">
            무엇을 할까요?
          </span>
          <span className="absolute top-[5px] left-[8px] text-[7px]">초대</span>
          <span className="thumb-anim thumb-cmd-cover absolute top-[3px] left-[7px] h-[12px] w-[30px] border-l border-slate-900 bg-white" />
          <span className="thumb-anim thumb-cmd-enter absolute top-[4px] right-[6px] rounded-[2px] border border-slate-300 px-[3px] text-[6px] leading-[9px]">
            Enter
          </span>
        </div>
        <span className="thumb-anim thumb-cmd-active absolute top-[30px] left-[4px] h-[11px] w-[128px] rounded bg-slate-100" />
        <div className="thumb-anim thumb-cmd-others">
          <span className="absolute top-[21px] left-[9px] text-[6px] text-slate-400">문서</span>
          <span className="absolute top-[31px] left-[9px] text-[7px] leading-[9px]">
            새 문서 만들기
          </span>
          <span className="absolute top-[65px] left-[9px] text-[6px] text-slate-400">설정</span>
          <span className="absolute top-[75px] left-[9px] text-[7px] leading-[9px]">설정 열기</span>
        </div>
        <span className="absolute top-[43px] left-[9px] text-[6px] text-slate-400">팀</span>
        <span className="absolute top-[53px] left-[9px] text-[7px] leading-[9px]">팀원 초대</span>
      </div>
      <ThumbCursor motion="thumb-cmd-cursor" />
    </ThumbStage>
  );
}
