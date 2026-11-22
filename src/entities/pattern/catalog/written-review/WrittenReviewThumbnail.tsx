import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same form as WrittenReviewDemo: 5 stars → write → 후기 올리기 → 후기를 올렸어요. */
export function WrittenReviewThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[12px] h-[108px] w-[152px] rounded-[12px] border border-slate-200 p-[7px] text-[6px]">
        <p className="text-[7.5px] font-bold">린넨 셔츠 후기</p>
        <div className="thumb-anim thumb-wr-form">
          <p className="mt-[3px]">별점</p>
          <p className="flex gap-[1px] text-[12px] leading-[12px]">
            {[0, 1, 2, 3, 4].map((index) => (
              <span key={index} className="relative text-slate-200">
                ★
                <span className="thumb-anim thumb-wr-stars absolute inset-0 text-amber-400">★</span>
              </span>
            ))}
          </p>
          <p className="mt-[3px]">후기</p>
          <span className="relative mt-[1px] block h-[20px] rounded border border-slate-300 px-[3px] py-[2px]">
            <span
              className="thumb-anim thumb-wr-hint absolute text-slate-400"
              style={{ opacity: 0 }}
            >
              핏이 딱 좋고 색도 예뻐요
            </span>
            <span className="thumb-anim thumb-wr-text absolute">핏이 딱 좋고 색도 예뻐요</span>
          </span>
          <p className="mt-[1px] flex justify-between text-[5px] text-slate-500">
            <span>10자 이상 써 주세요</span>
            <span className="grid tabular-nums">
              <span
                className="thumb-anim thumb-wr-hint col-start-1 row-start-1"
                style={{ opacity: 0 }}
              >
                0/300
              </span>
              <span className="thumb-anim thumb-wr-text col-start-1 row-start-1">14/300</span>
            </span>
          </p>
          <span className="mt-[3px] block rounded bg-slate-900 py-[2px] text-center font-semibold text-white">
            후기 올리기
          </span>
        </div>
        <div
          className="thumb-anim thumb-wr-done absolute inset-x-[7px] top-[22px] grid gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[7px] font-semibold">후기를 올렸어요</p>
          <p className="rounded bg-slate-50 px-[4px] py-[2px]">
            <span className="text-amber-500">★★★★★</span> 핏이 딱 좋고 색도 예뻐요
          </p>
          <span className="w-fit rounded border border-slate-200 px-[4px]">처음부터</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-wr-cursor" />
    </ThumbStage>
  );
}
