import { useId, useState, type FormEvent } from "react";

export interface LoginFormLabels {
  readonly email: string;
  readonly password: string;
  readonly show: string;
  readonly remember: string;
  readonly submit: string;
  readonly forgot: string;
}

export interface LoginFormProps {
  /** Returns an error message to show, or null when signed in. */
  readonly onSubmit: (email: string, password: string, remember: boolean) => string | null;
  readonly onForgot: () => void;
  readonly labels?: LoginFormLabels;
  readonly emailPlaceholder?: string;
  readonly passwordPlaceholder?: string;
}

const DEFAULT_LABELS: LoginFormLabels = {
  email: "이메일",
  password: "비밀번호",
  show: "보기",
  remember: "로그인 상태 유지",
  submit: "로그인",
  forgot: "비밀번호를 잊었나요?",
};

const field =
  "mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none";

/**
 * Email and password sign-in. One error message covers both fields so it never says
 * which one was wrong, and it is announced as an alert next to the button. Autocomplete
 * hints let password managers fill the form.
 */
export function LoginForm({
  onSubmit,
  onForgot,
  labels = DEFAULT_LABELS,
  emailPlaceholder,
  passwordPlaceholder,
}: LoginFormProps) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(onSubmit(email.trim(), password, remember));
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3" noValidate>
      <label className="text-sm font-medium text-slate-800">
        {labels.email}
        <input
          type="email"
          autoComplete="username"
          value={email}
          placeholder={emailPlaceholder}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={field}
        />
      </label>
      <label className="text-sm font-medium text-slate-800">
        {labels.password}
        <span className="relative block">
          <input
            type={visible ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            placeholder={passwordPlaceholder}
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`${field} pr-12`}
          />
          <button
            type="button"
            aria-pressed={visible}
            onClick={() => setVisible((value) => !value)}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-xs text-slate-600"
          >
            {labels.show}
          </button>
        </span>
      </label>
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
        />
        {labels.remember}
      </label>
      <p id={`${id}-error`} role="alert" className="min-h-4 text-xs font-medium text-rose-600">
        {error}
      </p>
      <button
        type="submit"
        className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
      >
        {labels.submit}
      </button>
      <button
        type="button"
        onClick={onForgot}
        className="justify-self-center text-xs text-slate-600 underline"
      >
        {labels.forgot}
      </button>
    </form>
  );
}
