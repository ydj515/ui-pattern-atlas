import { useState } from "react";

import { Slider } from "@/shared/ui/patterns/slider/Slider";

const PRICES = [
  12_000, 18_000, 25_000, 33_000, 41_000, 52_000, 58_000, 64_000, 77_000, 89_000,
] as const;
const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;

export function SliderDemo() {
  const [maxPrice, setMaxPrice] = useState(30_000);
  const count = PRICES.filter((price) => price <= maxPrice).length;

  return (
    <div className="w-full max-w-xs space-y-3">
      <Slider
        label="최대 가격"
        min={10_000}
        max={100_000}
        step={5_000}
        value={maxPrice}
        onChange={setMaxPrice}
        format={won}
      />
      <p aria-live="polite" className="text-sm text-slate-600">
        조건에 맞는 상품 {count}개
      </p>
    </div>
  );
}
