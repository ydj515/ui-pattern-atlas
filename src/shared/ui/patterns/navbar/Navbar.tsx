import type { ReactNode } from "react";

export interface NavItem {
  readonly href: string;
  readonly label: string;
}

export interface NavbarProps {
  readonly brand: ReactNode;
  readonly items: readonly NavItem[];
  /** href of the page being shown. */
  readonly current: string;
  readonly onNavigate?: (href: string) => void;
  /** Right side, e.g. a sign-in button. */
  readonly action?: ReactNode;
  readonly label?: string;
}

/**
 * Site-wide top navigation: brand on the left, a few top-level links, one action on the
 * right. The current page is marked with aria-current="page" and an underline, not by
 * colour alone. Keep it to five or six links; collapse into a mobile menu below that.
 */
export function Navbar({
  brand,
  items,
  current,
  onNavigate,
  action,
  label = "주 메뉴",
}: NavbarProps) {
  return (
    <header className="flex h-14 items-center gap-6 border-b border-slate-200 bg-white px-4">
      <div className="shrink-0 text-sm font-bold text-slate-900">{brand}</div>
      <nav aria-label={label} className="min-w-0 flex-1">
        <ul className="flex gap-1">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={item.href === current ? "page" : undefined}
                onClick={(event) => {
                  if (!onNavigate) return;
                  event.preventDefault();
                  onNavigate(item.href);
                }}
                className="relative block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none aria-[current=page]:font-semibold aria-[current=page]:text-slate-900 aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:-bottom-[9px] aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-slate-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
