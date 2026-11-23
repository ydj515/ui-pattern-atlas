import { useEffect, useId, useState } from "react";

export interface EmailVerificationLabels {
  readonly title: string;
  readonly sent: (email: string) => string;
  readonly spam: string;
  readonly resend: string;
  readonly wait: (seconds: number) => string;
  readonly resent: string;
  readonly change: string;
}

export interface EmailVerificationProps {
  readonly email: string;
  readonly onResend: () => void;
  readonly onChangeEmail: () => void;
  /** Seconds before another email can be sent. */
  readonly cooldown?: number;
  readonly labels?: EmailVerificationLabels;
}

const DEFAULT_LABELS: EmailVerificationLabels = {
  title: "메일함을 확인해 주세요",
  sent: (email) => `${email} 주소로 인증 메일을 보냈어요.`,
  spam: "몇 분이 지나도 없으면 스팸함도 확인해 주세요.",
  resend: "메일 다시 보내기",
  wait: (seconds) => `${seconds}초 뒤에 다시 보낼 수 있어요`,
  resent: "메일을 다시 보냈어요",
  change: "이메일 주소 바꾸기",
};

/**
 * Waiting screen after sign-up: says where the mail went, what to check if it does not
 * arrive, and lets people resend after a short cooldown or fix a mistyped address.
 */
export function EmailVerification({
  email,
  onResend,
  onChangeEmail,
  cooldown = 30,
  labels = DEFAULT_LABELS,
}: EmailVerificationProps) {
  const id = useId();
  const [left, setLeft] = useState(0);
  const [resent, setResent] = useState(false);
  const waiting = left > 0;

  useEffect(() => {
    if (!waiting) return;
    const timer = window.setInterval(() => setLeft((value) => Math.max(value - 1, 0)), 1000);
    return () => window.clearInterval(timer);
  }, [waiting]);

  return (
    <section aria-labelledby={id} className="grid gap-3 text-sm text-slate-700">
      <h2 id={id} className="text-lg font-bold text-slate-900">
        {labels.title}
      </h2>
      <p>{labels.sent(email)}</p>
      <p className="text-xs text-slate-500">{labels.spam}</p>
      <button
        type="button"
        disabled={waiting}
        onClick={() => {
          onResend();
          setResent(true);
          setLeft(cooldown);
        }}
        className="rounded-lg border border-slate-300 py-2 font-medium text-slate-900 disabled:text-slate-400"
      >
        {waiting ? labels.wait(left) : labels.resend}
      </button>
      <p role="status" className="min-h-4 text-xs text-emerald-700">
        {resent ? labels.resent : ""}
      </p>
      <button
        type="button"
        onClick={onChangeEmail}
        className="justify-self-center text-xs text-slate-600 underline"
      >
        {labels.change}
      </button>
    </section>
  );
}
