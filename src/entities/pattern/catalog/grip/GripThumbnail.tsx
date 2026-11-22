import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Grip() {
  return (
    <svg viewBox="0 0 12 18" className="h-[8px] w-[5px] fill-slate-400">
      {[3, 9, 15].flatMap((y) =>
        [3, 9].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" />),
      )}
    </svg>
  );
}

const ROWS = [
  ["장보기", "thumb-grip-r0"],
  ["운동 30분", "thumb-grip-r1"],
  ["회의 준비", "thumb-grip-r2"],
];

/** Same list as GripDemo: drag 회의 준비 by its grip to the top. */
export function GripThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px] p-[6px]">
        <p className="text-[7.5px] font-bold">오늘 할 일</p>
        <div className="relative mt-[4px] h-[54px]">
          {ROWS.map(([task, motion], index) => (
            <p
              key={task}
              className={`thumb-anim ${motion} absolute inset-x-0 flex h-[15px] items-center gap-[4px] rounded border border-slate-200 bg-white px-[3px]`}
              style={{ top: index * 18, transform: `translateY(${[18, 18, -36][index]}px)` }}
            >
              <Grip />
              {task}
            </p>
          ))}
        </div>
        <p className="thumb-anim thumb-grip-msg text-[6px] text-slate-600">회의 준비: 1번째</p>
      </div>
      <ThumbCursor motion="thumb-grip-cursor" />
    </ThumbStage>
  );
}
