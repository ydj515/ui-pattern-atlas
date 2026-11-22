import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same page as MaintenancePageDemo (02:00–06:00, now 04:30): 끝나면 알림 받기 → confirmed. */
export function MaintenancePageThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[20px] h-[98px] w-[136px] rounded-md border border-slate-200 text-center">
        <p className="absolute inset-x-0 top-[10px] text-[8.5px] font-semibold">
          서비스 점검 중이에요
        </p>
        <p className="absolute inset-x-0 top-[24px] text-[6.5px] text-slate-600">
          11월 23일 02:00–06:00
        </p>
        <span className="absolute top-[38px] left-[28px] h-[3px] w-[80px] overflow-hidden rounded-full bg-slate-100">
          <span className="absolute inset-y-0 left-0 w-[50px] bg-amber-500" />
        </span>
        <p className="absolute inset-x-0 top-[46px] text-[6px] text-slate-500">
          약 1시간 30분 남았어요
        </p>
        <span className="thumb-anim thumb-mt-idle absolute top-[62px] left-[38px] grid h-[14px] w-[60px] place-items-center rounded border border-slate-300 text-[6px] font-medium opacity-0">
          끝나면 알림 받기
        </span>
        <span className="thumb-anim thumb-mt-done absolute inset-x-0 top-[62px] grid h-[14px] place-items-center text-[6px] font-medium text-emerald-700">
          끝나면 메일로 알려 드릴게요
        </span>
      </div>
      <ThumbCursor motion="thumb-mt-cursor" />
    </ThumbStage>
  );
}
