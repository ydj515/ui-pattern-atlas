import { useEffect, useId, useRef, useState } from "react";

export interface EditPromptProps {
  readonly text: string;
  readonly onSubmit: (text: string) => void;
  readonly labels?: {
    readonly edit: string;
    readonly cancel: string;
    readonly send: string;
    readonly field: string;
  };
}

const DEFAULT_LABELS = { edit: "수정", cancel: "취소", send: "보내기", field: "질문 수정" };

/**
 * Sent question that can be edited in place. 수정 turns the bubble into a text box with
 * the old text; 보내기 asks again from that point, and 취소 or Escape restores the
 * original without changing anything.
 */
export function EditPrompt({ text, onSubmit, labels = DEFAULT_LABELS }: EditPromptProps) {
  const id = useId();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(text);
  const fieldRef = useRef<HTMLTextAreaElement>(null);
  const editRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (editing) {
      fieldRef.current?.focus();
      fieldRef.current?.select();
    }
  }, [editing]);

  function cancel() {
    setDraft(text);
    setEditing(false);
    requestAnimationFrame(() => editRef.current?.focus());
  }

  if (editing) {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!draft.trim()) return;
          onSubmit(draft.trim());
          setEditing(false);
        }}
        className="ml-auto grid w-full max-w-[85%] gap-2 rounded-2xl bg-slate-100 p-2"
      >
        <label htmlFor={id} className="sr-only">
          {labels.field}
        </label>
        <textarea
          id={id}
          ref={fieldRef}
          rows={2}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => event.key === "Escape" && cancel()}
          className="resize-none rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm"
        />
        <div className="flex justify-end gap-1">
          <button
            type="button"
            onClick={cancel}
            className="rounded-md px-2 py-1 text-xs text-slate-600 hover:bg-slate-200"
          >
            {labels.cancel}
          </button>
          <button
            type="submit"
            className="rounded-md bg-slate-900 px-2 py-1 text-xs font-semibold text-white"
          >
            {labels.send}
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="group ml-auto flex max-w-[85%] items-center gap-1 self-end">
      <button
        ref={editRef}
        type="button"
        onClick={() => setEditing(true)}
        className="rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
      >
        {labels.edit}
      </button>
      <p className="rounded-2xl rounded-br-sm bg-slate-900 px-3 py-2 text-sm text-white">{text}</p>
    </div>
  );
}
