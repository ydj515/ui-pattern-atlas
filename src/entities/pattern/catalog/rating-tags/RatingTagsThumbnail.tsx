import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same ride as RatingTagsDemo: 5 stars → praise chips appear → 친절해요. */
export function RatingTagsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[12px] h-[100px] w-[152px] rounded-[12px] border border-slate-200 p-[8px] text-[6px]">
        <p className="text-[7.5px] font-bold">기사님은 어떠셨나요?</p>
        <p className="mt-[4px] flex gap-[2px] text-[14px] leading-[14px]">
          {[0, 1, 2, 3, 4].map((index) => (
            <span key={index} className="relative text-slate-200">
              ★<span className="thumb-anim thumb-rt-on absolute inset-0 text-amber-400">★</span>
            </span>
          ))}
        </p>
        <div className="thumb-anim thumb-rt-on">
          <p className="mt-[5px] text-slate-700">좋았던 점을 골라 주세요</p>
          <p className="mt-[3px] flex flex-wrap gap-[2px]">
            <span className="relative rounded-full border border-slate-200 px-[4px] py-[1px]">
              친절해요
              <span className="thumb-anim thumb-rt-pick absolute -inset-px rounded-full border border-blue-600 bg-blue-50 px-[4px] py-[1px] text-blue-800">
                ✓ 친절해요
              </span>
            </span>
            {["빨라요", "안전 운전", "차가 깨끗해요"].map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 px-[4px] py-[1px]">
                {tag}
              </span>
            ))}
          </p>
        </div>
      </div>
      <ThumbCursor motion="thumb-rt-cursor" />
    </ThumbStage>
  );
}
