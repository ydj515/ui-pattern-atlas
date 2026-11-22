import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const WEEK = ["월", "화", "수", "목", "금", "토", "일"];

/** Same week as StreakDemo: 오늘 기록하기 fills 목 and 9일 연속 pops to 10일 연속. */
export function StreakThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] rounded-[12px] border border-slate-200 bg-slate-50 p-[4px]">
        <div className="h-[68px] rounded-lg bg-white p-[6px]">
          <p className="relative h-[14px] text-[11px] leading-[14px] font-bold">
            <span className="thumb-anim thumb-stk-before absolute" style={{ opacity: 0 }}>
              9일 연속
            </span>
            <span className="thumb-anim thumb-stk-after absolute origin-left">10일 연속</span>
          </p>
          <ol className="mt-[6px] grid grid-cols-7 text-center text-[5.5px] text-slate-600">
            {WEEK.map((day, index) => (
              <li key={day} className="grid justify-items-center gap-[2px]">
                <span className="relative size-[10px] rounded-full border border-dashed border-slate-300">
                  {index < 3 ? (
                    <span className="absolute -inset-px rounded-full bg-orange-500" />
                  ) : null}
                  {index === 3 ? (
                    <span className="thumb-anim thumb-stk-today absolute -inset-px rounded-full bg-orange-500" />
                  ) : null}
                </span>
                {day}
              </li>
            ))}
          </ol>
        </div>
        <span className="relative mt-[6px] grid h-[14px] overflow-hidden rounded text-[6.5px] font-semibold text-white">
          <span className="absolute inset-0 bg-slate-300" />
          <span
            className="thumb-anim thumb-stk-before absolute inset-0 bg-orange-500"
            style={{ opacity: 0 }}
          />
          <span
            className="thumb-anim thumb-stk-before relative col-start-1 row-start-1 place-self-center"
            style={{ opacity: 0 }}
          >
            오늘 기록하기
          </span>
          <span className="thumb-anim thumb-stk-after relative col-start-1 row-start-1 place-self-center">
            오늘 기록했어요
          </span>
        </span>
      </div>
      <ThumbCursor motion="thumb-stk-cursor" />
    </ThumbStage>
  );
}
