import { PasswordReset } from "@/shared/ui/patterns/password-reset/PasswordReset";

export function PasswordResetDemo() {
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <PasswordReset
        placeholder="haneul@example.com"
        onRequest={() => undefined}
        labels={{
          title: "비밀번호 재설정",
          intro: "가입한 이메일을 입력하면 재설정 링크를 보내 드려요.",
          email: "이메일",
          submit: "재설정 링크 받기",
          invalid: "이메일 형식을 확인해 주세요",
          sentTitle: "메일을 확인해 주세요",
          sent: (email) =>
            `${email} 주소가 가입되어 있다면 재설정 링크를 보냈어요. 링크는 30분 동안 쓸 수 있어요.`,
          again: "다른 이메일로 다시 받기",
        }}
      />
    </section>
  );
}
