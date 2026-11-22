import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ALERTS = [
  "택배가 도착했어요",
  "새 댓글이 달렸어요",
  "결제가 완료됐어요",
  "친구가 초대했어요",
  "이번 주 리포트",
];

/** Same list as ScrollBounceDemo: pulling past the top stretches the list, then it springs back. */
export function ScrollBounceThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[5px] left-[34px] font-semibold">알림</p>
      <div className="absolute top-[18px] left-[34px] h-[88px] w-[108px] overflow-hidden rounded-md border border-slate-200 bg-slate-100">
        <ul
          className="thumb-anim thumb-sb-list bg-white text-[7px]"
          style={{ transform: "translateY(13px)" }}
        >
          {ALERTS.map((alert) => (
            <li
              key={alert}
              className="flex h-[18px] items-center border-b border-slate-100 px-[6px]"
            >
              {alert}
            </li>
          ))}
        </ul>
      </div>
      <ThumbCursor motion="thumb-scroll-bounce-cursor" />
    </ThumbStage>
  );
}
