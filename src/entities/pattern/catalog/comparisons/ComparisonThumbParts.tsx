import type { CSSProperties, ReactNode } from "react";

/** Building blocks for the comparison thumbnails: two mini panels on the 176×112 stage. */
export const HIDDEN: CSSProperties = { opacity: 0 };

export function Side({
  left,
  title,
  children,
}: {
  readonly left: number;
  readonly title: string;
  readonly children: ReactNode;
}) {
  return (
    <div
      className="absolute top-[4px] h-[104px] w-[82px] overflow-hidden rounded-[6px] border border-slate-200 p-[5px] text-[5.5px] leading-[1.35]"
      style={{ left }}
    >
      <b className="block text-[6.5px]">{title}</b>
      {children}
    </div>
  );
}

export const L = 4;
export const R = 90;

export function Btn({
  children,
  className = "",
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <span
      className={`mt-[4px] block w-fit rounded-[3px] bg-blue-700 px-[4px] py-[1.5px] text-white ${className}`}
    >
      {children}
    </span>
  );
}

export function Sec({
  children,
  className = "",
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <span
      className={`mt-[4px] block w-fit rounded-[3px] border border-slate-300 px-[4px] py-[1px] ${className}`}
    >
      {children}
    </span>
  );
}

/** Two layers in the same place; `motion` fades the second one in over the first. */
export function Swap({
  motion,
  from,
  to,
  className = "",
}: {
  readonly motion: string;
  readonly from: ReactNode;
  readonly to: ReactNode;
  readonly className?: string;
}) {
  return (
    <span className={`grid ${className}`}>
      <span className={`thumb-anim ${motion}-from col-start-1 row-start-1`}>{from}</span>
      <span className={`thumb-anim ${motion}-to col-start-1 row-start-1`} style={HIDDEN}>
        {to}
      </span>
    </span>
  );
}

export function Box({ on, className = "" }: { readonly on?: string; readonly className?: string }) {
  return (
    <span
      className={`relative inline-block size-[6px] rounded-[1.5px] border border-slate-400 ${className}`}
    >
      {on ? (
        <span
          className={`thumb-anim ${on} absolute -inset-px rounded-[1.5px] bg-blue-700 text-center text-[4.5px] leading-[6px] text-white`}
          style={HIDDEN}
        >
          ✓
        </span>
      ) : null}
    </span>
  );
}

export function Dim({
  motion,
  children,
}: {
  readonly motion: string;
  readonly children: ReactNode;
}) {
  return (
    <div className={`thumb-anim ${motion} absolute inset-0 bg-slate-900/35`} style={HIDDEN}>
      {children}
    </div>
  );
}

export function Radio({ on, base }: { readonly on: string; readonly base?: boolean }) {
  return (
    <span className="relative inline-block size-[6px] rounded-full border border-slate-400">
      <span
        className={`thumb-anim ${on} absolute inset-[1px] rounded-full bg-blue-700`}
        style={base ? undefined : HIDDEN}
      />
    </span>
  );
}

export function Field({
  children,
  invalid,
}: {
  readonly children: ReactNode;
  readonly invalid?: string;
}) {
  return (
    <span className="relative mt-[2px] block h-[11px] rounded-[3px] border border-slate-300 px-[3px] leading-[10px]">
      {invalid ? (
        <span
          className={`thumb-anim ${invalid} absolute -inset-px rounded-[3px] border border-rose-500`}
          style={HIDDEN}
        />
      ) : null}
      {children}
    </span>
  );
}
