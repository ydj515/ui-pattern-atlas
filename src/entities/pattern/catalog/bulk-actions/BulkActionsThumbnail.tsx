import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const FILES = [
  ["영수증_3월.pdf", "1.2MB", "thumb-ra-ba-r1", "thumb-ra-ba-c1"],
  ["영수증_4월.pdf", "980KB", "thumb-ra-ba-r2", "thumb-ra-ba-c2"],
  ["계약서.pdf", "3.4MB", "thumb-ra-ba-up", ""],
  ["견적서.xlsx", "64KB", "thumb-ra-ba-up", ""],
] as const;

/** Same files as BulkActionsDemo: checking rows brings up one bar; deleting can be undone. */
export function BulkActionsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <div className="relative h-[14px]">
          <p
            className="thumb-anim thumb-ra-ba-bar absolute inset-0 flex items-center gap-[4px] rounded-[4px] bg-slate-900 px-[4px] text-white"
            style={HIDDEN}
          >
            <span className="grid flex-1">
              <span className="thumb-anim thumb-ra-ba-n1 col-start-1 row-start-1">1개 선택</span>
              <span className="thumb-anim thumb-ra-ba-n2 col-start-1 row-start-1" style={HIDDEN}>
                2개 선택
              </span>
            </span>
            <span>보관</span>
            <span className="rounded-[2px] bg-rose-500 px-[3px]">삭제</span>
            <span className="text-slate-300">선택 해제</span>
          </p>
        </div>
        <div className="mt-[3px] h-[56px] overflow-hidden rounded-[4px] border border-slate-200">
          {FILES.map(([name, size, row, check]) => (
            <p
              key={name}
              className={`thumb-anim ${row} flex h-[14px] items-center gap-[4px] border-b border-slate-100 bg-white px-[4px]`}
            >
              <span className="relative size-[6px] rounded-[1.5px] border border-slate-400">
                {check ? (
                  <span
                    className={`thumb-anim ${check} absolute -inset-px rounded-[1.5px] bg-slate-900`}
                    style={HIDDEN}
                  />
                ) : null}
              </span>
              <span className="flex-1">{name}</span>
              <span className="text-[5px] text-slate-500">{size}</span>
            </p>
          ))}
        </div>
        <p
          className="thumb-anim thumb-ra-ba-toast mt-[2px] flex items-center rounded-[4px] bg-slate-800 px-[4px] py-[2px] text-[5.5px] text-white"
          style={HIDDEN}
        >
          <span className="flex-1">파일 2개를 지웠어요</span>
          <span className="font-semibold text-sky-300">되돌리기</span>
        </p>
      </div>
      <ThumbCursor motion="thumb-ra-ba-cursor" />
    </ThumbStage>
  );
}
