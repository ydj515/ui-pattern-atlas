import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const CHIPS = [
  { label: "오늘", left: 18, width: 22, motion: "" },
  { label: "내일", left: 44, width: 22, motion: "thumb-qd-tomorrow" },
  { label: "이번 주말", left: 70, width: 34, motion: "thumb-qd-weekend" },
  { label: "다음 주 월요일", left: 108, width: 50, motion: "" },
] as const;

/** Same flow as QuickDateChipsDemo (today Mon 11/23): 내일 → 이번 주말. */
export function QuickDateChipsThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[8px] left-[18px] text-[7px] font-medium">받는 날</p>
      {CHIPS.map((chip) => (
        <span
          key={chip.label}
          className="absolute top-[19px] grid h-[13px] place-items-center rounded-full border border-slate-300 text-[6px]"
          style={{ left: chip.left, width: chip.width }}
        >
          {chip.label}
          {chip.motion ? (
            <span
              className={`thumb-anim ${chip.motion} absolute -inset-px grid place-items-center rounded-full bg-slate-900 text-white ${chip.motion === "thumb-qd-tomorrow" ? "opacity-0" : ""}`}
            >
              {chip.label}
            </span>
          ) : null}
        </span>
      ))}
      <p className="absolute top-[42px] left-[18px] text-[6px] text-slate-600">직접 고르기</p>
      <span className="absolute top-[39px] left-[56px] h-[13px] w-[58px] rounded border border-slate-300" />
      <p className="thumb-anim thumb-qd-tomorrow absolute top-[42px] left-[61px] text-[6px] tabular-nums opacity-0">
        2026. 11. 24.
      </p>
      <p className="thumb-anim thumb-qd-weekend absolute top-[42px] left-[61px] text-[6px] tabular-nums">
        2026. 11. 28.
      </p>
      <p className="thumb-anim thumb-qd-tomorrow absolute top-[60px] left-[18px] text-[6.5px] text-slate-700 opacity-0">
        11월 24일 (화)에 받아요
      </p>
      <p className="thumb-anim thumb-qd-weekend absolute top-[60px] left-[18px] text-[6.5px] text-slate-700">
        11월 28일 (토)에 받아요
      </p>
      <ThumbCursor motion="thumb-qd-cursor" />
    </ThumbStage>
  );
}
