import { useState } from "react";
import { ModelPicker } from "@/shared/ui/patterns/model-picker/ModelPicker";

const MODELS = [
  { id: "fast", name: "빠른 모델", hint: "짧은 질문에 알맞아요" },
  { id: "deep", name: "깊은 모델", hint: "복잡한 질문에 알맞아요" },
  { id: "image", name: "이미지 모델", hint: "사진을 보고 답해요" },
];

export function ModelPickerDemo() {
  const [model, setModel] = useState("fast");
  const current = MODELS.find((item) => item.id === model)!;
  return (
    <section className="h-60 w-80 rounded-3xl border border-slate-200 bg-slate-50 p-3">
      <header className="flex items-center justify-between rounded-xl bg-white px-2 py-1 shadow-sm">
        <ModelPicker label="모델" models={MODELS} value={model} onChange={setModel} />
        <span className="text-xs text-slate-500">새 대화</span>
      </header>
      <p role="status" className="mt-4 text-center text-sm text-slate-600">
        {current.name}로 답해요
      </p>
    </section>
  );
}
