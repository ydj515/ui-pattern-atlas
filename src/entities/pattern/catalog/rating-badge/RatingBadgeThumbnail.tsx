import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const CAFES = [
  ["숲속 카페", "4.9", "7", "thumb-rb-r0"],
  ["한강 브루어리", "4.6", "1,284", "thumb-rb-r1"],
  ["골목 베이커리", "4.4", "356", "thumb-rb-r2"],
];

/** Same cafés as RatingBadgeDemo: 리뷰 많은 순 reorders the list; the counts explain why. */
export function RatingBadgeThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[5px] left-[12px] flex gap-[3px] text-[6px]">
        <span className="relative rounded-full border border-slate-200 px-[5px] py-[1px]">
          평점순
          <span
            className="thumb-anim thumb-rb-score absolute -inset-px rounded-full bg-slate-900 px-[5px] py-[1px] text-white"
            style={{ opacity: 0 }}
          >
            평점순
          </span>
        </span>
        <span className="relative rounded-full border border-slate-200 px-[5px] py-[1px]">
          리뷰 많은 순
          <span className="thumb-anim thumb-rb-count absolute -inset-px rounded-full bg-slate-900 px-[5px] py-[1px] text-white">
            리뷰 많은 순
          </span>
        </span>
      </p>
      {CAFES.map(([name, score, count, motion], index) => (
        <div
          key={name}
          className={`thumb-anim ${motion} absolute left-[12px] flex h-[28px] w-[152px] items-center gap-[6px] rounded-lg border border-slate-200 bg-white px-[5px]`}
          style={{ top: 20 + index * 30, transform: `translateY(${[60, -30, -30][index]}px)` }}
        >
          <span className="size-[18px] rounded-md bg-gradient-to-br from-amber-100 to-orange-200" />
          <span className="grid text-[6px]">
            <b className="text-[7px]">{name}</b>
            <span className="text-slate-700 tabular-nums">
              <span className="text-amber-500">★</span> <b>{score}</b>{" "}
              <span className="text-slate-500">({count})</span>
            </span>
          </span>
        </div>
      ))}
      <ThumbCursor motion="thumb-rb-cursor" />
    </ThumbStage>
  );
}
