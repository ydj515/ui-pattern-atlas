import { useState } from "react";

export interface Reaction {
  readonly emoji: string;
  /** Spoken name, e.g. "축하". */
  readonly name: string;
  readonly count: number;
  readonly mine: boolean;
}

export interface EmojiReactionProps {
  readonly reactions: readonly Reaction[];
  readonly choices: readonly { readonly emoji: string; readonly name: string }[];
  readonly onToggle: (emoji: string) => void;
  readonly addLabel?: string;
}

/**
 * Row of reaction chips under a message: each shows its emoji and count, and pressing
 * one adds or removes your own. A small picker adds a new one. Chips are toggle
 * buttons named like "축하 3명, 나도 반응함".
 */
export function EmojiReaction({
  reactions,
  choices,
  onToggle,
  addLabel = "반응 추가",
}: EmojiReactionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex flex-wrap items-center gap-1.5">
      {reactions
        .filter((reaction) => reaction.count > 0)
        .map((reaction) => (
          <button
            key={reaction.emoji}
            type="button"
            aria-pressed={reaction.mine}
            aria-label={`${reaction.name} ${reaction.count}명`}
            onClick={() => onToggle(reaction.emoji)}
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-sm aria-pressed:border-blue-500 aria-pressed:bg-blue-50"
          >
            <span aria-hidden="true">{reaction.emoji}</span>
            <span className="text-xs text-slate-700 tabular-nums">{reaction.count}</span>
          </button>
        ))}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-7 items-center justify-center rounded-full border border-dashed border-slate-300 text-slate-500 hover:bg-slate-50"
      >
        <span aria-hidden="true">+</span>
        <span className="sr-only">{addLabel}</span>
      </button>
      {open ? (
        <div
          role="group"
          aria-label={addLabel}
          onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
          className="absolute top-full left-0 z-10 mt-1 flex gap-1 rounded-full bg-white p-1 shadow-lg ring-1 ring-slate-200"
        >
          {choices.map((choice, index) => (
            <button
              key={choice.emoji}
              type="button"
              autoFocus={index === 0}
              aria-label={choice.name}
              onClick={() => {
                onToggle(choice.emoji);
                setOpen(false);
              }}
              className="grid size-8 place-items-center rounded-full text-lg hover:bg-slate-100"
            >
              <span aria-hidden="true">{choice.emoji}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
