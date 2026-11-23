import { useId, useState, type FormEvent } from "react";

export interface PasswordResetLabels {
  readonly title: string;
  readonly intro: string;
  readonly email: string;
  readonly submit: string;
  readonly invalid: string;
  readonly sentTitle: string;
  readonly sent: (email: string) => string;
  readonly again: string;
}

export interface PasswordResetProps {
  readonly onRequest: (email: string) => void;
  readonly labels?: PasswordResetLabels;
  readonly placeholder?: string;
}

const DEFAULT_LABELS: PasswordResetLabels = {
  title: "비밀번호 재설정",
  intro: "가입한 이메일을 입력하면 재설정 링크를 보내 드려요.",
  email: "이메일",
  submit: "재설정 링크 받기",
  invalid: "이메일 형식을 확인해 주세요",
  sentTitle: "메일을 확인해 주세요",
  sent: (email) =>
    `${email} 주소가 가입되어 있다면 재설정 링크를 보냈어요. 링크는 30분 동안 쓸 수 있어요.`,
  again: "다른 이메일로 다시 받기",
};

/**
 * Request step of a password reset. The confirmation reads the same whether or not the
 * address has an account, so the form cannot be used to find out who is a member.
 */
export function PasswordReset({
  onRequest,
  labels = DEFAULT_LABELS,
  placeholder,
}: PasswordResetProps) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState<string | null>(null);
  const [invalid, setInvalid] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const value = email.trim();
    if (!/.+@.+\..+/.test(value)) {
      setInvalid(true);
      return;
    }
    onRequest(value);
    setSent(value);
  }

  if (sent) {
    return (
      <section role="status" className="grid gap-3 text-sm text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">{labels.sentTitle}</h2>
        <p>{labels.sent(sent)}</p>
        <button
          type="button"
          onClick={() => {
            setSent(null);
            setEmail("");
          }}
          className="justify-self-start text-xs text-slate-600 underline"
        >
          {labels.again}
        </button>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-3 text-sm text-slate-700">
      <h2 className="text-lg font-bold text-slate-900">{labels.title}</h2>
      <p>{labels.intro}</p>
      <label className="font-medium text-slate-800">
        {labels.email}
        <input
          type="email"
          autoComplete="email"
          value={email}
          placeholder={placeholder}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={id}
          onChange={(event) => {
            setEmail(event.target.value);
            setInvalid(false);
          }}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 aria-invalid:border-rose-500"
        />
      </label>
      <p id={id} aria-live="polite" className="min-h-4 text-xs text-rose-600">
        {invalid ? labels.invalid : ""}
      </p>
      <button type="submit" className="rounded-lg bg-slate-900 py-2 font-semibold text-white">
        {labels.submit}
      </button>
    </form>
  );
}
