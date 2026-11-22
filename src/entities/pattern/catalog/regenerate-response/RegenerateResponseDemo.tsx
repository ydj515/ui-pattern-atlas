import { useState } from "react";
import { RegenerateResponse } from "@/shared/ui/patterns/regenerate-response/RegenerateResponse";

const IDEAS = ["숲속 한 접시", "토요일 아침", "서울숲 키친", "느린 브런치"];
const LABELS = {
  previous: "이전 답변",
  next: "다음 답변",
  regenerate: "다시 생성",
  generating: "새 답변을 만드는 중",
  position: (index: number, total: number) => `${index} / ${total}`,
};

export function RegenerateResponseDemo() {
  const [versions, setVersions] = useState<readonly string[]>([IDEAS[0]!]);
  const [current, setCurrent] = useState(0);
  const [generating, setGenerating] = useState(false);

  function regenerate() {
    setGenerating(true);
    window.setTimeout(() => {
      const next = [...versions, IDEAS[versions.length % IDEAS.length]!];
      setVersions(next);
      setCurrent(next.length - 1);
      setGenerating(false);
    }, 900);
  }

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <p className="max-w-[85%] justify-self-end rounded-2xl rounded-br-sm bg-slate-900 px-3 py-2 text-sm text-white">
        브런치 가게 이름 지어 줘
      </p>
      <RegenerateResponse
        versions={versions}
        current={current}
        onCurrentChange={setCurrent}
        onRegenerate={regenerate}
        generating={generating}
        labels={LABELS}
      />
    </section>
  );
}
