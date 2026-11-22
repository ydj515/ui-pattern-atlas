import { useState } from "react";
import { SocialSignIn } from "@/shared/ui/patterns/social-sign-in/SocialSignIn";

const PROVIDERS = [
  {
    id: "google",
    label: "Google로 계속하기",
    mark: <b>G</b>,
    className: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  },
  { id: "apple", label: "Apple로 계속하기", mark: <b>A</b>, className: "bg-black text-white" },
  {
    id: "email",
    label: "이메일로 계속하기",
    mark: <b>@</b>,
    className: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  },
];

export function SocialSignInDemo() {
  const [pending, setPending] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function select(id: string) {
    setPending(id);
    window.setTimeout(() => {
      setPending(null);
      setDone(true);
    }, 1000);
  }

  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-5">
      {done ? (
        <div role="status" className="grid justify-items-center gap-3 py-8 text-center">
          <p className="text-base font-bold text-slate-900">가입을 마쳤어요</p>
          <button
            type="button"
            onClick={() => setDone(false)}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
          >
            처음으로
          </button>
        </div>
      ) : (
        <>
          <h3 className="mb-4 text-center text-lg font-bold text-slate-900">3초 만에 시작하기</h3>
          <SocialSignIn
            providers={PROVIDERS}
            pending={pending}
            onSelect={select}
            pendingLabel="연결하는 중"
            notice="계속하면 이용약관에 동의하게 돼요"
          />
        </>
      )}
    </section>
  );
}
