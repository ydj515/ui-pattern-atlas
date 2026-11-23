import { useEffect, useState } from "react";
import { SessionTimeout } from "@/shared/ui/patterns/session-timeout/SessionTimeout";

const START = 60;

export function SessionTimeoutDemo() {
  const [remaining, setRemaining] = useState(START);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (remaining <= 0) return;
    const timer = window.setTimeout(() => setRemaining((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [remaining]);

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <SessionTimeout
        remaining={remaining}
        onExtend={() => {
          setRemaining(START);
          setMessage("로그인을 30분 더 유지해요");
        }}
        onSignOut={() => {
          setRemaining(0);
          setMessage("");
        }}
        onSignIn={() => {
          setRemaining(START);
          setMessage("다시 로그인했어요. 쓰던 내용을 불러왔어요");
        }}
        labels={{
          title: "곧 자동으로 로그아웃돼요",
          body: (time) => `${time} 뒤 로그아웃돼요. 계속 쓰려면 아래 버튼을 눌러 주세요`,
          extend: "계속 이용하기",
          signOut: "지금 로그아웃",
          expiredTitle: "오래 쉬어 로그아웃했어요",
          expiredBody: "쓰던 내용은 저장해 두었어요. 다시 로그인하면 이어서 쓸 수 있어요",
          signIn: "다시 로그인",
        }}
      />
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
