import { RotatingWords } from "@/shared/ui/patterns/rotating-words/RotatingWords";

export function RotatingWordsDemo() {
  return (
    <section className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5">
      <p className="mb-2 text-xs text-slate-600">팀 협업 도구</p>
      <RotatingWords
        lead="함께 만드는"
        words={["디자인", "문서", "발표"]}
        pauseLabel="멈추기"
        playLabel="재생"
      />
    </section>
  );
}
