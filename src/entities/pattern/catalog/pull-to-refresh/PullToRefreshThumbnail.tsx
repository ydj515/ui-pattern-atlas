import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

export function PullToRefreshThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-x-3 top-[7px] flex items-center gap-2">
        <span className="font-semibold">소식</span>
        <span className="rounded border border-slate-300 px-1.5 py-0.5 text-slate-700">
          새로고침
        </span>
        <span className="thumb-anim thumb-pull-loading absolute left-[70px] text-blue-700">
          새 소식을 불러오는 중
        </span>
        <span className="thumb-anim thumb-pull-result absolute left-[70px] whitespace-nowrap text-blue-700">
          새로고침을 완료했어요
        </span>
      </div>
      <div className="absolute inset-x-3 top-[32px] overflow-hidden">
        <div className="thumb-anim thumb-pull-hint grid h-5 place-items-center rounded bg-blue-50 text-blue-700">
          아래로 당기기
        </div>
        <div className="thumb-anim thumb-pull-release absolute inset-x-0 top-0 grid h-5 place-items-center rounded bg-blue-50 text-blue-700">
          놓아서 새로고침
        </div>
        <div className="thumb-anim thumb-pull-items absolute inset-x-0 top-0 grid gap-0.5 bg-white">
          <p className="rounded bg-slate-100 px-2 py-0.5">배송 일정 안내</p>
          <p className="rounded bg-slate-100 px-2 py-0.5">서비스 점검 안내</p>
          <p className="rounded bg-slate-100 px-2 py-0.5">이번 주 새 기능</p>
        </div>
        <div className="thumb-anim thumb-pull-result relative grid gap-0.5 bg-white">
          <p className="rounded bg-blue-50 px-2 py-0.5 font-medium text-blue-700">
            새 공지가 올라왔어요
          </p>
          <p className="rounded bg-slate-100 px-2 py-0.5">배송 일정 안내</p>
          <p className="rounded bg-slate-100 px-2 py-0.5">서비스 점검 안내</p>
          <p className="rounded bg-slate-100 px-2 py-0.5">이번 주 새 기능</p>
        </div>
      </div>
      <span className="absolute bottom-[3px] right-[9px] text-[6px] text-slate-700">
        □ 요청 실패 재현
      </span>
      <ThumbCursor motion="thumb-pull-cursor" />
    </ThumbStage>
  );
}
