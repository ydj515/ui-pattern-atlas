import { useState } from "react";

import { CardGrid } from "@/shared/ui/patterns/card-grid/CardGrid";

const PRODUCTS = [
  { name: "머그컵", price: "12,000원" },
  { name: "두껍고 따뜻한 겨울용 니트 머플러", price: "29,000원" },
  { name: "노트", price: "6,000원" },
] as const;

export function CardGridDemo() {
  const [aligned, setAligned] = useState(true);

  return (
    <div className="w-full max-w-md space-y-2">
      <CardGrid label="추천 상품" columns={3}>
        {PRODUCTS.map((product) => (
          <li key={product.name} className="rounded-xl border border-slate-200 bg-white p-3">
            <div aria-hidden="true" className="h-14 rounded-lg bg-slate-100" />
            <p className="mt-2 text-sm font-medium text-slate-900">{product.name}</p>
            <p className="text-xs text-slate-500">{product.price}</p>
            <button
              type="button"
              className={`${aligned ? "mt-auto" : ""} rounded-md border border-slate-300 py-1 text-xs`}
              style={{ marginTop: aligned ? undefined : 8 }}
            >
              담기
            </button>
          </li>
        ))}
      </CardGrid>
      <label className="flex items-center justify-end gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          checked={aligned}
          onChange={(event) => setAligned(event.target.checked)}
        />
        버튼 줄 맞추기
      </label>
    </div>
  );
}
