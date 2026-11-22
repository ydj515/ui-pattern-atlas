import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as PushNotificationDemo: 미리 보기 → the notification slides in, then leaves. */
export function PushNotificationThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute inset-0 bg-slate-100" />
      <div className="thumb-anim thumb-push-banner absolute top-[6px] left-[22px] h-[40px] w-[132px] rounded-lg bg-white shadow-md ring-1 ring-slate-900/5">
        <p className="absolute top-[5px] left-[8px] flex items-center gap-[3px] text-[6px] font-medium text-slate-500">
          <span className="size-[6px] rounded-[1.5px] bg-slate-900" />
          쇼핑앱
        </p>
        <p className="absolute top-[5px] right-[8px] text-[6px] text-slate-500">지금</p>
        <p className="absolute top-[14px] left-[8px] text-[7.5px] font-semibold">
          배송이 시작됐어요
        </p>
        <p className="absolute top-[25px] left-[8px] text-[6.5px] text-slate-600">
          주문하신 상품이 출발했어요
        </p>
      </div>

      <div className="absolute top-[52px] left-[22px] h-[54px] w-[132px] rounded-lg border border-slate-200 bg-white">
        <p className="absolute top-[6px] left-[8px] text-[7.5px] font-semibold">주문 상태 알림</p>
        <p className="absolute top-[17px] left-[8px] text-[6px] text-slate-500">
          배송이 시작되면 알려 드릴게요.
        </p>
        <span className="absolute top-[32px] left-[8px] grid h-[14px] w-[56px] place-items-center rounded border border-slate-300 text-[6.5px] font-medium text-slate-700">
          미리 보기
        </span>
        <span className="absolute top-[32px] left-[68px] grid h-[14px] w-[56px] place-items-center rounded bg-slate-900 text-[6.5px] font-semibold text-white">
          알림 받기
        </span>
      </div>
      <ThumbCursor motion="thumb-push-cursor" />
    </ThumbStage>
  );
}
