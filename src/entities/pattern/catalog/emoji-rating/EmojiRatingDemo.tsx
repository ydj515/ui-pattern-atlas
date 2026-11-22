import { useState } from "react";
import { EmojiRating } from "@/shared/ui/patterns/emoji-rating/EmojiRating";

export function EmojiRatingDemo() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-5">
      <EmojiRating
        question="배송은 어떠셨나요?"
        value={value}
        onChange={setValue}
        labels={["매우 불만족", "불만족", "보통", "만족", "매우 만족"]}
      />
    </section>
  );
}
