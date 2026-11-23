import { useId, useState, type FormEvent } from "react";

export interface TwoFactorAuthLabels {
  readonly title: string;
  readonly codeHint: string;
  readonly backupHint: string;
  readonly code: string;
  readonly backup: string;
  readonly remember: string;
  readonly submit: string;
  readonly wrong: (left: number) => string;
  readonly locked: string;
  readonly useBackup: string;
  readonly useCode: string;
}

export interface TwoFactorAuthProps {
  /** Returns true when the code is right. */
  readonly onVerify: (code: string, kind: "code" | "backup", remember: boolean) => boolean;
  readonly attempts?: number;
  readonly placeholders?: { readonly code: string; readonly backup: string };
  readonly labels?: TwoFactorAuthLabels;
}

const DEFAULT_LABELS: TwoFactorAuthLabels = {
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
};

/**
 * Second step after the password: a one-time code with autofill from SMS, a limited
 * number of tries that are counted out loud, and a backup code for a lost phone.
 */
export function TwoFactorAuth({
  onVerify,
  attempts = 5,
  placeholders,
  labels = DEFAULT_LABELS,
}: TwoFactorAuthProps) {
  const id = useId();
  const [kind, setKind] = useState<"code" | "backup">("code");
  const [value, setValue] = useState("");
  const [remember, setRemember] = useState(false);
  const [left, setLeft] = useState(attempts);
  const [error, setError] = useState("");
  const length = kind === "code" ? 6 : 8;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (left === 0 || onVerify(value, kind, remember)) return;
    const next = left - 1;
    setLeft(next);
    setError(next === 0 ? labels.locked : labels.wrong(next));
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 text-sm text-slate-700">
      <h2 className="text-lg font-bold text-slate-900">{labels.title}</h2>
      <p>{kind === "code" ? labels.codeHint : labels.backupHint}</p>
      <label className="font-medium text-slate-800">
        {kind === "code" ? labels.code : labels.backup}
        <input
          inputMode={kind === "code" ? "numeric" : "text"}
          autoComplete={kind === "code" ? "one-time-code" : "off"}
          maxLength={length}
          placeholder={kind === "code" ? placeholders?.code : placeholders?.backup}
          value={value}
          onChange={(event) =>
            setValue(kind === "code" ? event.target.value.replace(/\D/g, "") : event.target.value)
          }
          aria-invalid={error ? true : undefined}
          aria-describedby={id}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 tracking-[0.3em] text-slate-900 aria-invalid:border-rose-500"
        />
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
        />
        {labels.remember}
      </label>
      <p id={id} role="alert" className="min-h-4 text-xs font-medium text-rose-600">
        {error}
      </p>
      <button
        type="submit"
        disabled={value.length < length || left === 0}
        className="rounded-lg bg-slate-900 py-2 font-semibold text-white disabled:opacity-40"
      >
        {labels.submit}
      </button>
      <button
        type="button"
        onClick={() => {
          setKind((current) => (current === "code" ? "backup" : "code"));
          setValue("");
          setError("");
        }}
        className="justify-self-center text-xs text-slate-600 underline"
      >
        {kind === "code" ? labels.useBackup : labels.useCode}
      </button>
    </form>
  );
}
