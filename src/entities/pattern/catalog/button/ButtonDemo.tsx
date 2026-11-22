import { useState } from "react";

import { Button } from "@/shared/ui/patterns/button/Button";

export function ButtonDemo() {
  const [result, setResult] = useState("");

  return (
    <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-900">변경 사항을 저장할까요?</p>
      <p className="mt-1 text-xs text-slate-500">저장하지 않으면 지금까지 고친 내용이 사라져요.</p>
      <div className="mt-4 flex items-center justify-end gap-2">
        <Button variant="text" size="sm" onClick={() => setResult("고친 내용을 버렸어요")}>
          버리기
        </Button>
        <Button variant="secondary" size="sm" onClick={() => setResult("나중에 다시 물어볼게요")}>
          나중에
        </Button>
        <Button variant="primary" size="sm" onClick={() => setResult("저장했어요")}>
          저장
        </Button>
      </div>
      <p role="status" className="mt-3 min-h-4 text-xs text-slate-600">
        {result}
      </p>
    </div>
  );
}
