import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same list as TaskItemDemo: check 택배 보내기 → a line runs through it and it greys out. */
export function TaskItemThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[28px] h-[96px] w-[120px] rounded-[12px] border border-slate-200 p-[8px] text-[7px]">
        <p className="flex items-baseline justify-between">
          <b className="text-[8px]">오늘 할 일</b>
          <span className="grid text-[6px] text-slate-600 tabular-nums">
            <span
              className="thumb-anim thumb-tsk-before col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              완료 1/3
            </span>
            <span className="thumb-anim thumb-tsk-after col-start-1 row-start-1">완료 2/3</span>
          </span>
        </p>
        {["우유 사기", "택배 보내기", "운동 30분"].map((task, index) => (
          <p key={task} className="flex h-[18px] items-center gap-[6px] border-b border-slate-100">
            <span className="relative size-[9px] rounded-[2px] border border-slate-400">
              {index === 0 ? (
                <span className="absolute -inset-px grid place-items-center rounded-[2px] bg-emerald-600 text-[6px] text-white">
                  ✓
                </span>
              ) : null}
              {index === 1 ? (
                <span className="thumb-anim thumb-tsk-after absolute -inset-px grid place-items-center rounded-[2px] bg-emerald-600 text-[6px] text-white">
                  ✓
                </span>
              ) : null}
            </span>
            <span className={`relative ${index === 0 ? "text-slate-400" : ""}`}>
              {index === 1 ? (
                <>
                  <span>{task}</span>
                  <span className="thumb-anim thumb-tsk-after absolute inset-0 bg-white text-slate-400">
                    {task}
                  </span>
                </>
              ) : (
                task
              )}
              {index < 2 ? (
                <span
                  className={`absolute top-1/2 left-0 h-px w-full origin-left bg-current ${index === 1 ? "thumb-anim thumb-tsk-line text-slate-400" : ""}`}
                />
              ) : null}
            </span>
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-tsk-cursor" />
    </ThumbStage>
  );
}
