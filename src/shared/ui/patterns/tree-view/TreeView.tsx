import { useId, useMemo, useRef, useState, type KeyboardEvent } from "react";

export interface TreeNode {
  readonly id: string;
  readonly label: string;
  readonly children?: readonly TreeNode[];
}

export interface TreeViewProps {
  readonly label: string;
  readonly nodes: readonly TreeNode[];
  readonly selected: string | null;
  readonly onSelect: (id: string) => void;
  readonly defaultExpanded?: readonly string[];
}

interface VisibleNode {
  readonly node: TreeNode;
  readonly level: number;
  readonly parentId: string | null;
}

/**
 * Nested list like a file explorer (WAI-ARIA tree). One Tab stop; ↑/↓ move between
 * visible items, → opens a folder or steps into it, ← closes it or goes to the parent,
 * Enter selects. Folders show their state with aria-expanded.
 */
export function TreeView({
  label,
  nodes,
  selected,
  onSelect,
  defaultExpanded = [],
}: TreeViewProps) {
  const baseId = useId();
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(new Set(defaultExpanded));
  const [focusedId, setFocusedId] = useState(selected ?? nodes[0]?.id ?? "");
  const itemRefs = useRef(new Map<string, HTMLLIElement>());

  const visible = useMemo(() => {
    const result: VisibleNode[] = [];
    const walk = (list: readonly TreeNode[], level: number, parentId: string | null) => {
      for (const node of list) {
        result.push({ node, level, parentId });
        if (node.children && expanded.has(node.id)) walk(node.children, level + 1, node.id);
      }
    };
    walk(nodes, 1, null);
    return result;
  }, [nodes, expanded]);

  function focus(id: string) {
    setFocusedId(id);
    itemRefs.current.get(id)?.focus();
  }

  function toggle(id: string, open: boolean) {
    setExpanded((current) => {
      const next = new Set(current);
      if (open) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    const index = visible.findIndex((item) => item.node.id === focusedId);
    const current = visible[index];
    if (!current) return;
    const isFolder = Boolean(current.node.children);
    const isOpen = expanded.has(current.node.id);
    const actions: Record<string, () => void> = {
      ArrowDown: () => {
        const next = visible[index + 1];
        if (next) focus(next.node.id);
      },
      ArrowUp: () => {
        const previous = visible[index - 1];
        if (previous) focus(previous.node.id);
      },
      ArrowRight: () => {
        if (isFolder && !isOpen) toggle(current.node.id, true);
        else if (isFolder && current.node.children?.[0]) focus(current.node.children[0].id);
      },
      ArrowLeft: () => {
        if (isFolder && isOpen) toggle(current.node.id, false);
        else if (current.parentId) focus(current.parentId);
      },
      Home: () => focus(visible[0]!.node.id),
      End: () => focus(visible.at(-1)!.node.id),
      Enter: () => (isFolder ? toggle(current.node.id, !isOpen) : onSelect(current.node.id)),
    };
    const action = actions[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  }

  function renderNodes(list: readonly TreeNode[], level: number) {
    return list.map((node) => {
      const isFolder = Boolean(node.children);
      const isOpen = expanded.has(node.id);
      return (
        <li
          key={node.id}
          ref={(element) => {
            if (element) itemRefs.current.set(node.id, element);
            else itemRefs.current.delete(node.id);
          }}
          role="treeitem"
          aria-level={level}
          // Name the item by its own label only, not by the nested items inside it.
          aria-labelledby={`${baseId}-${node.id}`}
          aria-expanded={isFolder ? isOpen : undefined}
          aria-selected={isFolder ? undefined : selected === node.id}
          tabIndex={focusedId === node.id ? 0 : -1}
          onFocus={(event) => {
            if (event.target === event.currentTarget) setFocusedId(node.id);
          }}
          onClick={(event) => {
            event.stopPropagation();
            setFocusedId(node.id);
            if (isFolder) toggle(node.id, !isOpen);
            else onSelect(node.id);
          }}
          className="cursor-pointer text-sm text-slate-700 focus:outline-none [&:focus-visible>span]:ring-2 [&:focus-visible>span]:ring-blue-600"
        >
          <span
            className={`flex items-center gap-1.5 rounded-md py-1 pr-2 hover:bg-slate-100 ${selected === node.id ? "bg-blue-50 font-medium text-blue-900" : ""}`}
            style={{ paddingLeft: 4 + (level - 1) * 16 }}
          >
            <span
              aria-hidden="true"
              className={`w-3 text-xs text-slate-400 ${isOpen ? "rotate-90" : ""} transition-transform motion-reduce:transition-none`}
            >
              {isFolder ? "›" : ""}
            </span>
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className={`size-4 ${isFolder ? "text-amber-500" : "text-slate-400"}`}
              fill="currentColor"
            >
              {isFolder ? (
                <path d="M1.5 3.5A1.5 1.5 0 0 1 3 2h3.2l1.5 1.5H13A1.5 1.5 0 0 1 14.5 5v7.5A1.5 1.5 0 0 1 13 14H3a1.5 1.5 0 0 1-1.5-1.5Z" />
              ) : (
                <path d="M4 1.5h5l3.5 3.5v8.5A1 1 0 0 1 11.5 14.5h-7.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Zm5 0V5h3.5" />
              )}
            </svg>
            <span id={`${baseId}-${node.id}`}>{node.label}</span>
          </span>
          {isFolder && isOpen ? (
            <ul role="group">{renderNodes(node.children ?? [], level + 1)}</ul>
          ) : null}
        </li>
      );
    });
  }

  return (
    <ul
      role="tree"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className="rounded-xl border border-slate-200 bg-white p-1.5"
    >
      {renderNodes(nodes, 1)}
    </ul>
  );
}
