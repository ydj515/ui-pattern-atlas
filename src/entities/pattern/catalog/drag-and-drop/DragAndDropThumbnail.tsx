import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same board as DragAndDropDemo: drag 디자인 검토 from 할 일 into 완료. */
export function DragAndDropThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[10px] h-[82px] w-[74px] rounded-md border border-dashed border-slate-300 p-[5px]">
        <p className="text-[6.5px] font-semibold text-slate-600">할 일</p>
        <p className="thumb-anim thumb-dnd-rest absolute top-[20px] left-[5px] w-[62px] rounded border border-slate-200 bg-white px-[4px] py-[3px] text-[7px]">
          배포 준비
        </p>
      </div>
      <div
        className="thumb-anim thumb-dnd-over absolute top-[8px] left-[92px] h-[82px] w-[74px] rounded-md border-2 border-dashed border-blue-600 bg-blue-50"
        style={{ opacity: 0 }}
      />
      <div className="absolute top-[8px] left-[92px] h-[82px] w-[74px] rounded-md border border-dashed border-slate-300 p-[5px]">
        <p className="text-[6.5px] font-semibold text-slate-600">완료</p>
        <p className="absolute top-[20px] left-[5px] w-[62px] rounded border border-slate-200 bg-white px-[4px] py-[3px] text-[7px]">
          회의 일정
        </p>
      </div>
      <p
        className="thumb-anim thumb-dnd-card absolute top-[28px] left-[15px] w-[62px] rounded border border-slate-200 bg-white px-[4px] py-[3px] text-[7px] shadow-sm"
        style={{ transform: "translate(82px, 16px)" }}
      >
        디자인 검토
      </p>
      <p className="thumb-anim thumb-dnd-msg absolute top-[96px] left-[10px] text-[6.5px] text-slate-600">
        디자인 검토 → 완료
      </p>
      <ThumbCursor motion="thumb-dnd-cursor" />
    </ThumbStage>
  );
}
