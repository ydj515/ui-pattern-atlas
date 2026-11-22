import { useState } from "react";
import { EditPrompt } from "@/shared/ui/patterns/edit-prompt/EditPrompt";

const LABELS = { edit: "수정", cancel: "취소", send: "보내기", field: "질문 수정" };

export function EditPromptDemo() {
  const [question, setQuestion] = useState("주말 브런치 추천해 줘");
  const [answer, setAnswer] = useState("서울숲 근처 세 곳을 골라 봤어요.");
  const [edited, setEdited] = useState(false);

  return (
    <section className="flex w-80 flex-col gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <EditPrompt
        key={question}
        text={question}
        labels={LABELS}
        onSubmit={(text) => {
          setQuestion(text);
          setAnswer("아이와 가기 좋은 곳으로 다시 골랐어요.");
          setEdited(true);
        }}
      />
      <p role="status" className="text-center text-[11px] text-slate-500">
        {edited ? "이 질문부터 새로 답했어요" : ""}
      </p>
      <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm shadow-sm">
        {answer}
      </p>
    </section>
  );
}
