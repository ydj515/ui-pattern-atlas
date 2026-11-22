import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same thread as CommentThreadDemo: 답글 1개 보기 → 도윤's reply opens under 하늘. */
export function CommentThreadThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="text-[7px] font-bold">댓글 2</p>
        <div className="mt-[4px] flex gap-[4px]">
          <span className="grid size-[11px] shrink-0 place-items-center rounded-full bg-slate-200 text-[5px]">
            하
          </span>
          <div>
            <p className="text-[5px] text-slate-500">
              <b className="text-slate-900">하늘</b> 2시간 전
            </p>
            <p>사진 정말 좋네요</p>
            <p className="text-[5px] font-semibold text-slate-500">답글</p>
          </div>
        </div>
        <p className="ml-[15px] grid text-[5px] font-semibold text-blue-700">
          <span
            className="thumb-anim thumb-ct-closed col-start-1 row-start-1"
            style={{ opacity: 0 }}
          >
            답글 1개 보기
          </span>
          <span className="thumb-anim thumb-ct-open col-start-1 row-start-1">답글 접기</span>
        </p>
        <div className="thumb-anim thumb-ct-open mt-[2px] ml-[15px] flex gap-[3px] border-l-2 border-slate-100 pl-[4px]">
          <span className="grid size-[8px] shrink-0 place-items-center rounded-full bg-slate-200 text-[4px]">
            도
          </span>
          <div>
            <p className="text-[5px] text-slate-500">
              <b className="text-slate-900">도윤</b> 1시간 전
            </p>
            <p>고마워요</p>
          </div>
        </div>
        <div className="thumb-anim thumb-ct-shift mt-[4px] flex gap-[4px]">
          <span className="grid size-[11px] shrink-0 place-items-center rounded-full bg-slate-200 text-[5px]">
            서
          </span>
          <div>
            <p className="text-[5px] text-slate-500">
              <b className="text-slate-900">서연</b> 1시간 전
            </p>
            <p>어디서 찍었어요?</p>
            <p className="text-[5px] font-semibold text-slate-500">답글</p>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-ct-cursor" />
    </ThumbStage>
  );
}
