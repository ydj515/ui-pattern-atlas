import { useId, useState, type FormEvent } from "react";

export interface SignupRule {
  readonly label: string;
  readonly test: (password: string) => boolean;
}

export interface SignupFormLabels {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly taken: string;
  readonly met: string;
  readonly unmet: string;
  readonly submit: string;
  readonly fix: string;
}

export interface SignupFormProps {
  readonly rules: readonly SignupRule[];
  /** Checked when the email field loses focus, so a taken address is caught early. */
  readonly isEmailTaken: (email: string) => boolean;
  readonly onSubmit: (values: { name: string; email: string; password: string }) => void;
  readonly labels?: SignupFormLabels;
}

const DEFAULT_LABELS: SignupFormLabels = {
  name: "이름",
  email: "이메일",
  password: "비밀번호",
  taken: "이미 가입된 이메일이에요",
  met: "충족",
  unmet: "미충족",
  submit: "가입하기",
  fix: "표시된 항목을 고쳐 주세요",
};

const field =
  "mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 aria-invalid:border-rose-500";

/**
 * Sign-up with three fields. A taken email is reported when the field loses focus, the
 * password rules are listed before typing and tick off as they are met, and submitting
 * with problems keeps the values and points at what to fix.
 */
export function SignupForm({
  rules,
  isEmailTaken,
  onSubmit,
  labels = DEFAULT_LABELS,
}: SignupFormProps) {
  const id = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [taken, setTaken] = useState(false);
  const [tried, setTried] = useState(false);
  const rulesMet = rules.every((rule) => rule.test(password));
  const valid = name.trim() !== "" && /.+@.+\..+/.test(email) && !taken && rulesMet;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTried(true);
    if (valid) onSubmit({ name: name.trim(), email: email.trim(), password });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3" noValidate>
      <label className="text-sm font-medium text-slate-800">
        {labels.name}
        <input
          value={name}
          autoComplete="name"
          onChange={(event) => setName(event.target.value)}
          aria-invalid={tried && name.trim() === "" ? true : undefined}
          className={field}
        />
      </label>
      <label className="text-sm font-medium text-slate-800">
        {labels.email}
        <input
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setTaken(false);
          }}
          onBlur={() => setTaken(isEmailTaken(email.trim()))}
          aria-invalid={taken || (tried && !/.+@.+\..+/.test(email)) ? true : undefined}
          aria-describedby={`${id}-email`}
          className={field}
        />
      </label>
      <p id={`${id}-email`} aria-live="polite" className="-mt-2 min-h-4 text-xs text-rose-600">
        {taken ? labels.taken : ""}
      </p>
      <label className="text-sm font-medium text-slate-800">
        {labels.password}
        <input
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-invalid={tried && !rulesMet ? true : undefined}
          aria-describedby={`${id}-rules`}
          className={field}
        />
      </label>
      <ul id={`${id}-rules`} className="grid gap-1 text-xs">
        {rules.map((rule) => {
          const met = rule.test(password);
          return (
            <li key={rule.label} className={met ? "text-emerald-700" : "text-slate-500"}>
              <span aria-hidden="true">{met ? "✓ " : "· "}</span>
              {rule.label}
              <span className="sr-only"> {met ? labels.met : labels.unmet}</span>
            </li>
          );
        })}
      </ul>
      <p role="alert" className="min-h-4 text-xs font-medium text-rose-600">
        {tried && !valid ? labels.fix : ""}
      </p>
      <button
        type="submit"
        className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
      >
        {labels.submit}
      </button>
    </form>
  );
}
