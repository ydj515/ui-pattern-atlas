const tones = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-rose-600",
  idle: "bg-slate-400",
} as const;

export type Status = keyof typeof tones;

export interface StatusDotProps {
  readonly status: Status;
  /** Always shown next to the dot, so the state never depends on colour alone. */
  readonly label: string;
}

/** Coloured dot with its state in words, e.g. ● 정상 / ● 지연 / ● 장애. */
export function StatusDot({ status, label }: StatusDotProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-slate-700">
      <span
        aria-hidden="true"
        className={`size-2 rounded-full ${tones[status]} ${status === "error" ? "ring-4 ring-rose-100" : ""}`}
      />
      {label}
    </span>
  );
}
