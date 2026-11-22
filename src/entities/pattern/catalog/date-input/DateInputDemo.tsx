import { useState } from "react";

import { DateInput } from "@/shared/ui/patterns/date-input/DateInput";

export function DateInputDemo() {
  const [text, setText] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="w-full max-w-xs space-y-2">
      <DateInput
        label="생년월일"
        hint="YYYY.MM.DD"
        incompleteText="8자리 숫자로 입력해 주세요"
        invalidText="없는 날짜예요"
        value={text}
        onChange={(value, parsed) => {
          setText(value);
          setDate(parsed);
        }}
      />
      <p className="min-h-5 text-sm text-slate-700">
        {date ? `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일` : ""}
      </p>
    </div>
  );
}
