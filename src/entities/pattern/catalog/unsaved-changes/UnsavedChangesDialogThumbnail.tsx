import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same profile edit as UnsavedChangesDialogDemo: leaving with an edit asks first, naming each result. */
export function UnsavedChangesDialogThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <p className="flex items-center gap-[4px]">
          <span className="rounded-[3px] border border-slate-300 px-[3px] text-[5.5px]">
            ‹ 뒤로
          </span>
          <b className="text-[7px]">프로필 편집</b>
        </p>
        <p className="mt-[5px] text-slate-700">소개</p>
        <span className="mt-[1px] grid h-[13px] rounded-[3px] border border-slate-300 px-[3px] leading-[12px]">
          <span className="thumb-anim thumb-ra-uc-v-from col-start-1 row-start-1">
            망원동에 사는 사진 찍는 사람
          </span>
          <span className="thumb-anim thumb-ra-uc-v-to col-start-1 row-start-1" style={HIDDEN}>
            망원동에 사는 사람
          </span>
        </span>
        <p
          className="thumb-anim thumb-ra-uc-done mt-[4px] text-[5.5px] text-slate-600"
          style={HIDDEN}
        >
          소개를 저장하고 목록으로 나갔어요
        </p>
        <div
          className="thumb-anim thumb-ra-uc-dialog absolute inset-x-[10px] top-[18px] grid gap-[2px] rounded-[6px] border border-slate-200 bg-white p-[5px] shadow-md"
          style={HIDDEN}
        >
          <b>저장하지 않은 내용이 있어요</b>
          <span className="text-slate-600">나가면 바꾼 소개가 사라져요</span>
          <span className="mt-[1px] rounded-[3px] bg-slate-900 py-[1px] text-center text-white">
            저장하고 나가기
          </span>
          <span className="rounded-[3px] border border-slate-300 py-[1px] text-center text-rose-600">
            저장하지 않고 나가기
          </span>
          <span className="py-[1px] text-center text-slate-700">계속 편집</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ra-uc-cursor" />
    </ThumbStage>
  );
}
