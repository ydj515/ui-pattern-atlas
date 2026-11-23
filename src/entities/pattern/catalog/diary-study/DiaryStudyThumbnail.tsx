import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];
const EMPTY = ["수", "일"];
const ENTRIES = [
  ["화", "21:30", "아이를 재우고 주문하려는데 새벽배송 마감이 지나 있었어요"],
  ["목", "21:45", "어제 담은 걸 결제했어요. 마감 시간을 미리 알고 싶어요"],
] as const;

/** Same diary as DiaryStudyDemo: 화 and then 목 show late-night entries, which add up to the finding below. */
export function DiaryStudyThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>참가자 4번의 일주일 기록</b>
        <p className="mt-[4px] grid grid-cols-7 gap-[2px] text-center">
          {DAYS.map((day) => {
            const pick = ENTRIES.findIndex(([name]) => name === day);
            return (
              <span
                key={day}
                className="relative grid justify-items-center gap-[1px] rounded-[3px] py-[2px]"
              >
                {pick >= 0 ? (
                  <span
                    className={`thumb-anim thumb-ux-diary-${pick === 0 ? "a" : "b"} absolute inset-0 z-10 rounded-[3px] bg-slate-900 py-[2px] text-white`}
                    style={pick === 0 ? undefined : { opacity: 0 }}
                  >
                    {day}
                  </span>
                ) : null}
                <span className="relative">{day}</span>
                <span
                  className={`relative size-[2px] rounded-full ${EMPTY.includes(day) ? "" : "bg-blue-500"}`}
                />
              </span>
            );
          })}
        </p>
        {ENTRIES.map(([day, time, text], index) => (
          <p
            key={day}
            className={`thumb-anim thumb-ux-diary-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[40px] h-[30px] rounded-[4px] bg-slate-50 p-[4px] text-[5.5px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            <span className="mr-[3px] text-[5px] text-slate-500">{time}</span>
            {text}
          </p>
        ))}
        <p className="absolute bottom-[8px] left-[8px] text-[5px] text-slate-600">
          7일 중 결제는 모두 밤 9시 이후였어요
        </p>
      </div>
      <ThumbCursor motion="thumb-ux-diary-cursor" />
    </ThumbStage>
  );
}
