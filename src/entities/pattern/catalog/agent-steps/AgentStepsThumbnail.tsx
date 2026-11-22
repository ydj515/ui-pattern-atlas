import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STEPS = [
  ["자료 찾기", "매출 문서 3개를 찾았어요"],
  ["표로 정리", "요일별 매출 표를 만들었어요"],
  ["요약 쓰기", "주말 매출이 가장 높아요"],
];

/** Same task as AgentStepsDemo: each step spins, then checks off with its result → 작업을 마쳤어요. */
export function AgentStepsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 p-[6px] text-[6.5px]">
        <p className="ml-auto w-fit rounded-[8px] rounded-br-[2px] bg-slate-900 px-[5px] py-[2px] text-white">
          지난주 매출을 표로 정리해 줘
        </p>
        <ol className="mt-[5px] grid gap-[3px]">
          {STEPS.map(([title, detail], index) => (
            <li key={title} className="flex gap-[5px]">
              <span className="relative size-[9px] shrink-0">
                <span className="absolute inset-0 rounded-full border border-slate-200" />
                <span
                  className={`thumb-anim thumb-agent-run${index} absolute inset-0`}
                  style={{ opacity: 0 }}
                >
                  <span className="thumb-anim thumb-agent-spin block size-full rounded-full border border-blue-200 border-t-blue-600" />
                </span>
                <span
                  className={`thumb-anim thumb-agent-done${index} absolute inset-0 grid place-items-center rounded-full bg-emerald-500 text-[5px] text-white`}
                >
                  ✓
                </span>
              </span>
              <span>
                <b className="block font-medium">{title}</b>
                <span
                  className={`thumb-anim thumb-agent-done${index} block text-[5.5px] text-slate-500`}
                >
                  {detail}
                </span>
              </span>
            </li>
          ))}
        </ol>
        <p className="absolute inset-x-[6px] bottom-[6px] flex items-center justify-between text-[6px]">
          <span className="thumb-anim thumb-agent-done2 text-emerald-700">작업을 마쳤어요</span>
          <span className="rounded border border-slate-200 px-[3px]">다시 실행</span>
        </p>
      </div>
      <ThumbCursor motion="thumb-agent-cursor" />
    </ThumbStage>
  );
}
