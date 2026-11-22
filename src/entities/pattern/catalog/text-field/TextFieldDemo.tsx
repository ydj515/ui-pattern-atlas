import { useState, type FormEvent } from "react";

import { TextField } from "@/shared/ui/patterns/text-field/TextField";

function validate(value: string) {
  if (!value.trim()) return "닉네임을 입력해 주세요";
  if (value.trim().length > 12) return "12자 이하로 입력해 주세요";
  return undefined;
}

export function TextFieldDemo() {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState<string>();
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(nickname);
    setError(next);
    setSaved(!next);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="w-full max-w-xs space-y-3">
      <TextField
        label="닉네임"
        required
        requiredLabel="필수"
        placeholder="예: 하늘"
        hint="2~12자로 입력해 주세요"
        error={error}
        value={nickname}
        onChange={(event) => {
          setNickname(event.target.value);
          setSaved(false);
          // Once an error is shown, re-check while typing so it clears as soon as it is fixed.
          if (error) setError(validate(event.target.value));
        }}
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        저장
      </button>
      <p role="status" className="min-h-5 text-center text-xs text-emerald-700">
        {saved ? "저장했어요" : ""}
      </p>
    </form>
  );
}
