import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ITEMS = [
  { label: "커피 원두 사기", motion: "thumb-sort-down" },
  { label: "메일 답장하기", motion: "thumb-sort-down" },
  { label: "보고서 마무리", motion: "thumb-sort-up" },
  { label: "운동하기", motion: "" },
] as const;

/** Same list as SortableListDemo: drag 보고서 마무리 by its handle to the top. */
export function SortableListThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[4px] left-[32px] text-[7px] font-semibold">오늘 할 일 순서</p>
      {ITEMS.map((item, index) => (
        <span
          key={item.label}
          className="absolute left-[32px] h-[15px] w-[112px] rounded-[3px] border border-slate-200"
          style={{ top: 16 + index * 17 }}
        >
          <span className="absolute top-[3px] left-[16px] text-[5px] text-slate-400 tabular-nums">
            {index + 1}
          </span>
        </span>
      ))}
      {ITEMS.map((item, index) => (
        <p
          key={item.label}
          className={`${item.motion ? `thumb-anim ${item.motion}` : ""} absolute left-[32px] flex h-[15px] w-[112px] items-center gap-[4px] rounded-[3px] bg-white/0 pl-[5px] text-[6px]`}
          style={{
            top: 16 + index * 17,
            transform:
              item.motion === "thumb-sort-up"
                ? "translateY(-34px)"
                : item.motion
                  ? "translateY(17px)"
                  : undefined,
          }}
        >
          <span className="grid h-[8px] w-[5px] grid-cols-2 gap-px">
            {Array.from({ length: 6 }, (_, dot) => (
              <span key={dot} className="size-px rounded-full bg-slate-400" />
            ))}
          </span>
          <span className="ml-[10px]">{item.label}</span>
        </p>
      ))}
      <ThumbCursor motion="thumb-sort-cursor" />
    </ThumbStage>
  );
}
