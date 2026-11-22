import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same post as MeatballsDemo: ⋯ → 링크 복사 → 링크를 복사했어요. */
export function MeatballsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px] p-[6px]">
        <p className="flex items-center justify-between text-[6px] text-slate-600">
          <span>
            <b className="text-slate-900">서연</b> · 2시간 전
          </span>
          <svg viewBox="0 0 24 24" className="size-[8px] fill-slate-700">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </p>
        <p className="mt-[3px]">이번 주말 서울숲에서 플리마켓 열려요</p>
        <span className="mt-[4px] block h-[40px] rounded-md bg-gradient-to-br from-emerald-100 to-sky-200" />
        <p className="thumb-anim thumb-meat-msg mt-[4px] text-[6px] text-slate-600">
          링크를 복사했어요
        </p>
        <div
          className="thumb-anim thumb-meat-menu absolute top-[16px] right-[6px] grid w-[50px] rounded-md bg-white p-[2px] shadow-lg ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          <span className="rounded bg-slate-100 px-[3px] py-[2px]">링크 복사</span>
          <span className="px-[3px] py-[2px]">알림 끄기</span>
          <span className="px-[3px] py-[2px]">신고하기</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-meat-cursor" />
    </ThumbStage>
  );
}
