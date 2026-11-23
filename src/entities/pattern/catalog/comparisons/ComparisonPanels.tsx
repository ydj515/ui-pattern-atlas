import type { ReactNode } from "react";

export const action =
  "w-fit rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white disabled:opacity-50";
export const secondary =
  "w-fit rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900";

/** One side of a comparison: a named region with its own heading. */
export function Panel({ name, children }: { readonly name: string; readonly children: ReactNode }) {
  return (
    <section
      aria-label={name}
      className="min-w-0 space-y-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-900"
    >
      <h3 className="text-sm font-semibold">{name}</h3>
      {children}
    </section>
  );
}

export function Panels({ children }: { readonly children: ReactNode }) {
  return <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-2">{children}</div>;
}
