import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const BUTTONS = [
  { letter: "B", className: "font-bold", motion: "thumb-tgl-bold" },
  { letter: "I", className: "font-serif italic", motion: "" },
  { letter: "U", className: "underline", motion: "thumb-tgl-under" },
] as const;

/** Same toolbar as ToggleButtonDemo: press 굵게, then 밑줄 → both stay on and the text follows. */
export function ToggleButtonThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[18px] left-[24px] h-[56px] w-[128px] rounded-md border border-slate-200">
        {BUTTONS.map((button, index) => (
          <span
            key={button.letter}
            className={`absolute top-[4px] grid size-[14px] place-items-center rounded-[3px] text-[7px] ${button.className}`}
            style={{ left: 4 + index * 16 }}
          >
            {button.letter}
            {button.motion ? (
              <span
                className={`thumb-anim ${button.motion} absolute inset-0 grid place-items-center rounded-[3px] bg-slate-900 text-white`}
              >
                {button.letter}
              </span>
            ) : null}
          </span>
        ))}
        <span className="absolute inset-x-0 top-[22px] h-px bg-slate-100" />
        <p className="thumb-anim thumb-tgl-t0 absolute top-[32px] left-[10px] text-[7px] opacity-0">
          오늘 회의는 3시에 시작해요
        </p>
        <p className="thumb-anim thumb-tgl-t1 absolute top-[32px] left-[10px] text-[7px] font-bold opacity-0">
          오늘 회의는 3시에 시작해요
        </p>
        <p className="thumb-anim thumb-tgl-t2 absolute top-[32px] left-[10px] text-[7px] font-bold underline">
          오늘 회의는 3시에 시작해요
        </p>
      </div>
      <ThumbCursor motion="thumb-tgl-cursor" />
    </ThumbStage>
  );
}
