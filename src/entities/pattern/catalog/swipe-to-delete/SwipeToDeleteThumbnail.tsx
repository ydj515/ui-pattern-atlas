import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same list as SwipeToDeleteDemo: slide 장보기 left → 삭제 → 장보기 삭제됨 with 되돌리기. */
export function SwipeToDeleteThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[8px] left-[16px] font-semibold">할 일</p>
      <div className="absolute top-[22px] left-[16px] h-[60px] w-[144px] overflow-hidden rounded-md border border-slate-200 text-[7.5px]">
        <p className="absolute inset-x-0 top-0 h-[20px] border-b border-slate-100 px-[8px] leading-[20px]">
          회의록 정리
        </p>
        <div
          className="thumb-anim thumb-std-row absolute inset-x-0 top-[20px] h-[20px] origin-top bg-rose-600"
          style={{ opacity: 0 }}
        >
          <span className="absolute inset-y-0 right-0 grid w-[34px] place-items-center font-semibold text-white">
            삭제
          </span>
          <p className="thumb-anim thumb-std-slide absolute inset-0 border-b border-slate-100 bg-white px-[8px] leading-[20px]">
            장보기
          </p>
        </div>
        <p
          className="thumb-anim thumb-std-last absolute inset-x-0 top-[20px] h-[20px] bg-white px-[8px] leading-[20px]"
          style={{ transform: "translateY(0)" }}
        >
          운동 30분
        </p>
      </div>
      <p className="thumb-anim thumb-std-toast absolute top-[88px] left-[16px] flex h-[16px] w-[144px] items-center justify-between rounded bg-slate-900 px-[8px] text-[7px] text-white">
        <span>
          <strong>장보기</strong> 삭제됨
        </span>
        <span className="font-semibold text-sky-300">되돌리기</span>
      </p>
      <ThumbCursor motion="thumb-std-cursor" />
    </ThumbStage>
  );
}
