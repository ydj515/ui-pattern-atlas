import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as NotFoundPageDemo: a mistyped address → 404 with search → 홈으로 가기. */
export function NotFoundPageThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[16px] h-[104px] w-[144px] overflow-hidden rounded-md border border-slate-200 text-center">
        <p className="absolute inset-x-0 top-0 h-[12px] border-b border-slate-200 bg-slate-50 text-left font-mono text-[6px] leading-[11px] text-slate-500">
          <span className="thumb-anim thumb-nf-p404 absolute left-[6px]">/blog/ui-patern</span>
          <span className="thumb-anim thumb-nf-home absolute left-[6px] opacity-0">/</span>
        </p>

        <div className="thumb-anim thumb-nf-p404 absolute inset-x-0 top-[12px] bottom-0">
          <p className="absolute inset-x-0 top-[8px] text-[6px] font-semibold text-slate-400">
            404
          </p>
          <p className="absolute inset-x-0 top-[17px] text-[8px] font-semibold">
            페이지를 찾을 수 없어요
          </p>
          <p className="absolute inset-x-0 top-[29px] text-[6px] text-slate-500">
            주소가 바뀌었거나 삭제된 페이지예요.
          </p>
          <span className="absolute top-[42px] left-[26px] h-[13px] w-[66px] rounded border border-slate-300 px-[4px] text-left text-[6px] leading-[11px] text-slate-400">
            찾으려던 내용
          </span>
          <span className="absolute top-[42px] left-[96px] grid h-[13px] w-[22px] place-items-center rounded bg-slate-900 text-[6px] font-semibold text-white">
            검색
          </span>
          <p className="absolute inset-x-0 top-[62px] text-[6.5px] font-medium text-blue-700 underline">
            홈으로 가기
          </p>
        </div>

        <div className="thumb-anim thumb-nf-home absolute inset-x-0 top-[12px] bottom-0 opacity-0">
          <p className="absolute inset-x-0 top-[28px] text-[8px] font-semibold">홈</p>
          <p className="absolute inset-x-0 top-[42px] text-[6px] font-medium text-blue-700 underline">
            없는 주소 열기
          </p>
        </div>
      </div>
      <ThumbCursor motion="thumb-nf-cursor" />
    </ThumbStage>
  );
}
