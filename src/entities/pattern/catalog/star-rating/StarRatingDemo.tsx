import { useState } from "react";
import { StarRating } from "@/shared/ui/patterns/star-rating/StarRating";

export function StarRatingDemo() {
  const [value, setValue] = useState(0);
  const [half, setHalf] = useState(false);
  return (
    <section className="grid w-72 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">린넨 셔츠 어땠나요?</h3>
      <StarRating
        label="별점"
        value={value}
        onChange={setValue}
        step={half ? 0.5 : 1}
        format={(score) => `${score}점`}
      />
      <label className="flex items-center gap-2 text-xs text-slate-700">
        <input
          type="checkbox"
          checked={half}
          onChange={(event) => {
            setHalf(event.currentTarget.checked);
            setValue(0);
          }}
        />
        반 단위로 주기
      </label>
    </section>
  );
}
