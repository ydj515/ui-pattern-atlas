import { useEffect, useId, useRef, useState } from "react";

export interface Command {
  readonly id: string;
  readonly label: string;
  /** Heading the command is listed under, e.g. "문서". */
  readonly group: string;
  /** Extra words that should find this command, e.g. ["멤버", "invite"]. */
  readonly keywords?: readonly string[];
  /** Shortcut hint shown on the right, e.g. "⌘N". Display only. */
  readonly shortcut?: string;
}

export interface CommandPaletteProps {
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly commands: readonly Command[];
  readonly onRun: (id: string) => void;
  readonly label?: string;
  readonly placeholder?: string;
  readonly emptyText?: (query: string) => string;
}

/**
 * Opens the palette with ⌘K (Ctrl+K elsewhere). Register it once, near the app root;
 * the handler should toggle the palette's `open` state.
 */
export function useCommandShortcut(onTrigger: () => void) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && !event.altKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onTrigger();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onTrigger]);
}

/**
 * Searchable command list in a modal dialog. Type to filter by label or keyword,
 * ↑/↓ to move, Enter to run, Escape or a backdrop click to close.
 *
 * The input is a combobox that controls a grouped listbox; the highlighted command is
 * exposed with aria-activedescendant so focus never leaves the input.
 */
export function CommandPalette({
  open,
  onOpenChange,
  commands,
  onRun,
  label = "명령 팔레트",
  placeholder = "명령 검색",
  emptyText = (query) => `'${query}'에 맞는 명령이 없어요`,
}: CommandPaletteProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      dialog.querySelector("input")?.focus();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={label}
      onCancel={(event) => {
        event.preventDefault();
        onOpenChange(false);
      }}
      onClose={() => {
        if (open) onOpenChange(false);
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onOpenChange(false);
      }}
      className="mx-auto mt-24 w-[min(32rem,calc(100%-2rem))] rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/40"
    >
      {/* Mounted only while open, so every opening starts with an empty query. */}
      {open ? (
        <PaletteBody
          commands={commands}
          placeholder={placeholder}
          emptyText={emptyText}
          onRun={(id) => {
            onOpenChange(false);
            onRun(id);
          }}
        />
      ) : null}
    </dialog>
  );
}

function matches(command: Command, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (needle === "") return true;
  return [command.label, ...(command.keywords ?? [])].some((text) =>
    text.toLowerCase().includes(needle),
  );
}

function PaletteBody({
  commands,
  placeholder,
  emptyText,
  onRun,
}: {
  readonly commands: readonly Command[];
  readonly placeholder: string;
  readonly emptyText: (query: string) => string;
  readonly onRun: (id: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const results = commands.filter((command) => matches(command, query));
  const active = Math.min(activeIndex, results.length - 1);
  const activeCommand = results[active];
  const groups = [...new Set(results.map((command) => command.group))];
  const optionId = (command: Command) => `${baseId}-option-${command.id}`;

  useEffect(() => {
    if (!activeCommand) return;
    document
      .getElementById(`${baseId}-option-${activeCommand.id}`)
      ?.scrollIntoView?.({ block: "nearest" });
  }, [activeCommand, baseId]);

  return (
    <div>
      <input
        type="text"
        role="combobox"
        aria-label={placeholder}
        aria-expanded={results.length > 0}
        aria-controls={`${baseId}-listbox`}
        aria-activedescendant={activeCommand ? optionId(activeCommand) : undefined}
        aria-autocomplete="list"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setActiveIndex(0);
        }}
        onKeyDown={(event) => {
          // Ignore keys that confirm Korean (or other IME) composition.
          if (event.nativeEvent.isComposing) return;
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setActiveIndex(Math.min(active + 1, results.length - 1));
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActiveIndex(Math.max(active - 1, 0));
          } else if (event.key === "Enter" && activeCommand) {
            event.preventDefault();
            onRun(activeCommand.id);
          }
        }}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        className="h-14 w-full border-b border-slate-200 bg-transparent px-4 text-base outline-none placeholder:text-slate-400"
      />
      {results.length > 0 ? (
        <div
          id={`${baseId}-listbox`}
          role="listbox"
          aria-label="명령"
          className="max-h-80 overflow-y-auto p-2"
        >
          {groups.map((group) => (
            <div key={group} role="group" aria-labelledby={`${baseId}-group-${group}`}>
              <div
                id={`${baseId}-group-${group}`}
                role="presentation"
                className="px-3 pt-2 pb-1 text-xs font-medium text-slate-500"
              >
                {group}
              </div>
              {results
                .filter((command) => command.group === group)
                .map((command) => {
                  const index = results.indexOf(command);
                  return (
                    <div
                      key={command.id}
                      id={optionId(command)}
                      role="option"
                      aria-selected={index === active}
                      onPointerMove={() => setActiveIndex(index)}
                      onClick={() => onRun(command.id)}
                      className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 aria-selected:bg-slate-100 aria-selected:text-slate-900"
                    >
                      {command.label}
                      {command.shortcut ? (
                        <kbd className="font-sans text-xs text-slate-400">{command.shortcut}</kbd>
                      ) : null}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      ) : (
        <p className="px-4 py-8 text-center text-sm text-slate-500">{emptyText(query)}</p>
      )}
    </div>
  );
}
