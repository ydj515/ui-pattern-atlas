import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const COLORS = [
  { value: "#2563eb", motion: "thumb-cp-c0" },
  { value: "#16a34a", motion: "thumb-cp-c1" },
  { value: "#ea580c", motion: "thumb-cp-c2" },
  { value: "#9333ea", motion: "" },
  { value: "#475569", motion: "" },
] as const;

/** Same flow as ColorPickerDemo: 파랑 → 초록 → 주황, with the hex and the tag preview following. */
export function ColorPickerThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[8px] left-[24px] text-[7px] font-medium">태그 색</p>
      {COLORS.map((color, index) => (
        <span
          key={color.value}
          className="absolute top-[20px] size-[14px]"
          style={{ left: 24 + index * 20 }}
        >
          {color.motion ? (
            <span
              className={`thumb-anim ${color.motion} absolute -inset-[2.5px] rounded-full ring-[1.5px] ring-slate-900 ${index === 2 ? "" : "opacity-0"}`}
            />
          ) : null}
          <span
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: color.value }}
          />
        </span>
      ))}
      <span className="absolute top-[21px] left-[126px] flex h-[12px] items-center gap-[2px] rounded-full border border-slate-300 pr-[4px] pl-[2px] text-[5px] text-slate-700">
        <span className="size-[8px] rounded-full bg-gradient-to-br from-rose-400 via-amber-300 to-sky-400" />
        직접 고르기
      </span>
      {COLORS.slice(0, 3).map((color, index) => (
        <div
          key={color.value}
          className={`thumb-anim ${color.motion} ${index === 2 ? "" : "opacity-0"}`}
        >
          <p className="absolute top-[42px] left-[24px] font-mono text-[6px] text-slate-500">
            {color.value.toUpperCase()}
          </p>
          <span
            className="absolute top-[57px] left-[60px] rounded-full px-[6px] py-[2px] text-[6px] font-semibold text-white"
            style={{ backgroundColor: color.value }}
          >
            디자인
          </span>
        </div>
      ))}
      <p className="absolute top-[58px] left-[24px] text-[6.5px] text-slate-600">미리 보기</p>
      <ThumbCursor motion="thumb-cp-cursor" />
    </ThumbStage>
  );
}
