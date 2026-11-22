import { useState } from "react";
import { ResponseFeedback } from "@/shared/ui/patterns/response-feedback/ResponseFeedback";

const ANSWERS = [
  "서울숲 근처 세 곳을 골라 봤어요.",
  "다시 만든 답변이에요. 예약이 되는 두 곳만 골랐어요.",
];
const LABELS = {
  copy: "복사",
  copied: "복사했어요",
  good: "좋은 답변",
  bad: "아쉬운 답변",
  regenerate: "다시 생성",
};

export function ResponseFeedbackDemo() {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
  const answer = ANSWERS[index % ANSWERS.length]!;

  return (
    <section className="grid w-80 gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <p className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm shadow-sm">{answer}</p>
      <ResponseFeedback
        key={index}
        text={answer}
        labels={LABELS}
        onRate={(rating) =>
          setMessage(
            rating === "good"
              ? "좋은 답변으로 표시했어요"
              : rating === "bad"
                ? "아쉬운 답변으로 표시했어요"
                : "평가를 취소했어요",
          )
        }
        onRegenerate={() => {
          setIndex((value) => value + 1);
          setMessage("새 답변을 만들었어요");
        }}
      />
      <p role="status" className="h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
