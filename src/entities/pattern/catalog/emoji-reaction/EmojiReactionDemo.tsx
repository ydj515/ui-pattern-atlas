import { useState } from "react";
import { EmojiReaction, type Reaction } from "@/shared/ui/patterns/emoji-reaction/EmojiReaction";

const CHOICES = [
  { emoji: "👍", name: "좋아요" },
  { emoji: "🎉", name: "축하" },
  { emoji: "😂", name: "웃겨요" },
  { emoji: "😮", name: "놀라워요" },
  { emoji: "🙏", name: "고마워요" },
];

export function EmojiReactionDemo() {
  const [reactions, setReactions] = useState<readonly Reaction[]>([
    { emoji: "👍", name: "좋아요", count: 3, mine: false },
    { emoji: "🎉", name: "축하", count: 1, mine: false },
  ]);

  function toggle(emoji: string) {
    setReactions((current) => {
      const found = current.find((reaction) => reaction.emoji === emoji);
      if (!found) {
        const choice = CHOICES.find((item) => item.emoji === emoji);
        return choice ? [...current, { ...choice, count: 1, mine: true }] : current;
      }
      return current.map((reaction) =>
        reaction.emoji === emoji
          ? { ...reaction, mine: !reaction.mine, count: reaction.count + (reaction.mine ? -1 : 1) }
          : reaction,
      );
    });
  }

  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs text-slate-500">도윤</p>
      <p className="mt-1 w-fit rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-slate-900 shadow-sm">
        회의 자료 올렸어요
      </p>
      <div className="mt-2">
        <EmojiReaction
          reactions={reactions}
          choices={CHOICES}
          onToggle={toggle}
          addLabel="반응 추가"
        />
      </div>
    </section>
  );
}
