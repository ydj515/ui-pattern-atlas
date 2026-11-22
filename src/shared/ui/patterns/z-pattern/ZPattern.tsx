import type { ReactNode } from "react";

export interface ZPatternProps {
  /** Top left: who this is (logo). */
  readonly brand: ReactNode;
  /** Top right: a secondary action (로그인). */
  readonly topAction: ReactNode;
  /** Middle: the message the eye crosses on the diagonal. */
  readonly message: ReactNode;
  /** Bottom left: supporting visual or proof. */
  readonly visual: ReactNode;
  /** Bottom right: the main action, where the Z ends. */
  readonly mainAction: ReactNode;
}

/**
 * Simple page laid out along the Z the eye follows on sparse screens: brand top left, a
 * secondary action top right, the message across the middle, and the main action bottom
 * right where the scan ends. DOM order follows the same path, so reading order matches.
 */
export function ZPattern({ brand, topAction, message, visual, mainAction }: ZPatternProps) {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-[auto_1fr_auto] gap-3 p-4">
      <div className="self-start">{brand}</div>
      <div className="justify-self-end">{topAction}</div>
      <div className="col-span-2 self-center">{message}</div>
      <div className="self-end">{visual}</div>
      <div className="self-end justify-self-end">{mainAction}</div>
    </div>
  );
}
