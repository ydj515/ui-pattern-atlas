import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/**
 * Same rules as SwitchDemo: turn 혜택 알림 on → turn 푸시 알림 off (혜택 알림 is then
 * disabled) → turn 푸시 알림 back on (혜택 알림 returns to on).
 */
export function SwitchThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[14px] left-[14px] font-semibold">푸시 알림</p>
      <p className="absolute top-[26px] left-[14px] text-[7px] text-slate-500">
        주문과 배송 소식을 알려드려요.
      </p>
      <div className="absolute top-[18px] left-[136px] h-[16px] w-[28px] overflow-hidden rounded-full bg-slate-900">
        <div className="thumb-anim thumb-switch-off1 absolute inset-0 bg-slate-300" />
        <div className="thumb-anim thumb-switch-knob1 absolute top-[2px] left-[2px] size-[12px] rounded-full bg-white shadow-sm" />
      </div>

      <div className="absolute inset-x-[14px] top-[46px] h-px bg-slate-100" />

      <p className="absolute top-[54px] left-[14px] font-semibold">혜택 알림</p>
      <p className="thumb-anim thumb-switch-hint-on absolute top-[66px] left-[14px] text-[7px] text-slate-500">
        쿠폰과 이벤트 소식을 받아요.
      </p>
      <p className="thumb-anim thumb-switch-hint-off absolute top-[66px] left-[14px] text-[7px] text-slate-500">
        푸시 알림을 먼저 켜 주세요.
      </p>
      <div className="thumb-anim thumb-switch-disabled2 absolute top-[58px] left-[136px] h-[16px] w-[28px] overflow-hidden rounded-full bg-slate-300">
        <div className="thumb-anim thumb-switch-on2 absolute inset-0 bg-slate-900" />
        <div className="thumb-anim thumb-switch-knob2 absolute top-[2px] left-[2px] size-[12px] rounded-full bg-white shadow-sm" />
      </div>
      <ThumbCursor motion="thumb-switch-cursor" />
    </ThumbStage>
  );
}
