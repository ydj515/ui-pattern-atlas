import { useId, useState, type FormEvent } from "react";

import { ErrorSummary, type FieldError } from "@/shared/ui/patterns/error-summary/ErrorSummary";

export function ErrorSummaryDemo() {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<readonly FieldError[]>([]);
  const [done, setDone] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: FieldError[] = [];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.push({ fieldId: emailId, message: "이메일 형식이 올바르지 않아요" });
    }
    if (password.length < 8) {
      next.push({ fieldId: passwordId, message: "비밀번호를 8자 이상 입력해 주세요" });
    }
    setErrors(next);
    setDone(next.length === 0);
  }

  const errorFor = (fieldId: string) => errors.find((error) => error.fieldId === fieldId);

  return (
    <form noValidate onSubmit={handleSubmit} className="w-full max-w-xs space-y-3">
      <ErrorSummary errors={errors} title={(count) => `${count}개 항목을 확인해 주세요`} />
      {[
        { id: emailId, label: "이메일", type: "email", value: email, set: setEmail },
        { id: passwordId, label: "비밀번호", type: "password", value: password, set: setPassword },
      ].map((field) => {
        const error = errorFor(field.id);
        return (
          <div key={field.id}>
            <label htmlFor={field.id} className="text-sm font-medium text-slate-800">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              value={field.value}
              onChange={(event) => field.set(event.target.value)}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${field.id}-error` : undefined}
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm aria-invalid:border-rose-500"
            />
            {error ? (
              <p id={`${field.id}-error`} className="mt-1 text-xs text-rose-600">
                {error.message}
              </p>
            ) : null}
          </div>
        );
      })}
      <button
        type="submit"
        className="w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        가입하기
      </button>
      <p role="status" className="text-center text-xs text-emerald-700">
        {done ? "가입했어요" : ""}
      </p>
    </form>
  );
}
