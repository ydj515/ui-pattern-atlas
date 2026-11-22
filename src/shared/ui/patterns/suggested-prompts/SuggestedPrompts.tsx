export interface SuggestedPromptsProps {
  readonly label: string;
  readonly prompts: readonly string[];
  readonly onPick: (prompt: string) => void;
}

/**
 * A few example questions shown while the conversation is empty. Each is a button
 * that asks it right away, so people learn what the assistant is good at by trying.
 */
export function SuggestedPrompts({ label, prompts, onPick }: SuggestedPromptsProps) {
  return (
    <section aria-label={label}>
      <ul className="grid gap-2">
        {prompts.map((prompt) => (
          <li key={prompt}>
            <button
              type="button"
              onClick={() => onPick(prompt)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-800 hover:border-slate-300 hover:bg-slate-50"
            >
              {prompt}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
