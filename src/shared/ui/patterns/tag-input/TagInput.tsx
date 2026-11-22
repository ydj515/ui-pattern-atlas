import { useId, useRef, useState, type KeyboardEvent } from "react";

export interface TagInputProps {
  readonly label: string;
  readonly tags: readonly string[];
  readonly onChange: (tags: readonly string[]) => void;
  readonly placeholder?: string;
  readonly maxTags?: number;
  /** Name for each remove button, e.g. (tag) => `${tag} 삭제`. */
  readonly removeLabel?: (tag: string) => string;
  /** Live announcement after a change. */
  readonly announce?: (tag: string, action: "added" | "removed") => string;
}

/**
 * Field that turns typed words into chips. Enter or a comma adds a tag, Backspace in
 * an empty field removes the last one, and every chip has its own remove button.
 * Enter is ignored while an IME (Korean, Japanese) is still composing a word.
 */
export function TagInput({
  label,
  tags,
  onChange,
  placeholder,
  maxTags = 10,
  removeLabel = (tag) => `${tag} 삭제`,
  announce = (tag, action) => `${tag} 태그를 ${action === "added" ? "추가했어요" : "삭제했어요"}`,
}: TagInputProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState("");
  const [message, setMessage] = useState("");

  function add(raw: string) {
    const tag = raw.trim().replace(/,$/, "");
    if (!tag || tags.includes(tag) || tags.length >= maxTags) return;
    onChange([...tags, tag]);
    setMessage(announce(tag, "added"));
    setDraft("");
  }

  function remove(tag: string) {
    onChange(tags.filter((item) => item !== tag));
    setMessage(announce(tag, "removed"));
    inputRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      add(draft);
    } else if (event.key === "Backspace" && draft === "" && tags.length > 0) {
      remove(tags[tags.length - 1]!);
    }
  }

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
      </label>
      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-2 py-1.5 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-slate-100 py-0.5 pr-1 pl-2.5 text-sm text-slate-800"
          >
            {tag}
            <button
              type="button"
              aria-label={removeLabel(tag)}
              onClick={() => remove(tag)}
              className="grid size-5 place-items-center rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800"
            >
              <span aria-hidden="true">×</span>
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          id={id}
          value={draft}
          placeholder={tags.length === 0 ? placeholder : undefined}
          onChange={(event) => {
            const next = event.target.value;
            if (next.endsWith(",")) add(next);
            else setDraft(next);
          }}
          onKeyDown={handleKeyDown}
          onBlur={() => add(draft)}
          className="min-w-24 flex-1 py-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
      </div>
      <p role="status" className="sr-only">
        {message}
      </p>
    </div>
  );
}
