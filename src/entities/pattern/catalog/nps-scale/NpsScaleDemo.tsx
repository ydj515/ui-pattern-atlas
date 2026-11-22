import { useState } from "react";
import { NpsScale } from "@/shared/ui/patterns/nps-scale/NpsScale";

export function NpsScaleDemo() {
  const [score, setScore] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const followUp =
    score === null
      ? ""
      : score >= 9
        ? "가장 좋았던 점은 무엇인가요?"
        : score >= 7
          ? "무엇이 더 있으면 좋을까요?"
          : "어떤 점이 아쉬웠나요?";

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      {sent ? (
        <p role="status" className="py-6 text-center text-sm font-semibold text-slate-900">
          의견 고마워요
        </p>
      ) : (
        <>
          <NpsScale
            question="친구에게 추천할 의향이 있나요?"
            value={score}
            onChange={setScore}
            lowLabel="전혀 아니에요"
            highLabel="매우 그래요"
          />
          {score !== null ? (
            <label className="grid gap-1 text-sm text-slate-800">
              {followUp}
              <textarea
                rows={2}
                placeholder="자유롭게 써 주세요"
                className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
          ) : null}
          <button
            type="button"
            disabled={score === null}
            onClick={() => setSent(true)}
            className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white disabled:bg-slate-300"
          >
            보내기
          </button>
        </>
      )}
    </section>
  );
}
