import { useState } from "react";

import { OtpInput } from "@/shared/ui/patterns/otp-input/OtpInput";

const DEMO_CODE = "123456";

export function OtpInputDemo() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<"ok" | "wrong" | null>(null);

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <p className="text-sm text-slate-700">문자로 받은 6자리 코드를 입력해 주세요</p>
      <OtpInput
        label="인증번호"
        value={code}
        invalid={result === "wrong"}
        onChange={(next) => {
          setCode(next);
          setResult(null);
        }}
        onComplete={(value) => setResult(value === DEMO_CODE ? "ok" : "wrong")}
      />
      <p
        role="status"
        className={`min-h-5 text-sm ${result === "wrong" ? "text-rose-600" : "text-emerald-700"}`}
      >
        {result === "ok" ? "인증됐어요" : result === "wrong" ? "코드가 맞지 않아요" : ""}
      </p>
      <p className="text-xs text-slate-400">예시 코드: {DEMO_CODE}</p>
    </div>
  );
}
