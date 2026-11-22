import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same memo app as CoachMarkDemo: the tip points at + → 확인 → 다시 보기 brings it back. */
export function CoachMarkThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[40px] h-[108px] w-[96px] overflow-hidden rounded-[12px] border border-slate-200 text-[7px]">
        <p className="flex h-[20px] items-center justify-between border-b border-slate-100 px-[8px]">
          <b className="text-[8px]">메모</b>
          <span className="grid size-[12px] place-items-center rounded-full bg-slate-900 text-[9px] text-white">
            +
          </span>
        </p>
        {["장보기 목록", "회의 준비", "여행 짐 싸기"].map((memo) => (
          <p key={memo} className="border-b border-slate-100 px-[8px] py-[5px] text-slate-700">
            {memo}
          </p>
        ))}
        <span
          className="thumb-anim thumb-cm-again absolute bottom-[6px] left-[6px] rounded border border-slate-200 bg-white px-[4px] py-[1px] text-[6px]"
          style={{ opacity: 0 }}
        >
          다시 보기
        </span>
        <div className="thumb-anim thumb-cm-on absolute inset-0">
          <span className="absolute top-[3px] left-[73px] size-[14px] rounded-full ring-1 ring-white shadow-[0_0_0_200px_rgba(15,23,42,0.55)]" />
          <div className="absolute top-[24px] left-[18px] w-[70px] rounded-md bg-white p-[5px] text-[6px] leading-[8px] shadow-lg">
            <span className="absolute -top-[2px] right-[8px] size-[5px] rotate-45 bg-white" />
            <p className="relative">여기서 새 메모를 만들 수 있어요</p>
            <span className="relative mt-[3px] inline-block rounded bg-slate-900 px-[4px] py-[1px] font-semibold text-white">
              확인
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-coach-mark-cursor" />
    </ThumbStage>
  );
}
