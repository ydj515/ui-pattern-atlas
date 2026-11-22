import { useEffect, useRef, type ReactNode } from "react";

export interface SuccessScreenProps {
  readonly title: string;
  /** Key facts people want to check right away (order number, amount, arrival). */
  readonly details: readonly { readonly label: string; readonly value: string }[];
  readonly primary: ReactNode;
  readonly secondary?: ReactNode;
}

/**
 * Result screen after a payment or sign-up: a clear title, the few facts people check
 * first, and the next step. Focus lands on the title so screen readers announce the
 * result without hunting for it.
 */
export function SuccessScreen({ title, details, primary, secondary }: SuccessScreenProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <section className="grid justify-items-center gap-4 text-center">
      <span
        aria-hidden="true"
        className="grid size-12 place-items-center rounded-full bg-emerald-100 text-xl text-emerald-700"
      >
        ✓
      </span>
      <h2 ref={headingRef} tabIndex={-1} className="text-lg font-bold text-slate-900 outline-none">
        {title}
      </h2>
      <dl className="grid w-full gap-1.5 rounded-xl bg-slate-50 p-3 text-sm">
        {details.map((detail) => (
          <div key={detail.label} className="flex justify-between gap-3">
            <dt className="text-slate-600">{detail.label}</dt>
            <dd className="font-medium text-slate-900">{detail.value}</dd>
          </div>
        ))}
      </dl>
      <div className="grid w-full gap-2">
        {primary}
        {secondary}
      </div>
    </section>
  );
}
