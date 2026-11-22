import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same screens as PageTransitionDemo: 알림 pushes in from the right; ‹ 설정 comes back. */
export function PageTransitionThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[8px] flex h-[12px] w-[160px] gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="flex-1 rounded bg-white text-center leading-[10px] font-semibold">
          푸시
        </span>
        <span className="flex-1 text-center leading-[10px]">페이드</span>
        <span className="flex-1 text-center leading-[10px]">모달</span>
      </div>
      <div className="absolute top-[20px] left-[8px] h-[88px] w-[160px] overflow-hidden rounded-lg border border-slate-200 text-[7px]">
        <div className="thumb-anim thumb-pt-list absolute inset-0 bg-white" style={{ opacity: 0 }}>
          <p className="h-[16px] border-b border-slate-100 px-[8px] leading-[16px] font-semibold">
            설정
          </p>
          {["알림", "개인정보", "화면"].map((row) => (
            <p
              key={row}
              className="flex h-[16px] justify-between border-b border-slate-100 px-[8px] leading-[16px]"
            >
              {row}
              <span className="text-slate-400">›</span>
            </p>
          ))}
        </div>
        <div className="thumb-anim thumb-pt-detail absolute inset-0 bg-slate-50">
          <p className="flex h-[16px] items-center gap-[6px] border-b border-slate-100 bg-white px-[4px]">
            <span className="text-blue-700">‹ 설정</span>
            <b>알림</b>
          </p>
          <p className="p-[8px] text-slate-700">알림 설정 화면</p>
        </div>
      </div>
      <ThumbCursor motion="thumb-pt-cursor" />
    </ThumbStage>
  );
}
