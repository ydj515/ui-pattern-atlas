import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ROWS = [
  ["너비", "128"],
  ["높이", "96"],
  ["모서리", "8"],
] as const;

/** Same editor as CollapsiblePanelDemo: fold the 속성 panel into a rail → the canvas gets the room. */
export function CollapsiblePanelThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[12px] h-[90px] w-[152px] overflow-hidden rounded-md border border-slate-200 bg-slate-50">
        <span
          className="thumb-anim thumb-cpn-canvas absolute top-[30px] left-[48px] grid h-[30px] w-[48px] place-items-center rounded-[3px] bg-white text-[5.5px] text-slate-500 shadow-sm"
          style={{ transform: "translateX(22px)" }}
        >
          캔버스
        </span>
        <div className="thumb-anim thumb-cpn-open absolute inset-y-0 right-0 w-[60px] border-l border-slate-200 bg-white opacity-0">
          <p className="absolute top-[4px] left-[6px] text-[6px] font-semibold">속성</p>
          <span className="absolute top-[2px] right-[4px] text-[7px] text-slate-500">»</span>
          <span className="absolute inset-x-0 top-[14px] h-px bg-slate-100" />
          {ROWS.map(([name, value], index) => (
            <p
              key={name}
              className="absolute right-[6px] left-[6px] flex justify-between text-[5.5px]"
              style={{ top: 20 + index * 10 }}
            >
              <span className="text-slate-500">{name}</span>
              {value}
            </p>
          ))}
        </div>
        <div className="thumb-anim thumb-cpn-rail absolute inset-y-0 right-0 w-[16px] border-l border-slate-200 bg-white">
          <span className="absolute top-[2px] left-[4px] text-[7px] text-slate-500">«</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-cpn-cursor" />
    </ThumbStage>
  );
}
