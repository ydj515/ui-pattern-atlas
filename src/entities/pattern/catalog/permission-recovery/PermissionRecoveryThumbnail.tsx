import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same screen as PermissionRecoveryDemo: 내 위치로 찾기 is refused → a way back and 주소 직접 입력. */
export function PermissionRecoveryThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[28px] h-[108px] w-[120px] rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="text-[8px] font-bold">내 주변 가게</p>
        <span
          className="thumb-anim thumb-pr-ask mt-[4px] inline-block rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white"
          style={{ opacity: 0 }}
        >
          내 위치로 찾기
        </span>
        <div className="thumb-anim thumb-pr-card absolute inset-x-[8px] top-[20px] rounded-md border border-amber-200 bg-amber-50 p-[5px]">
          <p className="text-[6.5px] font-semibold">위치 권한이 꺼져 있어요</p>
          <p className="mt-[1px] text-[5.5px] text-slate-700">
            내 주변 가게를 찾으려면 위치가 필요해요
          </p>
          <p className="mt-[4px] flex items-center gap-[5px] text-[5.5px]">
            <span className="rounded bg-slate-900 px-[3px] py-[1px] font-semibold text-white">
              다시 허용하기
            </span>
            <span className="underline">주소 직접 입력</span>
          </p>
        </div>
        <span className="thumb-anim thumb-pr-input absolute inset-x-[8px] top-[74px] h-[13px] rounded border border-slate-300 px-[4px] leading-[12px] text-slate-400">
          성수동
        </span>
      </div>
      <ThumbCursor motion="thumb-permission-recovery-cursor" />
    </ThumbStage>
  );
}
