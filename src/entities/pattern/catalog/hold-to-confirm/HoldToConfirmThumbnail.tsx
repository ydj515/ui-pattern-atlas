import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same card as HoldToConfirmDemo: hold 꾹 눌러 삭제 until the fill completes → 삭제했어요. */
export function HoldToConfirmThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[16px] h-[90px] w-[144px] rounded-md border border-slate-200">
        <p className="absolute top-[8px] left-[8px] text-[7.5px] font-semibold">프로젝트 삭제</p>
        <p className="absolute top-[20px] left-[8px] text-[5.5px] text-slate-500">
          파일과 댓글이 모두 지워지고 되돌릴 수 없어요.
        </p>
        <div className="thumb-anim thumb-hold-form absolute inset-x-[8px] top-[36px] opacity-0">
          <span className="relative block h-[18px] overflow-hidden rounded-[4px] border border-rose-300">
            <span className="thumb-anim thumb-hold-fill absolute inset-0 origin-left bg-rose-100" />
            <span className="relative grid h-full place-items-center text-[7px] font-semibold text-rose-700">
              꾹 눌러 삭제
            </span>
          </span>
          <p className="mt-[4px] text-[5.5px] text-slate-500">1.5초 동안 누르고 있으면 삭제돼요</p>
        </div>
        <div className="thumb-anim thumb-hold-done absolute inset-x-0 top-[42px] text-center">
          <p className="text-[7px] font-medium text-rose-700">프로젝트를 삭제했어요</p>
          <p className="mt-[4px] text-[5.5px] text-slate-500 underline">다시 보기</p>
        </div>
      </div>
      <ThumbCursor motion="thumb-hold-cursor" />
    </ThumbStage>
  );
}
