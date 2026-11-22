import { useState } from "react";

import { StatusDot, type Status } from "@/shared/ui/patterns/status-dot/StatusDot";

const LABELS: Record<Status, string> = {
  success: "정상",
  warning: "지연",
  error: "장애",
  idle: "점검",
};
const SNAPSHOTS: readonly (readonly Status[])[] = [
  ["success", "warning", "success"],
  ["success", "success", "error"],
];

export function StatusDotDemo() {
  const [snapshot, setSnapshot] = useState(0);
  const services = ["API", "결제", "메일 발송"].map((name, index) => ({
    name,
    status: SNAPSHOTS[snapshot]![index]!,
  }));

  return (
    <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white">
      <ul className="divide-y divide-slate-100">
        {services.map((service) => (
          <li key={service.name} className="flex items-center justify-between px-4 py-2.5 text-sm">
            {service.name}
            <StatusDot status={service.status} label={LABELS[service.status]} />
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setSnapshot((value) => (value + 1) % SNAPSHOTS.length)}
        className="w-full border-t border-slate-100 py-2 text-xs text-slate-600 hover:bg-slate-50"
      >
        새로 고침
      </button>
    </div>
  );
}
