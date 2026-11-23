import { useState } from "react";
import { TwoFactorAuth } from "@/shared/ui/patterns/two-factor-auth/TwoFactorAuth";

export function TwoFactorAuthDemo() {
  const [passed, setPassed] = useState(false);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      {passed ? (
        <p role="status" className="text-sm font-medium text-emerald-700">
          인증됐어요. 로그인할게요
        </p>
      ) : (
        <TwoFactorAuth
          placeholders={{ code: "123456", backup: "AB12CD34" }}
          onVerify={(code, kind) => {
            const ok = kind === "code" ? code === "123456" : code.toUpperCase() === "AB12CD34";
            if (ok) setPassed(true);
            return ok;
          }}
          labels={{
            title: "2단계 인증",
            codeHint: "휴대폰으로 받은 6자리 코드를 입력해 주세요.",
            backupHint: "저장해 둔 8자리 백업 코드를 입력해 주세요.",
            code: "인증 코드",
            backup: "백업 코드",
            remember: "이 기기에서 30일 동안 묻지 않기",
            submit: "확인",
            wrong: (left) => `코드가 맞지 않아요. ${left}번 더 시도할 수 있어요`,
            locked: "시도 횟수를 모두 썼어요. 잠시 뒤 다시 시도해 주세요",
            useBackup: "휴대폰을 쓸 수 없나요? 백업 코드로 인증",
            useCode: "휴대폰 코드로 인증",
          }}
        />
      )}
    </section>
  );
}
