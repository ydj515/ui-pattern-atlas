import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const CHIPS = [
  { label: "와이파이", left: 22, width: 34, motion: "thumb-fc-wifi" },
  { label: "콘센트", left: 60, width: 30, motion: "thumb-fc-outlet" },
  { label: "주차", left: 94, width: 22, motion: "" },
  { label: "반려동물", left: 120, width: 34, motion: "" },
] as const;

const LISTS = [
  {
    motion: "thumb-fc-l0",
    count: 4,
    cafes: ["모퉁이 카페", "숲길 커피", "오후의 빵", "골목 로스터스"],
  },
  { motion: "thumb-fc-l1", count: 3, cafes: ["모퉁이 카페", "오후의 빵", "골목 로스터스"] },
  { motion: "thumb-fc-l2", count: 2, cafes: ["모퉁이 카페", "골목 로스터스"] },
] as const;

/** Same flow as FilterChipDemo: turn on 와이파이, then 콘센트 → the cafe list narrows. */
export function FilterChipThumbnail() {
  return (
    <ThumbStage>
      {CHIPS.map((chip) => (
        <span
          key={chip.label}
          className="absolute top-[8px] grid h-[13px] place-items-center rounded-full border border-slate-300 text-[6px]"
          style={{ left: chip.left, width: chip.width }}
        >
          {chip.label}
          {chip.motion ? (
            <span
              className={`thumb-anim ${chip.motion} absolute -inset-px grid place-items-center rounded-full bg-slate-900 text-white`}
            >
              ✓ {chip.label}
            </span>
          ) : null}
        </span>
      ))}
      {LISTS.map((list) => (
        <div
          key={list.motion}
          className={`thumb-anim ${list.motion} absolute top-[27px] left-[22px] w-[132px] ${list.count === 2 ? "" : "opacity-0"}`}
        >
          <p className="text-[7.5px] font-semibold">카페 {list.count}곳</p>
          <ul className="mt-[3px] rounded border border-slate-200 text-[6.5px]">
            {list.cafes.map((cafe) => (
              <li
                key={cafe}
                className="h-[14px] border-b border-slate-100 px-[6px] leading-[14px] last:border-b-0"
              >
                {cafe}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ThumbCursor motion="thumb-fc-cursor" />
    </ThumbStage>
  );
}
