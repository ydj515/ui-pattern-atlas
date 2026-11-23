import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const VERSIONS = [
  ["장바구니 버튼, 찾기 쉬우셨죠?", "네, 괜찮았어요.", "답을 정해 둔 질문에는 맞춰 주는 답이 와요"],
  [
    "지난번 장을 볼 때 어떻게 하셨는지 처음부터 말씀해 주세요.",
    "앱에서 담다가 배송비를 못 찾아서 마트 웹사이트로 다시 갔어요.",
    "지난 행동을 물으면 이유와 막힌 곳이 나와요",
  ],
];

/** Same interview as UserInterviewDemo: 유도 질문 gets a polite yes; 열린 질문 gets what happened and why. */
export function UserInterviewThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-ux-interview-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">유도 질문</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">열린 질문</span>
        </p>
        {VERSIONS.map(([question, answer, note], index) => (
          <div
            key={note}
            className={`thumb-anim thumb-ux-interview-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[24px] grid gap-[3px] text-[5.5px] leading-[7px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            <p className="max-w-[85%] rounded-[6px] rounded-tl-[2px] bg-slate-100 px-[4px] py-[3px]">
              <span className="block text-[4.5px] text-slate-500">진행자</span>
              {question}
            </p>
            <p className="max-w-[85%] justify-self-end rounded-[6px] rounded-tr-[2px] bg-blue-50 px-[4px] py-[3px]">
              <span className="block text-[4.5px] text-slate-500">참가자</span>
              {answer}
            </p>
            <p className="text-[5px] text-slate-600">{note}</p>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-ux-interview-cursor" />
    </ThumbStage>
  );
}
