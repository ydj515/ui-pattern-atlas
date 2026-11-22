import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TONES = [
  "bg-sky-200",
  "bg-amber-200",
  "bg-rose-200",
  "bg-emerald-200",
  "bg-violet-200",
  "bg-orange-200",
];

/** Same picker as LimitedAccessDemo: 사진 3장만 → 선택 변경 → add one → 완료 → 사진 4장만. */
export function LimitedAccessThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[28px] h-[108px] w-[120px] rounded-[12px] border border-slate-200 p-[8px] text-[6px]">
        <p className="text-[8px] font-bold">사진 고르기</p>
        <div className="thumb-anim thumb-la-view absolute inset-x-[8px] top-[18px]">
          <p className="flex h-[12px] items-center justify-between rounded bg-slate-100 px-[4px]">
            <span className="grid">
              <span
                className="thumb-anim thumb-la-three col-start-1 row-start-1"
                style={{ opacity: 0 }}
              >
                사진 3장만 볼 수 있어요
              </span>
              <span className="thumb-anim thumb-la-four col-start-1 row-start-1">
                사진 4장만 볼 수 있어요
              </span>
            </span>
            <b className="text-blue-700">선택 변경</b>
          </p>
          <div className="mt-[4px] grid grid-cols-3 gap-[2px]">
            {TONES.slice(0, 4).map((tone, index) => (
              <span
                key={tone}
                className={`h-[22px] rounded-[3px] ${tone} ${index === 3 ? "thumb-anim thumb-la-four" : ""}`}
              />
            ))}
          </div>
        </div>
        <div
          className="thumb-anim thumb-la-pick absolute inset-x-[8px] top-[18px]"
          style={{ opacity: 0 }}
        >
          <p className="text-slate-600">이 앱에서 쓸 사진</p>
          <div className="mt-[3px] grid grid-cols-3 gap-[2px]">
            {TONES.map((tone, index) => (
              <span key={tone} className={`relative h-[22px] rounded-[3px] ${tone}`}>
                <span className="absolute top-[2px] right-[2px] size-[5px] rounded-[1px] border border-slate-500 bg-white">
                  {index < 3 ? <span className="absolute inset-0 bg-blue-600" /> : null}
                  {index === 3 ? (
                    <span className="thumb-anim thumb-la-tick absolute inset-0 bg-blue-600" />
                  ) : null}
                </span>
              </span>
            ))}
          </div>
          <span className="mt-[4px] block rounded bg-slate-900 py-[2px] text-center font-semibold text-white">
            완료
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-la-cursor" />
    </ThumbStage>
  );
}
