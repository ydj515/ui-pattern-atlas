import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same cart as BadgeDemo: 담기 → 4, then 120개 → the badge caps at 99+. */
export function BadgeThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[20px] left-[73px] grid size-[30px] place-items-center rounded-full border border-slate-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="size-[15px] text-slate-700"
        >
          <path d="M3 4h2l2.4 11h10.2L20 7H7" strokeLinejoin="round" />
          <circle cx="9.5" cy="19" r="1.3" />
          <circle cx="17" cy="19" r="1.3" />
        </svg>
      </span>
      {[
        { text: "3", motion: "thumb-bdg-3 opacity-0" },
        { text: "4", motion: "thumb-bdg-4 opacity-0" },
        { text: "99+", motion: "thumb-bdg-99" },
      ].map((badge) => (
        <span
          key={badge.text}
          className={`thumb-anim ${badge.motion} absolute top-[17px] left-[93px] grid h-[11px] min-w-[11px] place-items-center rounded-full bg-rose-600 px-[3px] text-[6px] font-semibold text-white ring-[1.5px] ring-white`}
        >
          {badge.text}
        </span>
      ))}
      {[
        ["빼기", 46, 22],
        ["담기", 72, 22],
        ["120개", 98, 28],
      ].map(([label, left, width]) => (
        <span
          key={label}
          className="absolute top-[66px] grid h-[13px] place-items-center rounded-[3px] border border-slate-300 text-[6px]"
          style={{ left, width }}
        >
          {label}
        </span>
      ))}
      <ThumbCursor motion="thumb-bdg-cursor" />
    </ThumbStage>
  );
}
