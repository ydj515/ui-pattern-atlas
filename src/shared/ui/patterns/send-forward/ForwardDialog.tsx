import { useId, useState } from "react";

export interface ForwardContact {
  readonly id: string;
  readonly name: string;
}

export interface ForwardDialogProps {
  readonly title: string;
  readonly contacts: readonly ForwardContact[];
  readonly onSend: (ids: readonly string[], note: string) => void;
  readonly onClose: () => void;
  readonly searchLabel?: string;
  readonly noteLabel?: string;
  readonly sendLabel?: (count: number) => string;
  readonly closeLabel?: string;
}

/**
 * Picker for sending an existing item on: search, tick several people, add an
 * optional note, then one send button that says how many will get it.
 */
export function ForwardDialog({
  title,
  contacts,
  onSend,
  onClose,
  searchLabel = "이름 검색",
  noteLabel = "메시지 덧붙이기",
  sendLabel = (count) => `${count}명에게 보내기`,
  closeLabel = "닫기",
}: ForwardDialogProps) {
  const id = useId();
  const [query, setQuery] = useState("");
  const [picked, setPicked] = useState<readonly string[]>([]);
  const [note, setNote] = useState("");
  const shown = contacts.filter((contact) => contact.name.includes(query.trim()));

  return (
    <section
      role="dialog"
      aria-labelledby={id}
      className="grid gap-2 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200"
    >
      <h2 id={id} className="text-base font-bold text-slate-900">
        {title}
      </h2>
      <input
        type="search"
        aria-label={searchLabel}
        placeholder={searchLabel}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
      />
      <fieldset className="max-h-32 overflow-y-auto">
        <legend className="sr-only">받는 사람</legend>
        {shown.map((contact) => (
          <label
            key={contact.id}
            className="flex items-center gap-2 rounded-lg px-1 py-1.5 text-sm hover:bg-slate-50"
          >
            <input
              type="checkbox"
              checked={picked.includes(contact.id)}
              onChange={() =>
                setPicked((current) =>
                  current.includes(contact.id)
                    ? current.filter((item) => item !== contact.id)
                    : [...current, contact.id],
                )
              }
              className="size-4 accent-blue-600"
            />
            <span
              aria-hidden="true"
              className="grid size-6 place-items-center rounded-full bg-slate-200 text-xs"
            >
              {contact.name[0]}
            </span>
            {contact.name}
          </label>
        ))}
      </fieldset>
      <input
        aria-label={noteLabel}
        placeholder={noteLabel}
        value={note}
        onChange={(event) => setNote(event.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
        >
          {closeLabel}
        </button>
        <button
          type="button"
          disabled={!picked.length}
          onClick={() => onSend(picked, note)}
          className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white disabled:bg-slate-300"
        >
          {sendLabel(picked.length)}
        </button>
      </div>
    </section>
  );
}
