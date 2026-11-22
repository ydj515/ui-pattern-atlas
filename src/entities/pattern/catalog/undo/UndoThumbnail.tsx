import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ROWS = [
  { title: "주간 회의 안내", motion: "" },
  { title: "배송이 시작됐어요", motion: "thumb-anim thumb-undo-row2 opacity-0" },
  { title: "청구서가 도착했어요", motion: "thumb-anim thumb-undo-row3" },
] as const;

/** Same flow as UndoDemo: delete a mail → undo bar with time line → 되돌리기 restores it. */
export function UndoThumbnail() {
  return (
    <ThumbStage>
      {ROWS.map((row, index) => (
        <div
          key={row.title}
          className={`${row.motion} absolute left-[12px] flex h-[20px] w-[152px] items-center justify-between border-b border-slate-100 bg-white px-[6px] text-[7px]`}
          // Base frame = just deleted: row 2 gone, row 3 moved up, undo bar showing.
          style={{ top: 8 + index * 20, transform: index === 2 ? "translateY(-20px)" : undefined }}
        >
          {row.title}
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="size-[9px] text-slate-400"
          >
            <path d="M8 2a1 1 0 0 0-1 1v1H4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2h-3V3a1 1 0 0 0-1-1H8Zm-3 6 .8 8.1A2 2 0 0 0 7.8 18h4.4a2 2 0 0 0 2-1.9L15 8H5Z" />
          </svg>
        </div>
      ))}

      <div className="thumb-anim thumb-undo-bar absolute top-[84px] left-[12px] flex h-[20px] w-[152px] items-center justify-between overflow-hidden rounded-md bg-slate-900 px-[8px] text-[7px] text-white">
        메일 1개를 삭제했어요
        <span className="font-semibold text-amber-300">되돌리기</span>
        <span
          className="thumb-anim thumb-undo-line absolute inset-x-0 bottom-0 h-[1.5px] origin-left bg-amber-300"
          style={{ transform: "scaleX(0.7)" }}
        />
      </div>
      <ThumbCursor motion="thumb-undo-cursor" />
    </ThumbStage>
  );
}
