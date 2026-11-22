import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const START = [1, 2, 3, 4, 5, 6, 7] as const;
const FAR = [5_001, 5_002, 5_003, 5_004, 5_005, 5_006, 5_007] as const;

function Rows({
  numbers,
  motion,
}: {
  readonly numbers: readonly number[];
  readonly motion: string;
}) {
  return (
    <div className={`thumb-anim ${motion} absolute inset-x-0 top-0`}>
      {numbers.map((number) => (
        <p
          key={number}
          className="flex h-[12px] justify-between border-b border-slate-100 px-[6px] text-[6px] leading-[12px]"
        >
          주문 {number}
          <span className="text-[5px] text-slate-400 tabular-nums">
            #{String(number).padStart(5, "0")}
          </span>
        </p>
      ))}
    </div>
  );
}

/** Same list as VirtualizedListDemo: a fast scroll through 10,000 rows with only a few drawn. */
export function VirtualizedListThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[40px] h-[84px] w-[96px] overflow-hidden rounded-md border border-slate-200">
        <Rows numbers={START} motion="thumb-vl-start opacity-0" />
        <Rows numbers={FAR} motion="thumb-vl-far" />
        <span className="absolute top-[4px] right-[1px] h-[76px] w-[2px] rounded-full bg-slate-100" />
        <span
          className="thumb-anim thumb-vl-thumb absolute top-[4px] right-[1px] h-[6px] w-[2px] rounded-full bg-slate-400"
          style={{ transform: "translateY(36px)" }}
        />
      </div>
      <p className="absolute inset-x-0 top-[94px] text-center text-[5.5px] text-slate-500">
        10,000건 중 화면에 그린 행 15개
      </p>
      <ThumbCursor motion="thumb-vl-cursor" />
    </ThumbStage>
  );
}
