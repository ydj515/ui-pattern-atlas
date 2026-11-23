import { useState } from "react";
import { SignupForm } from "@/shared/ui/patterns/signup-form/SignupForm";

export function SignupFormDemo() {
  const [done, setDone] = useState(false);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">회원가입</h3>
      <SignupForm
        rules={[
          { label: "8자 이상", test: (value) => value.length >= 8 },
          { label: "숫자 포함", test: (value) => /\d/.test(value) },
        ]}
        isEmailTaken={(email) => email === "haneul@example.com"}
        onSubmit={() => setDone(true)}
        labels={{
          name: "이름",
          email: "이메일",
          password: "비밀번호",
          taken: "이미 가입된 이메일이에요",
          met: "충족",
          unmet: "미충족",
          submit: "가입하기",
          fix: "표시된 항목을 고쳐 주세요",
        }}
      />
      <p role="status" className="min-h-4 text-xs text-emerald-700">
        {done ? "가입을 마쳤어요. 인증 메일을 확인해 주세요" : ""}
      </p>
    </section>
  );
}
