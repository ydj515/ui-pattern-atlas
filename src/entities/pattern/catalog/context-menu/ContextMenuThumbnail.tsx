import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const FILES = [
  { name: "사진.png", left: 12 },
  { name: "회의록.pdf", left: 66 },
  { name: "예산.xlsx", left: 120 },
] as const;

const ITEMS = ["열기", "다운로드", "링크 복사"] as const;

/** Same flow as ContextMenuDemo: right-click 사진.png → menu at the pointer → 다운로드. */
export function ContextMenuThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute inset-x-0 top-[6px] text-center text-[6.5px] text-slate-500">
        파일을 우클릭하거나 길게 눌러 보세요.
      </p>
      {FILES.map((file) => (
        <div
          key={file.name}
          className="absolute top-[20px] flex h-[44px] w-[44px] flex-col items-center justify-center gap-[4px] rounded-md border border-slate-200 bg-white"
          style={{ left: file.left }}
        >
          <span className="size-[12px] rounded-[3px] bg-slate-200" />
          <span className="text-[6px] leading-none">{file.name}</span>
        </div>
      ))}

      <span className="thumb-anim thumb-ctx-click absolute top-[34px] left-[48px] rounded-full bg-slate-900 px-[4px] text-[6px] leading-[10px] text-white">
        우클릭
      </span>
      <div className="thumb-anim thumb-ctx-menu absolute top-[48px] left-[40px] h-[46px] w-[64px] rounded-md border border-slate-200 bg-white shadow-md">
        <span className="thumb-anim thumb-ctx-hover absolute top-[12px] left-[2px] h-[10px] w-[58px] rounded bg-slate-100" />
        {ITEMS.map((label, index) => (
          <span
            key={label}
            className="absolute left-[7px] text-[6.5px] leading-[10px]"
            style={{ top: 2 + index * 10 }}
          >
            {label}
          </span>
        ))}
        <span className="absolute inset-x-[5px] top-[33px] h-px bg-slate-200" />
        <span className="absolute top-[34px] left-[7px] text-[6.5px] leading-[10px] text-rose-600">
          삭제
        </span>
      </div>

      <p className="thumb-anim thumb-ctx-status absolute inset-x-0 top-[100px] text-center text-[7px] text-slate-500">
        사진.png 파일을 다운로드했어요
      </p>
      <ThumbCursor motion="thumb-ctx-cursor" />
    </ThumbStage>
  );
}
