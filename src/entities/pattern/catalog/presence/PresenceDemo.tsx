import { useState } from "react";

import { Presence, type PresenceState } from "@/shared/ui/patterns/presence/Presence";

const LABELS: Record<PresenceState, string> = {
  online: "온라인",
  away: "자리 비움",
  offline: "오프라인",
};

export function PresenceDemo() {
  const [mine, setMine] = useState<PresenceState>("online");
  const team = [
    { name: "나", state: mine },
    { name: "김하늘", state: "away" as const },
    { name: "이도윤", state: "offline" as const },
  ];

  return (
    <div className="w-full max-w-xs space-y-3 rounded-xl border border-slate-200 bg-white p-4">
      <ul className="space-y-2">
        {team.map((person) => (
          <li key={person.name} className="flex items-center gap-3 text-sm">
            <Presence name={person.name} state={person.state} labels={LABELS} />
            <span className="flex-1 text-slate-800">{person.name}</span>
            <span aria-hidden="true" className="text-xs text-slate-500">
              {LABELS[person.state]}
            </span>
          </li>
        ))}
      </ul>
      <label className="flex items-center justify-between text-xs text-slate-600">
        내 상태
        <select
          value={mine}
          onChange={(event) => setMine(event.target.value as PresenceState)}
          className="rounded-md border border-slate-300 px-2 py-1"
        >
          {(Object.keys(LABELS) as PresenceState[]).map((state) => (
            <option key={state} value={state}>
              {LABELS[state]}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
