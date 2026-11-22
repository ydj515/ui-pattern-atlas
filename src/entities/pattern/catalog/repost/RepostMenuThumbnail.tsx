import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function RepostIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[9px] fill-none stroke-current stroke-2">
      <path
        d="M7 7h10l-3-3M17 17H7l3 3M17 7v5M7 17v-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Same post as RepostMenuDemo: the repost icon opens 리포스트 · 인용하기 → 리포스트 → 13. */
export function RepostMenuThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="absolute top-[46px] left-[8px] text-[5.5px] text-slate-500">서연</p>
        <p className="absolute top-[54px] left-[8px]">이번 주말 서울숲에서 플리마켓 열려요</p>
        <p className="absolute top-[68px] left-[8px] grid">
          <span
            className="thumb-anim thumb-rp-off col-start-1 row-start-1 flex items-center gap-[2px] text-slate-700"
            style={{ opacity: 0 }}
          >
            <RepostIcon />
            12
          </span>
          <span className="thumb-anim thumb-rp-on col-start-1 row-start-1 flex items-center gap-[2px] text-emerald-600">
            <RepostIcon />
            13
          </span>
        </p>
        <p className="thumb-anim thumb-rp-on absolute top-[84px] left-[8px] text-[6px] text-emerald-700">
          내 피드에 리포스트했어요
        </p>
        <div
          className="thumb-anim thumb-rp-menu absolute top-[38px] left-[8px] grid w-[56px] rounded-md bg-white p-[2px] text-[6px] shadow-lg ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          <span className="rounded bg-slate-100 px-[4px] py-[2px]">리포스트</span>
          <span className="px-[4px] py-[2px]">인용하기</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-repost-cursor" />
    </ThumbStage>
  );
}
