import { useState, type FormEvent } from "react";

import { TextField } from "@/shared/ui/patterns/inline-validation/TextField";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value: string): string | undefined {
  if (value.trim() === "") return "이메일을 입력해 주세요.";
  if (!EMAIL_PATTERN.test(value)) return "이메일 형식이 올바르지 않아요. 예: name@example.com";
  return undefined;
}

export function InlineValidationDemo() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // Validate after the user leaves the field, not on every keystroke.
  const error = touched ? validateEmail(email) : undefined;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    setSubmitted(validateEmail(email) === undefined);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="w-full max-w-xs">
      <TextField
        label="이메일"
        description="영수증을 받을 주소를 입력해 주세요."
        type="email"
        autoComplete="email"
        placeholder="name@example.com"
        value={email}
        error={error}
        onChange={(event) => {
          setEmail(event.target.value);
          setSubmitted(false);
        }}
        onBlur={() => setTouched(true)}
      />
      <button
        type="submit"
        className="mt-2 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
      >
        영수증 받기
      </button>
      <p role="status" className="mt-2 min-h-5 text-center text-xs text-emerald-700">
        {submitted ? "영수증을 보냈어요." : ""}
      </p>
    </form>
  );
}
