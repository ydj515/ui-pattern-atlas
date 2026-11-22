import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const CURVES = [
  ["일정하게", "linear", "thumb-eio-linear"],
  ["천천히 시작", "ease-in", "thumb-eio-in"],
  ["천천히 멈춤", "ease-out", "thumb-eio-out"],
  ["양쪽 천천히", "ease-in-out", "thumb-eio-inout"],
];

/** Same tracks as EasingCompareDemo: 재생 moves four dots over the same time with different easing. */
export function EasingCompareThumbnail() {
  return (
    <ThumbStage>
      {CURVES.map(([label, easing, motion], index) => (
        <div key={label} className="absolute left-[10px] w-[156px]" style={{ top: 6 + index * 21 }}>
          <p className="flex justify-between text-[6.5px] leading-[8px] text-slate-600">
            <span>{label}</span>
            <code className="text-slate-400">{easing}</code>
          </p>
          <span className="relative mt-[2px] block h-[7px] rounded-full bg-slate-100">
            <span
              className={`thumb-anim ${motion} absolute top-0 left-0 size-[7px] rounded-full bg-blue-600`}
              style={{ transform: "translateX(149px)" }}
            />
          </span>
        </div>
      ))}
      <span className="absolute top-[94px] left-[10px] grid h-[13px] w-[28px] place-items-center rounded bg-slate-900 text-[7px] text-white">
        재생
      </span>
      <ThumbCursor motion="thumb-eio-cursor" />
    </ThumbStage>
  );
}
