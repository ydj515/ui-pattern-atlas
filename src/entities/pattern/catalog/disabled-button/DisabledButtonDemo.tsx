import { useState } from "react";

import { ReasonButton } from "@/shared/ui/patterns/disabled-button/ReasonButton";

export function DisabledButtonDemo() {
  const [agreed, setAgreed] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <div className="w-full max-w-xs space-y-3">
      <label className="flex items-center gap-2 text-sm text-slate-800">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(event) => {
            setAgreed(event.target.checked);
            setDone(false);
          }}
        />
        이용약관에 동의해요
      </label>
      <ReasonButton
        disabledReason={agreed ? undefined : "약관에 동의해야 가입할 수 있어요"}
        onClick={() => setDone(true)}
      >
        가입하기
      </ReasonButton>
      <p role="status" className="min-h-4 text-center text-xs text-emerald-700">
        {done ? "가입했어요" : ""}
      </p>
    </div>
  );
}
