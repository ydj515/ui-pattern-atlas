import { useId, useState, type ReactNode } from "react";

export interface SidebarLink {
  readonly href: string;
  readonly label: string;
  readonly icon?: ReactNode;
}

export interface SidebarGroup {
  readonly label: string;
  readonly icon?: ReactNode;
  readonly links: readonly SidebarLink[];
}

export type SidebarEntry = SidebarLink | SidebarGroup;

export interface SidebarNavigationProps {
  readonly label: string;
  readonly entries: readonly SidebarEntry[];
  readonly current: string;
  readonly onNavigate: (href: string) => void;
}

const isGroup = (entry: SidebarEntry): entry is SidebarGroup => "links" in entry;

const linkClass =
  "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none aria-[current=page]:bg-slate-900 aria-[current=page]:font-medium aria-[current=page]:text-white";

function Group({
  group,
  current,
  onNavigate,
}: {
  readonly group: SidebarGroup;
  readonly current: string;
  readonly onNavigate: (href: string) => void;
}) {
  const listId = useId();
  const containsCurrent = group.links.some((link) => link.href === current);
  const [open, setOpen] = useState(containsCurrent);
  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className={linkClass}
      >
        {group.icon ? (
          <span aria-hidden="true" className="size-4">
            {group.icon}
          </span>
        ) : null}
        <span className="flex-1">{group.label}</span>
        <span
          aria-hidden="true"
          className={`text-xs transition-transform motion-reduce:transition-none ${open ? "rotate-90" : ""}`}
        >
          ›
        </span>
      </button>
      <ul
        id={listId}
        hidden={!open}
        className="mt-0.5 ml-5 space-y-0.5 border-l border-slate-200 pl-2"
      >
        {group.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={link.href === current ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(link.href);
              }}
              className={linkClass}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

/**
 * Fixed vertical navigation for apps with many sections. Groups expand in place
 * (disclosure buttons) and the group holding the current page starts open. The current
 * page has aria-current="page" and a filled background.
 */
export function SidebarNavigation({ label, entries, current, onNavigate }: SidebarNavigationProps) {
  return (
    <nav aria-label={label} className="w-52 shrink-0 border-r border-slate-200 bg-white p-2">
      <ul className="space-y-0.5">
        {entries.map((entry) =>
          isGroup(entry) ? (
            <Group key={entry.label} group={entry} current={current} onNavigate={onNavigate} />
          ) : (
            <li key={entry.href}>
              <a
                href={entry.href}
                aria-current={entry.href === current ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(entry.href);
                }}
                className={linkClass}
              >
                {entry.icon ? (
                  <span aria-hidden="true" className="size-4">
                    {entry.icon}
                  </span>
                ) : null}
                {entry.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
