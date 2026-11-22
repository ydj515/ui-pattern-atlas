import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same photos as SharedElementDemo: the 부산 tile grows into the large photo, then shrinks back. */
export function SharedElementThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-se-grid absolute inset-0" style={{ opacity: 0 }}>
        <p className="absolute top-[4px] left-[10px] font-semibold">여행 사진</p>
        <span className="absolute top-[18px] left-[10px] h-[36px] w-[48px] rounded-md bg-gradient-to-br from-emerald-300 to-sky-400" />
        <span className="absolute top-[18px] left-[118px] h-[36px] w-[48px] rounded-md bg-gradient-to-br from-amber-200 to-rose-300" />
        <p className="absolute top-[56px] left-[10px] text-[7px]">서울</p>
        <p className="absolute top-[56px] left-[64px] text-[7px]">부산</p>
        <p className="absolute top-[56px] left-[118px] text-[7px]">강릉</p>
      </div>
      <span className="thumb-anim thumb-se-img absolute top-[6px] left-[10px] h-[64px] w-[156px] origin-top-left rounded-md bg-gradient-to-br from-sky-300 to-indigo-400" />
      <div className="thumb-anim thumb-se-detail absolute inset-x-[10px] top-[76px] flex items-center justify-between">
        <b className="text-[10px]">부산</b>
        <span className="rounded border border-slate-200 px-[6px] py-[2px] text-[7px]">닫기</span>
      </div>
      <ThumbCursor motion="thumb-se-cursor" />
    </ThumbStage>
  );
}
