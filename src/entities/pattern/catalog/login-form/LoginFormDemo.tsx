import { useState } from "react";
import { LoginForm } from "@/shared/ui/patterns/login-form/LoginForm";

export function LoginFormDemo() {
  const [message, setMessage] = useState("");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">로그인</h3>
      <LoginForm
        emailPlaceholder="haneul@example.com"
        passwordPlaceholder="linen2024"
        labels={{
          email: "이메일",
          password: "비밀번호",
          show: "보기",
          remember: "로그인 상태 유지",
          submit: "로그인",
          forgot: "비밀번호를 잊었나요?",
        }}
        onSubmit={(email, password) => {
          if (email === "haneul@example.com" && password === "linen2024") {
            setMessage("김하늘님, 다시 오신 걸 환영해요");
            return null;
          }
          setMessage("");
          return "이메일 또는 비밀번호가 맞지 않아요";
        }}
        onForgot={() => setMessage("비밀번호 재설정 화면으로 이동해요")}
      />
      <p role="status" className="min-h-4 text-xs text-emerald-700">
        {message}
      </p>
    </section>
  );
}
