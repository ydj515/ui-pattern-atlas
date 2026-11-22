import { useId, useState } from "react";

import { PasswordStrengthMeter } from "@/shared/ui/patterns/password-strength-meter/PasswordStrengthMeter";

/** Rough score for the demo; use a real estimator such as zxcvbn in production. */
function score(password: string): 0 | 1 | 2 | 3 | 4 {
  if (!password) return 0;
  let points = 0;
  if (password.length >= 8) points += 1;
  if (password.length >= 12) points += 1;
  if (/\d/.test(password) && /[a-zA-Z]/.test(password)) points += 1;
  if (/[^A-Za-z0-9]/.test(password)) points += 1;
  return Math.max(1, Math.min(4, points)) as 1 | 2 | 3 | 4;
}

const HINTS = [
  "",
  "8자 이상으로 늘려 보세요",
  "숫자나 기호를 섞어 보세요",
  "조금 더 길게 쓰면 더 안전해요",
  "",
] as const;

export function PasswordStrengthMeterDemo() {
  const id = useId();
  const [password, setPassword] = useState("");
  const value = score(password);

  return (
    <div className="w-full max-w-xs space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        새 비밀번호
      </label>
      <input
        id={id}
        type="password"
        autoComplete="new-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
      <PasswordStrengthMeter
        score={value}
        labels={["약함", "보통", "강함", "아주 강함"]}
        hint={HINTS[value]}
        title="비밀번호 강도"
      />
    </div>
  );
}
