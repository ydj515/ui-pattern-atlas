import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Heart({ filled }: { readonly filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-[8px]"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M10 17s-6.5-3.9-6.5-8.6A3.6 3.6 0 0 1 10 6.1a3.6 3.6 0 0 1 6.5 2.3C16.5 13.1 10 17 10 17Z" />
    </svg>
  );
}

/**
 * Same flow as OptimisticUiDemo: like shows 13 at once while the server still says 12,
 * then a failing request shows the change and rolls it back with a message.
 */
export function OptimisticUiThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[24px] h-[82px] w-[128px] overflow-hidden rounded-md border border-slate-200">
        <span className="absolute inset-x-0 top-0 h-[22px] bg-gradient-to-br from-amber-200 via-rose-300 to-indigo-400" />
        <p className="absolute top-[27px] left-[8px] text-[7.5px] font-semibold">한강 노을</p>

        <span className="thumb-anim thumb-opt-off absolute top-[40px] left-[8px] flex h-[14px] items-center gap-[3px] rounded-full border border-slate-300 px-[6px] text-[6.5px] text-slate-700 opacity-0">
          <Heart filled={false} />
          좋아요 12
        </span>
        <span className="thumb-anim thumb-opt-on absolute top-[40px] left-[8px] flex h-[14px] items-center gap-[3px] rounded-full border border-rose-200 bg-rose-50 px-[6px] text-[6.5px] text-rose-600">
          <Heart filled />
          좋아요 13
        </span>

        <p className="thumb-anim thumb-opt-saved12 absolute top-[59px] left-[8px] text-[6px] text-slate-500 opacity-0">
          서버에 저장된 값: 12
        </p>
        <p className="thumb-anim thumb-opt-saved13 absolute top-[59px] left-[8px] text-[6px] text-slate-500">
          서버에 저장된 값: 13
        </p>
        <p className="thumb-anim thumb-opt-error absolute top-[69px] left-[8px] text-[6px] text-rose-600">
          좋아요를 반영하지 못했어요
        </p>
      </div>

      <span className="absolute top-[90px] left-[24px] size-[7px] rounded-[1.5px] border border-slate-400 bg-white" />
      <span className="thumb-anim thumb-opt-check absolute top-[90px] left-[24px] grid size-[7px] place-items-center rounded-[1.5px] bg-blue-600 text-[5px] text-white opacity-0">
        ✓
      </span>
      <p className="absolute top-[89px] left-[35px] text-[6.5px] text-slate-600">
        다음 요청 실패시키기
      </p>
      <ThumbCursor motion="thumb-opt-cursor" />
    </ThumbStage>
  );
}
