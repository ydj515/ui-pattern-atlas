import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same mission as CompletionStampDemo: 한 잔 더 → 8/8잔 → the 완료 stamp lands on the card. */
export function CompletionStampThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[28px] h-[108px] w-[120px] rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="text-[8px] font-bold">물 8잔 마시기</p>
        <p className="mt-[2px] grid text-slate-600 tabular-nums">
          <span
            className="thumb-anim thumb-cs-before col-start-1 row-start-1"
            style={{ opacity: 0 }}
          >
            7/8잔
          </span>
          <span className="thumb-anim thumb-cs-after col-start-1 row-start-1">8/8잔</span>
        </p>
        <p className="mt-[5px] flex gap-[3px]">
          {Array.from({ length: 8 }, (_, index) => (
            <span
              key={index}
              className={`relative h-[12px] w-[8px] rounded-b-[2px] border ${index < 7 ? "border-sky-500 bg-sky-200" : "border-slate-200"}`}
            >
              {index === 7 ? (
                <span className="thumb-anim thumb-cs-after absolute -inset-px rounded-b-[2px] border border-sky-500 bg-sky-200" />
              ) : null}
            </span>
          ))}
        </p>
        <p className="thumb-anim thumb-cs-after mt-[6px] font-semibold text-rose-700">
          미션을 끝냈어요
        </p>
        <span className="absolute inset-x-[8px] bottom-[8px] grid h-[13px] rounded bg-slate-900 font-semibold text-white">
          <span
            className="thumb-anim thumb-cs-before col-start-1 row-start-1 place-self-center"
            style={{ opacity: 0 }}
          >
            한 잔 더
          </span>
          <span className="thumb-anim thumb-cs-after col-start-1 row-start-1 place-self-center">
            처음부터
          </span>
        </span>
        <span className="thumb-anim thumb-cs-stamp absolute top-[6px] right-[6px] grid size-[28px] -rotate-12 place-items-center rounded-full border-2 border-rose-600 text-[6.5px] font-black tracking-widest text-rose-600">
          <span className="grid size-[22px] place-items-center rounded-full border border-rose-600">
            완료
          </span>
        </span>
      </div>
      <ThumbCursor motion="thumb-cs-cursor" />
    </ThumbStage>
  );
}
