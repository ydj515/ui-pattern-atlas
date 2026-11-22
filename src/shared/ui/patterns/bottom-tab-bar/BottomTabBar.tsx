import type { ReactNode } from "react";

export interface BottomTab {
  readonly href: string;
  readonly label: string;
  readonly icon: ReactNode;
  /** Unread count; shown as a badge and added to the link name. */
  readonly badge?: number;
}

export interface BottomTabBarProps {
  readonly tabs: readonly BottomTab[];
  readonly current: string;
  readonly onNavigate: (href: string) => void;
  readonly label?: string;
  readonly badgeLabel?: (count: number) => string;
}

/**
 * Mobile navigation for three to five top-level screens, pinned to the bottom within
 * thumb reach. Every tab keeps a visible label under its icon; the current one is
 * aria-current="page". Leave room for the home indicator (safe-area-inset-bottom).
 */
export function BottomTabBar({
  tabs,
  current,
  onNavigate,
  label = "주요 화면",
  badgeLabel = (count) => `새 알림 ${count}개`,
}: BottomTabBarProps) {
  return (
    <nav
      aria-label={label}
      className="border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)]"
    >
      <ul
        className="grid"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
      >
        {tabs.map((tab) => (
          <li key={tab.href}>
            <a
              href={tab.href}
              aria-current={tab.href === current ? "page" : undefined}
              aria-label={tab.badge ? `${tab.label}, ${badgeLabel(tab.badge)}` : undefined}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(tab.href);
              }}
              className="flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] text-slate-500 focus-visible:bg-slate-100 focus-visible:outline-none aria-[current=page]:font-semibold aria-[current=page]:text-blue-600"
            >
              <span aria-hidden="true" className="relative size-6">
                {tab.icon}
                {tab.badge ? (
                  <span className="absolute -top-1 -right-2 grid h-4 min-w-4 place-items-center rounded-full bg-rose-600 px-1 text-[10px] font-semibold text-white">
                    {tab.badge}
                  </span>
                ) : null}
              </span>
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
