import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as BackNavigationDemo: open 공지 7 → ← 목록 → the list is where it was, focus on 공지 7. */
export function BackNavigationThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[40px] h-[104px] w-[96px] overflow-hidden rounded-md border border-slate-200">
        <div className="thumb-anim thumb-bn-list absolute inset-0">
          <div className="text-[6px]" style={{ transform: "translateY(-52px)" }}>
            {Array.from({ length: 20 }, (_, index) => (
              <p
                key={index}
                className="relative h-[13px] border-b border-slate-100 px-[6px] leading-[13px] text-slate-700"
              >
                {index === 6 ? (
                  <span className="thumb-anim thumb-bn-focus absolute inset-0 bg-blue-50" />
                ) : null}
                <span className="relative">공지 {index + 1}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="thumb-anim thumb-bn-detail absolute inset-0 bg-white px-[6px] pt-[6px] opacity-0">
          <p className="text-[6px] font-medium text-slate-700">← 목록</p>
          <p className="mt-[6px] text-[8px] font-semibold">공지 7</p>
          <p className="mt-[4px] text-[5.5px] leading-[8px] text-slate-600">
            목록으로 돌아가면 보던 위치에서 이어 볼 수 있어요.
          </p>
        </div>
      </div>
      <ThumbCursor motion="thumb-bn-cursor" />
    </ThumbStage>
  );
}
