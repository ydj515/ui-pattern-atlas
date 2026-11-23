import { useState } from "react";

const QUESTIONS = {
  leading: {
    label: "유도 질문",
    question: "장바구니 버튼, 찾기 쉬우셨죠?",
    answer: "네, 괜찮았어요.",
    note: "답을 정해 둔 질문에는 맞춰 주는 답이 와요",
  },
  open: {
    label: "열린 질문",
    question: "지난번 장을 볼 때 어떻게 하셨는지 처음부터 말씀해 주세요.",
    answer: "앱에서 담다가 배송비를 못 찾아서 마트 웹사이트로 다시 갔어요.",
    note: "지난 행동을 물으면 이유와 막힌 곳이 나와요",
  },
};

export function UserInterviewDemo() {
  const [kind, setKind] = useState<keyof typeof QUESTIONS>("leading");
  const current = QUESTIONS[kind];
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">질문 방식</legend>
        {(Object.keys(QUESTIONS) as (keyof typeof QUESTIONS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="interview-question"
              className="sr-only"
              checked={kind === id}
              onChange={() => setKind(id)}
            />
            {QUESTIONS[id].label}
          </label>
        ))}
      </fieldset>
      <div className="grid gap-2 text-sm">
        <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-slate-800">
          <span className="block text-xs text-slate-500">진행자</span>
          {current.question}
        </p>
        <p className="max-w-[85%] justify-self-end rounded-2xl rounded-tr-sm bg-blue-50 px-3 py-2 text-slate-800">
          <span className="block text-xs text-slate-500">참가자</span>
          {current.answer}
        </p>
      </div>
      <p role="status" className="text-xs text-slate-600">
        {current.note}
      </p>
    </section>
  );
}
