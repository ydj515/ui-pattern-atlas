import { useState } from "react";
import { EmailVerification } from "@/shared/ui/patterns/email-verification/EmailVerification";

export function EmailVerificationDemo() {
  const [note, setNote] = useState("");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <EmailVerification
        email="haneul@example.com"
        cooldown={30}
        onResend={() => setNote("")}
        onChangeEmail={() => setNote("이메일 입력 화면으로 돌아가요")}
        labels={{
          title: "메일함을 확인해 주세요",
          sent: (email) => `${email} 주소로 인증 메일을 보냈어요.`,
          spam: "몇 분이 지나도 없으면 스팸함도 확인해 주세요.",
          resend: "메일 다시 보내기",
          wait: (seconds) => `${seconds}초 뒤에 다시 보낼 수 있어요`,
          resent: "메일을 다시 보냈어요",
          change: "이메일 주소 바꾸기",
        }}
      />
      <p className="min-h-4 text-xs text-slate-600">{note}</p>
    </section>
  );
}
