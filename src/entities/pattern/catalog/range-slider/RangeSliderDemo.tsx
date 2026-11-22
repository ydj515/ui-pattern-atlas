import { useState } from "react";

import { RangeSlider } from "@/shared/ui/patterns/range-slider/RangeSlider";

const manwon = (value: number) => `${value / 10_000}만원`;

export function RangeSliderDemo() {
  const [range, setRange] = useState<readonly [number, number]>([30_000, 120_000]);

  return (
    <div className="w-full max-w-xs">
      <RangeSlider
        label="가격대"
        minLabel="최솟값"
        maxLabel="최댓값"
        min={0}
        max={200_000}
        step={10_000}
        value={range}
        onChange={setRange}
        format={manwon}
      />
    </div>
  );
}
