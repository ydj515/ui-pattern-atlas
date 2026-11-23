import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as ChoiceOverloadDemo: 잼 24가지 → 6가지와 추천. */
export function ChoiceOverloadThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-choice-overload-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">잼 24가지</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-choice-overload-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">6가지와 추천</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-choice-overload-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b>잼 고르기</b>
          <span className="mt-[3px] grid grid-cols-8 gap-[2px]">
            {Array.from({ length: 24 }, (_, index) => (
              <span
                key={index}
                className="size-[9px] rounded-full"
                style={{ background: `hsl(${index * 15} 70% 70%)` }}
              />
            ))}
          </span>
        </div>
        <div className="thumb-anim thumb-dk-choice-overload-b absolute inset-0 bg-white p-[6px]">
          <b>잼 고르기</b>
          <span className="mt-[3px] grid grid-cols-6 gap-[3px]">
            {Array.from({ length: 6 }, (_, index) => (
              <span
                key={index}
                className="size-[12px] rounded-full"
                style={{ background: `hsl(${index * 60} 70% 70%)` }}
              />
            ))}
          </span>
          <span className="mt-[4px] block text-[5.5px] text-slate-600">
            처음이라면 딸기잼을 추천해요
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-choice-overload-cursor" />
    </ThumbStage>
  );
}
