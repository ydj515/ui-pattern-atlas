import { useState } from "react";

import { SplitButton } from "@/shared/ui/patterns/split-button/SplitButton";

const RESULTS: Record<string, string> = {
  save: "저장했어요",
  "save-as": "사본을 만들었어요",
  pdf: "PDF로 내보냈어요",
};

export function SplitButtonDemo() {
  const [result, setResult] = useState("");

  return (
    <div className="flex flex-col items-center gap-3 pb-24">
      <SplitButton
        primary={{ id: "save", label: "저장" }}
        actions={[
          { id: "save-as", label: "사본으로 저장" },
          { id: "pdf", label: "PDF로 내보내기" },
        ]}
        menuLabel="저장 옵션"
        onAction={(id) => setResult(RESULTS[id] ?? "")}
      />
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {result}
      </p>
    </div>
  );
}
