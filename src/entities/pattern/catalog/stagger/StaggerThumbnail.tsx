import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ALERTS = [
  "택배가 도착했어요",
  "새 댓글이 달렸어요",
  "결제가 완료됐어요",
  "친구가 초대했어요",
];

/** Same list as StaggerDemo: 알림 불러오기 → the alerts fade up one after another. */
export function StaggerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[8px] flex gap-[2px] text-[6.5px]">
        <span className="rounded border border-slate-900 px-[3px] py-[1px] font-semibold">
          60ms
        </span>
        <span className="rounded border border-slate-200 px-[3px] py-[1px]">150ms</span>
      </div>
      <span className="absolute top-[3px] left-[100px] grid h-[13px] w-[68px] place-items-center rounded bg-slate-900 text-[7px] text-white">
        알림 불러오기
      </span>
      <div className="absolute top-[22px] left-[8px] h-[86px] w-[160px] rounded-lg bg-slate-100">
        {ALERTS.map((alert, index) => (
          <p
            key={alert}
            className={`thumb-anim thumb-stg-${index} absolute left-[6px] h-[15px] w-[148px] rounded bg-white px-[6px] text-[7px] leading-[15px] shadow-sm`}
            style={{ top: 6 + index * 19 }}
          >
            {alert}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-stg-cursor" />
    </ThumbStage>
  );
}
