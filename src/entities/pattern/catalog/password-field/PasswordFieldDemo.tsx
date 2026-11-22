import { useState } from "react";

import {
  PasswordField,
  type PasswordRule,
} from "@/shared/ui/patterns/password-field/PasswordField";

const RULES: readonly PasswordRule[] = [
  { label: "8자 이상", test: (value) => value.length >= 8 },
  { label: "숫자 포함", test: (value) => /\d/.test(value) },
  { label: "특수문자 포함", test: (value) => /[^A-Za-z0-9]/.test(value) },
];

export function PasswordFieldDemo() {
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-xs">
      <PasswordField
        label="새 비밀번호"
        showLabel="비밀번호 보기"
        value={password}
        onChange={setPassword}
        rules={RULES}
      />
    </div>
  );
}
