import { useState } from "react";
import { ResumePrompt } from "@/shared/ui/patterns/resume-prompt/ResumePrompt";

export function ResumePromptDemo() {
  const [message, setMessage] = useState("");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5">
      {message ? null : (
        <ResumePrompt
          title="서울 야경 사진 강의"
          position="3강 12:40"
          progress={0.4}
          onResume={() => setMessage("3강 12:40부터 재생해요")}
          onRestart={() => setMessage("1강 처음부터 재생해요")}
          onDismiss={() => setMessage("홈 화면으로 돌아가요")}
          labels={{
            heading: "다시 오셨네요",
            stopped: (position) => `${position}에서 멈췄어요`,
            resume: "이어서 보기",
            restart: "처음부터",
            dismiss: "닫기",
          }}
        />
      )}
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
