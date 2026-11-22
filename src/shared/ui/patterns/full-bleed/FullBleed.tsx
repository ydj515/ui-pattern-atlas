import type { ReactNode } from "react";

/**
 * Article column with a readable measure whose children can break out to the full
 * container width. Wrap a child in <Bleed> to make it edge to edge; text stays in the
 * center column. Uses named grid lines, so no negative margins or 100vw hacks.
 */
export function FullBleedLayout({
  children,
  measure = "20rem",
}: {
  readonly children: ReactNode;
  readonly measure?: string;
}) {
  return (
    <div
      className="grid [&>*]:col-[content] [&>[data-bleed]]:col-[full]"
      style={{
        gridTemplateColumns: `[full-start] minmax(1rem, 1fr) [content-start] min(${measure}, 100% - 2rem) [content-end] minmax(1rem, 1fr) [full-end]`,
      }}
    >
      {children}
    </div>
  );
}

export function Bleed({
  children,
  enabled = true,
}: {
  readonly children: ReactNode;
  readonly enabled?: boolean;
}) {
  return <div data-bleed={enabled ? "" : undefined}>{children}</div>;
}
