import { useState } from "react";
import { RatingTags } from "@/shared/ui/patterns/rating-tags/RatingTags";

const GOOD = ["친절해요", "빨라요", "안전 운전", "차가 깨끗해요"];
const BAD = ["늦게 왔어요", "불친절해요", "운전이 거칠어요"];

export function RatingTagsDemo() {
  const [stars, setStars] = useState(0);
  const [tags, setTags] = useState<readonly string[]>([]);
  const good = stars >= 4;

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">기사님은 어떠셨나요?</h3>
      <fieldset className="flex">
        <legend className="sr-only">별점</legend>
        {[1, 2, 3, 4, 5].map((score) => (
          <label key={score} className="cursor-pointer">
            <input
              type="radio"
              name="driver-stars"
              aria-label={`${score}점`}
              checked={stars === score}
              onChange={() => {
                if (score >= 4 !== good) setTags([]);
                setStars(score);
              }}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className={`block px-0.5 text-3xl leading-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 ${score <= stars ? "text-amber-400" : "text-slate-200"}`}
            >
              ★
            </span>
          </label>
        ))}
      </fieldset>
      {stars > 0 ? (
        <>
          <p className="text-sm text-slate-700">
            {good ? "좋았던 점을 골라 주세요" : "아쉬운 점을 골라 주세요"}
          </p>
          <RatingTags
            label={good ? "좋았던 점" : "아쉬운 점"}
            tags={good ? GOOD : BAD}
            selected={tags}
            onChange={setTags}
          />
        </>
      ) : null}
    </section>
  );
}
