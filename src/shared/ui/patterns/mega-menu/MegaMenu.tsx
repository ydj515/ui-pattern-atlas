import { useEffect, useId, useRef, useState } from "react";

export interface MegaMenuColumn {
  readonly title: string;
  readonly links: readonly {
    readonly href: string;
    readonly label: string;
    readonly description?: string;
  }[];
}

export interface MegaMenuItem {
  readonly label: string;
  readonly columns: readonly MegaMenuColumn[];
}

export interface MegaMenuProps {
  readonly items: readonly MegaMenuItem[];
  readonly onNavigate: (href: string) => void;
  readonly label?: string;
}

/**
 * Top navigation whose items open a wide panel with several columns of links. Each item
 * is a disclosure button (aria-expanded), not an ARIA menu, so the links inside are plain
 * links reached with Tab. Escape or a click outside closes the panel.
 */
export function MegaMenu({ items, onNavigate, label = "주 메뉴" }: MegaMenuProps) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);
  const rootRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (open === null) return;
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) setOpen(null);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <nav
      ref={rootRef}
      aria-label={label}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open !== null) {
          buttonRefs.current[open]?.focus();
          setOpen(null);
        }
      }}
      className="relative border-b border-slate-200 bg-white"
    >
      <ul className="flex gap-1 px-2">
        {items.map((item, index) => (
          <li key={item.label}>
            <button
              ref={(element) => {
                buttonRefs.current[index] = element;
              }}
              type="button"
              aria-expanded={open === index}
              aria-controls={`${baseId}-${index}`}
              onClick={() => setOpen(open === index ? null : index)}
              className="flex h-12 items-center gap-1 px-3 text-sm font-medium text-slate-700 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none aria-expanded:text-slate-900"
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`text-xs transition-transform motion-reduce:transition-none ${open === index ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
          </li>
        ))}
      </ul>
      {items.map((item, index) => (
        <div
          key={item.label}
          id={`${baseId}-${index}`}
          hidden={open !== index}
          className="absolute inset-x-0 top-full z-20 grid gap-6 border-b border-slate-200 bg-white p-5 shadow-lg"
          style={{ gridTemplateColumns: `repeat(${item.columns.length}, minmax(0, 1fr))` }}
        >
          {item.columns.map((column) => (
            <section key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-semibold text-slate-500">{column.title}</h3>
              <ul className="mt-2 space-y-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => {
                        event.preventDefault();
                        onNavigate(link.href);
                        setOpen(null);
                      }}
                      className="block rounded-md px-2 py-1.5 hover:bg-slate-100 focus-visible:bg-slate-100 focus-visible:outline-none"
                    >
                      <span className="block text-sm font-medium text-slate-900">{link.label}</span>
                      {link.description ? (
                        <span className="block text-xs text-slate-500">{link.description}</span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ))}
    </nav>
  );
}
