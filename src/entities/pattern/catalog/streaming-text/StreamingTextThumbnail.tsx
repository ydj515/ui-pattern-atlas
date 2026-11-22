import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const LINES = [
  "다음 주 출시 일정을 확정했어요.",
  "디자인 검토는 수요일에 해요.",
  "남은 버그는 다섯 개예요.",
];

/** Same summary as StreamingTextDemo: 답변 받기 → the answer writes itself line by line. */
export function StreamingTextThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 bg-slate-50 p-[6px] text-[6.5px]">
        <p className="ml-auto w-fit rounded-[8px] rounded-br-[2px] bg-slate-900 px-[5px] py-[2px] text-white">
          회의록을 세 줄로 요약해 줘
        </p>
        <div className="relative mt-[5px] h-[44px] rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[3px] shadow-sm">
          <p
            className="thumb-anim thumb-stream-empty absolute text-slate-400"
            style={{ opacity: 0 }}
          >
            아직 답변이 없어요
          </p>
          {LINES.map((line, index) => (
            <p key={line} className="relative w-fit leading-[11px]">
              {line}
              <span
                className={`thumb-anim thumb-stream-l${index} absolute -inset-y-px -right-[2px] left-0 origin-right bg-white`}
                style={{ transform: "scaleX(0)" }}
              />
            </p>
          ))}
        </div>
        <span className="mt-[6px] grid w-fit rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
          <span className="thumb-anim thumb-stream-get col-start-1 row-start-1">답변 받기</span>
          <span
            className="thumb-anim thumb-stream-stop col-start-1 row-start-1"
            style={{ opacity: 0 }}
          >
            멈추기
          </span>
        </span>
      </div>
      <ThumbCursor motion="thumb-stream-cursor" />
    </ThumbStage>
  );
}
