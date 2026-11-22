import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same screen as PermissionPrimingDemo: after 주문 완료, the reasons come first → 알림 켜기. */
export function PermissionPrimingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[44px] h-[108px] w-[88px] rounded-[12px] border border-slate-200 bg-slate-50 p-[4px] text-center">
        <p className="text-[5.5px] text-slate-600">주문 완료</p>
        <div className="thumb-anim thumb-pp-ask absolute inset-x-[4px] top-[12px] h-[92px] rounded-lg bg-white p-[5px]">
          <span className="mx-auto grid size-[14px] place-items-center rounded-[4px] bg-blue-50 text-blue-700">
            <svg viewBox="0 0 24 24" className="size-[9px] fill-none stroke-current stroke-2">
              <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2ZM10 20a2 2 0 0 0 4 0" />
            </svg>
          </span>
          <p className="mt-[4px] text-[7px] font-bold">배송 알림을 받아 보세요</p>
          <p className="mt-[3px] text-left text-[5.5px] leading-[8px] text-slate-700">
            ✓ 출발과 도착을 바로 알려 드려요
          </p>
          <p className="text-left text-[5.5px] leading-[8px] text-slate-700">
            ✓ 광고는 보내지 않아요
          </p>
          <span className="mt-[5px] block rounded bg-slate-900 py-[2px] text-[6px] font-semibold text-white">
            알림 켜기
          </span>
          <span className="mt-[2px] block py-[2px] text-[6px] text-slate-600">나중에</span>
        </div>
        <div
          className="thumb-anim thumb-pp-done absolute inset-x-[4px] top-[40px] grid justify-items-center gap-[5px] rounded-lg bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[6.5px]">시스템 알림 요청으로 이어져요</p>
          <span className="rounded border border-slate-200 px-[4px] text-[6px]">다시 보기</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-pp-cursor" />
    </ThumbStage>
  );
}
