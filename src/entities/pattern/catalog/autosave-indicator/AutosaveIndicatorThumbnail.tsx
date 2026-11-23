import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same memo as AutosaveIndicatorDemo: typing shows 저장 중… and then 방금 저장됨, no save button. */
export function AutosaveIndicatorThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <p className="flex items-center justify-between">
          <b className="text-[7.5px]">주말 계획</b>
          <span className="grid justify-items-end text-[5px] text-slate-500">
            <span className="thumb-anim thumb-ra-as-saved col-start-1 row-start-1 flex items-center gap-[2px]">
              <span className="size-[3px] rounded-full bg-emerald-500" />
              방금 저장됨
            </span>
            <span
              className="thumb-anim thumb-ra-as-saving col-start-1 row-start-1 flex items-center gap-[2px]"
              style={HIDDEN}
            >
              <span className="size-[3px] rounded-full bg-amber-400" />
              저장 중…
            </span>
          </span>
        </p>
        <p className="mt-[4px] h-[40px] rounded-[4px] border border-slate-300 px-[4px] py-[3px] text-[6.5px]">
          토요일 오후
          <span className="thumb-anim thumb-ra-as-w1" style={HIDDEN}>
            {" "}
            서울숲
          </span>
          <span className="thumb-anim thumb-ra-as-w2" style={HIDDEN}>
            {" "}
            산책
          </span>
        </p>
        <p className="mt-[4px] flex items-center gap-[3px] text-[5.5px] text-slate-600">
          <span className="size-[5px] rounded-[1px] border border-slate-400" />
          인터넷 연결 끊어 보기
        </p>
      </div>
      <ThumbCursor motion="thumb-ra-as-cursor" />
    </ThumbStage>
  );
}
