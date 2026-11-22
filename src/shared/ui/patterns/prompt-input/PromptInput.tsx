import { useId, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";

export interface PromptInputProps {
  readonly onSend: (text: string) => void;
  readonly onStop: () => void;
  /** True while an answer is being generated. */
  readonly generating: boolean;
  readonly placeholder?: string;
  readonly label?: string;
  readonly attach?: ReactNode;
  readonly sendLabel?: string;
  readonly stopLabel?: string;
}

/**
 * Message box that grows with its text up to a few lines. Enter sends and Shift+Enter
 * adds a line; while an answer is generating, the send button turns into a stop
 * button in the same place, so it is easy to find.
 */
export function PromptInput({
  onSend,
  onStop,
  generating,
  placeholder = "무엇이든 물어보세요",
  label = "메시지",
  attach,
  sendLabel = "보내기",
  stopLabel = "멈추기",
}: PromptInputProps) {
  const id = useId();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");

  function send(event?: FormEvent) {
    event?.preventDefault();
    if (generating || !text.trim()) return;
    onSend(text.trim());
    setText("");
    if (ref.current) ref.current.style.height = "";
  }

  function handleKey(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      send();
    }
  }

  return (
    <form
      onSubmit={send}
      className="flex items-end gap-2 rounded-2xl border border-slate-300 bg-white p-2 focus-within:ring-2 focus-within:ring-blue-600"
    >
      {attach}
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        ref={ref}
        id={id}
        rows={1}
        value={text}
        placeholder={placeholder}
        onChange={(event) => {
          setText(event.target.value);
          event.target.style.height = "auto";
          event.target.style.height = `${Math.min(event.target.scrollHeight, 120)}px`;
        }}
        onKeyDown={handleKey}
        className="max-h-30 min-h-8 flex-1 resize-none bg-transparent px-1 py-1.5 text-sm outline-none"
      />
      {generating ? (
        <button
          type="button"
          onClick={onStop}
          aria-label={stopLabel}
          className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-900 text-white"
        >
          <span aria-hidden="true" className="size-2.5 rounded-sm bg-white" />
        </button>
      ) : (
        <button
          type="submit"
          disabled={!text.trim()}
          aria-label={sendLabel}
          className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-900 text-white disabled:bg-slate-300"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-4 fill-none stroke-current stroke-[2.5]"
          >
            <path d="M12 19V5M6 11l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </form>
  );
}
