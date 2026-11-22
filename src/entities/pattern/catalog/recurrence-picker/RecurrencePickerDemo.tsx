import { useState } from "react";

import {
  RecurrencePicker,
  type Recurrence,
  type RecurrenceLabels,
} from "@/shared/ui/patterns/recurrence-picker/RecurrencePicker";

const LABELS: RecurrenceLabels = {
  repeat: "반복",
  frequencies: { daily: "매일", weekly: "매주", monthly: "매월" },
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
  ends: "종료",
  never: "계속 반복",
  after: "횟수",
  times: "회 후 종료",
};

/** The rule as one sentence, so people can check what they set. */
function describe(rule: Recurrence) {
  const days = rule.weekdays.map((day) => LABELS.weekdays[day]).join(", ");
  const base =
    rule.frequency === "weekly"
      ? days
        ? `매주 ${days}요일마다`
        : "요일을 골라 주세요"
      : `${LABELS.frequencies[rule.frequency]}`;
  return rule.end.type === "count"
    ? `${base} · ${rule.end.count}회 반복해요`
    : `${base} · 끝없이 반복해요`;
}

export function RecurrencePickerDemo() {
  const [rule, setRule] = useState<Recurrence>({
    frequency: "weekly",
    weekdays: [1, 3],
    end: { type: "count", count: 10 },
  });

  return (
    <div className="w-full max-w-xs space-y-3">
      <RecurrencePicker value={rule} onChange={setRule} labels={LABELS} />
      <p aria-live="polite" className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-800">
        {describe(rule)}
      </p>
    </div>
  );
}
