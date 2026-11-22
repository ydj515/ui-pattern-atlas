import { useState } from "react";
import { RatingSlider } from "@/shared/ui/patterns/rating-slider/RatingSlider";

export function RatingSliderDemo() {
  const [value, setValue] = useState(5);
  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-5">
      <RatingSlider
        label="오늘 수업 만족도"
        value={value}
        onChange={setValue}
        min={0}
        max={10}
        lowLabel="아쉬웠어요"
        highLabel="최고였어요"
        format={(score) => `${score}점`}
      />
    </section>
  );
}
