import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same settings as ChevronDemo: › on 알림 moves forward; ‹ 설정 leads back. */
export function ChevronThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-chev-list absolute inset-0 bg-white"
          style={{ opacity: 0 }}
        >
          <p className="border-b border-slate-100 px-[6px] py-[4px] font-bold">설정</p>
          {["알림", "개인정보", "화면"].map((row) => (
            <p
              key={row}
              className="flex justify-between border-b border-slate-100 px-[6px] py-[4px]"
            >
              {row}
              <span className="text-slate-400">›</span>
            </p>
          ))}
        </div>
        <div className="thumb-anim thumb-chev-detail absolute inset-0 bg-white">
          <p className="flex items-center gap-[4px] border-b border-slate-100 px-[4px] py-[4px]">
            <span className="text-blue-700">‹ 설정</span>
            <b>알림</b>
          </p>
          <p className="p-[6px] text-slate-600">알림 설정 화면</p>
        </div>
      </div>
      <ThumbCursor motion="thumb-chev-cursor" />
    </ThumbStage>
  );
}
