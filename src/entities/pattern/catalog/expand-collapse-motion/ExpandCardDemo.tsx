import { useState } from "react";
import { ExpandCard } from "@/shared/ui/patterns/expand-collapse-motion/ExpandCard";

const STEPS = [
  { label: "결제 완료", time: "09:12" },
  { label: "상품 준비", time: "10:40" },
  { label: "배송 출발", time: "13:05" },
  { label: "배송 중", time: "지금" },
];

export function ExpandCardDemo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="w-full max-w-xs">
      <ExpandCard
        title="주문 #2481"
        summary="배송 중 · 오늘 도착 예정"
        expanded={expanded}
        onExpandedChange={setExpanded}
      >
        <ol className="grid gap-2 border-t border-slate-100 pt-3 text-sm">
          {STEPS.map((step, index) => (
            <li key={step.label} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${index === STEPS.length - 1 ? "bg-blue-600" : "bg-slate-300"}`}
              />
              <span className="flex-1 text-slate-800">{step.label}</span>
              <span className="text-xs text-slate-500">{step.time}</span>
            </li>
          ))}
        </ol>
      </ExpandCard>
    </div>
  );
}
