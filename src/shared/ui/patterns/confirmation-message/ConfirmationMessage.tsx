import { useEffect, useRef, type ReactNode } from "react";

export interface ConfirmationMessageProps {
  /** Past-tense result, e.g. "문의를 보냈어요". */
  readonly title: string;
  /** What happens next: reference number, timing, where the reply arrives. */
  readonly children: ReactNode;
  /** Next step, e.g. a link back or "새 문의 쓰기". */
  readonly action?: ReactNode;
}

/**
 * Page section that replaces a submitted form with the result and the next steps.
 *
 * The heading receives focus when it appears, so keyboard and screen reader users
 * land on the result instead of losing focus with the removed form.
 */
export function ConfirmationMessage({ title, children, action }: ConfirmationMessageProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <section className="rounded-xl border border-emerald-200 bg-white p-5 text-center">
      <span
        aria-hidden="true"
        className="mx-auto grid size-10 place-items-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700"
      >
        ✓
      </span>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mt-3 text-base font-semibold text-slate-900 focus:outline-none"
      >
        {title}
      </h2>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
      {action ? <div className="mt-4">{action}</div> : null}
    </section>
  );
}
