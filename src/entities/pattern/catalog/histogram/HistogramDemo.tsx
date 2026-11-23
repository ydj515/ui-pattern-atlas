import { useState } from "react";
import { Histogram } from "@/shared/ui/patterns/histogram/Histogram";

/** 80 orders, in thousands of won. */
const ORDERS = [
  25, 33, 31, 14, 15, 21, 20, 33, 44, 21, 13, 16, 35, 31, 19, 38, 21, 28, 63, 18, 35, 38, 23, 17,
  48, 45, 43, 33, 28, 42, 22, 15, 22, 20, 15, 16, 41, 22, 11, 21, 20, 32, 15, 23, 30, 34, 26, 12,
  22, 26, 18, 33, 22, 26, 28, 25, 40, 30, 31, 82, 75, 22, 33, 25, 77, 19, 26, 18, 16, 56, 52, 22,
  22, 78, 49, 54, 43, 15, 54, 7,
];

const BINS = {
  narrow: { label: "1만 원씩", size: 10 },
  wide: { label: "2만 원씩", size: 20 },
};

export function HistogramDemo() {
  const [bins, setBins] = useState<keyof typeof BINS>("narrow");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">구간</legend>
        {(Object.keys(BINS) as (keyof typeof BINS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="histogram-bins"
              className="sr-only"
              checked={bins === id}
              onChange={() => setBins(id)}
            />
            {BINS[id].label}
          </label>
        ))}
      </fieldset>
      <Histogram
        title="주문 금액 분포"
        values={ORDERS}
        min={0}
        max={100}
        binSize={BINS[bins].size}
        formatBin={(start, end) => `${start / 10}~${end / 10}만 원`}
        formatCount={(count) => `${count}건`}
        formatEdge={(value) => `${value / 10}만 원`}
        tableLabel="표로 보기"
      />
    </section>
  );
}
