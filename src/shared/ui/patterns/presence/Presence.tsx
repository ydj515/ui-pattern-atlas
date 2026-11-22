const states = {
  online: { color: "bg-emerald-500", label: "온라인" },
  away: { color: "bg-amber-400", label: "자리 비움" },
  offline: { color: "bg-slate-300", label: "오프라인" },
} as const;

export type PresenceState = keyof typeof states;

export interface PresenceProps {
  readonly name: string;
  readonly state: PresenceState;
  readonly labels?: Partial<Record<PresenceState, string>>;
}

/**
 * Initial with a small status dot in the corner (online, away, offline). The state is
 * part of the accessible name and the dot shape differs for away (half), so it is not
 * conveyed by colour alone.
 */
export function Presence({ name, state, labels = {} }: PresenceProps) {
  const label = labels[state] ?? states[state].label;
  return (
    <span
      role="img"
      aria-label={`${name}, ${label}`}
      className="relative inline-grid size-9 place-items-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700"
    >
      <span aria-hidden="true">{[...name][0]}</span>
      <span
        aria-hidden="true"
        className={`absolute -right-0.5 -bottom-0.5 size-3 rounded-full ring-2 ring-white ${states[state].color} ${state === "away" ? "[clip-path:inset(0_0_0_50%)]" : ""} ${state === "offline" ? "border-2 border-slate-400 bg-white" : ""}`}
      />
    </span>
  );
}
