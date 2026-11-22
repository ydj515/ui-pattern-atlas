import type { ReactNode } from "react";

export interface SidebarLayoutProps {
  readonly sidebar: ReactNode;
  readonly children: ReactNode;
  readonly sidebarLabel?: string;
}

/**
 * Two columns: navigation on the left and the main content on the right. When the
 * container is narrow the sidebar moves above the content as a horizontal row (container
 * query), so the same markup works in a page or a panel. Reading order stays nav → main.
 */
export function SidebarLayout({ sidebar, children, sidebarLabel = "메뉴" }: SidebarLayoutProps) {
  return (
    <div className="@container h-full">
      <div className="flex h-full flex-col @sm:flex-row">
        <nav
          aria-label={sidebarLabel}
          className="shrink-0 border-b border-slate-200 bg-slate-50 p-2 @sm:w-36 @sm:border-r @sm:border-b-0"
        >
          {sidebar}
        </nav>
        <main className="min-w-0 flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
