import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const APPS = [
  ["사진", "bg-rose-400"],
  ["메모", "bg-amber-400"],
  ["날씨", "bg-sky-400"],
];

/** Same home screen as ZoomTransitionDemo: 메모 grows out of its icon; 홈으로 shrinks it back. */
export function ZoomTransitionThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[54px] h-[104px] w-[68px] overflow-hidden rounded-[12px] bg-gradient-to-b from-indigo-200 to-slate-200">
        <div className="absolute top-[8px] left-[6px] grid grid-cols-3 gap-x-[5px]">
          {APPS.map(([label, tone]) => (
            <span key={label} className="grid justify-items-center gap-[1px] text-[5px]">
              <span className={`size-[14px] rounded-[4px] ${tone}`} />
              {label}
            </span>
          ))}
        </div>
        <section
          className="thumb-anim thumb-zt-screen absolute inset-0 bg-white p-[6px]"
          style={{ transformOrigin: "32px 15px" }}
        >
          <p className="flex items-center justify-between">
            <b className="text-[8px]">메모</b>
            <span className="text-[6px] text-blue-700">홈으로</span>
          </p>
          <p className="mt-[4px] text-[6px] text-slate-700">우유, 달걀, 식빵 사기</p>
        </section>
      </div>
      <ThumbCursor motion="thumb-zt-cursor" />
    </ThumbStage>
  );
}
