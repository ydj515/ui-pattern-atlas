import { useState } from "react";

const PIXEL_PATH =
  "M3 0h1v1h-1zM4 0h1v1h-1zM5 0h1v1h-1zM6 0h1v1h-1zM7 0h1v1h-1zM8 0h1v1h-1zM9 0h1v1h-1zM10 0h1v1h-1zM20 0h1v1h-1zM21 0h1v1h-1zM35 0h1v1h-1zM45 0h1v1h-1zM47 0h1v1h-1zM48 0h1v1h-1zM2 1h1v1h-1zM3 1h1v1h-1zM4 1h1v1h-1zM5 1h1v1h-1zM6 1h1v1h-1zM7 1h1v1h-1zM8 1h1v1h-1zM9 1h1v1h-1zM10 1h1v1h-1zM13 1h1v1h-1zM14 1h1v1h-1zM15 1h1v1h-1zM16 1h1v1h-1zM17 1h1v1h-1zM20 1h1v1h-1zM21 1h1v1h-1zM28 1h1v1h-1zM29 1h1v1h-1zM30 1h1v1h-1zM31 1h1v1h-1zM32 1h1v1h-1zM35 1h1v1h-1zM39 1h1v1h-1zM40 1h1v1h-1zM41 1h1v1h-1zM42 1h1v1h-1zM43 1h1v1h-1zM45 1h1v1h-1zM47 1h1v1h-1zM48 1h1v1h-1zM5 2h1v1h-1zM6 2h1v1h-1zM7 2h1v1h-1zM13 2h1v1h-1zM14 2h1v1h-1zM17 2h1v1h-1zM20 2h1v1h-1zM21 2h1v1h-1zM22 2h1v1h-1zM28 2h1v1h-1zM31 2h1v1h-1zM32 2h1v1h-1zM35 2h1v1h-1zM42 2h1v1h-1zM43 2h1v1h-1zM45 2h1v1h-1zM47 2h1v1h-1zM48 2h1v1h-1zM4 3h1v1h-1zM5 3h1v1h-1zM7 3h1v1h-1zM8 3h1v1h-1zM9 3h1v1h-1zM13 3h1v1h-1zM14 3h1v1h-1zM17 3h1v1h-1zM20 3h1v1h-1zM21 3h1v1h-1zM22 3h1v1h-1zM28 3h1v1h-1zM32 3h1v1h-1zM35 3h1v1h-1zM39 3h1v1h-1zM40 3h1v1h-1zM41 3h1v1h-1zM42 3h1v1h-1zM43 3h1v1h-1zM44 3h1v1h-1zM45 3h1v1h-1zM47 3h1v1h-1zM48 3h1v1h-1zM2 4h1v1h-1zM3 4h1v1h-1zM4 4h1v1h-1zM8 4h1v1h-1zM9 4h1v1h-1zM10 4h1v1h-1zM13 4h1v1h-1zM14 4h1v1h-1zM15 4h1v1h-1zM16 4h1v1h-1zM17 4h1v1h-1zM20 4h1v1h-1zM21 4h1v1h-1zM28 4h1v1h-1zM32 4h1v1h-1zM35 4h1v1h-1zM36 4h1v1h-1zM37 4h1v1h-1zM39 4h1v1h-1zM40 4h1v1h-1zM41 4h1v1h-1zM42 4h1v1h-1zM44 4h1v1h-1zM45 4h1v1h-1zM47 4h1v1h-1zM48 4h1v1h-1zM13 5h1v1h-1zM14 5h1v1h-1zM15 5h1v1h-1zM16 5h1v1h-1zM17 5h1v1h-1zM20 5h1v1h-1zM21 5h1v1h-1zM28 5h1v1h-1zM32 5h1v1h-1zM35 5h1v1h-1zM36 5h1v1h-1zM37 5h1v1h-1zM40 5h1v1h-1zM41 5h1v1h-1zM45 5h1v1h-1zM47 5h1v1h-1zM48 5h1v1h-1zM2 6h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1zM5 6h1v1h-1zM6 6h1v1h-1zM7 6h1v1h-1zM8 6h1v1h-1zM9 6h1v1h-1zM10 6h1v1h-1zM11 6h1v1h-1zM14 6h1v1h-1zM15 6h1v1h-1zM16 6h1v1h-1zM17 6h1v1h-1zM18 6h1v1h-1zM19 6h1v1h-1zM20 6h1v1h-1zM28 6h1v1h-1zM32 6h1v1h-1zM35 6h1v1h-1zM39 6h1v1h-1zM40 6h1v1h-1zM41 6h1v1h-1zM45 6h1v1h-1zM47 6h1v1h-1zM48 6h1v1h-1zM1 7h1v1h-1zM2 7h1v1h-1zM3 7h1v1h-1zM4 7h1v1h-1zM5 7h1v1h-1zM6 7h1v1h-1zM7 7h1v1h-1zM8 7h1v1h-1zM9 7h1v1h-1zM10 7h1v1h-1zM11 7h1v1h-1zM14 7h1v1h-1zM15 7h1v1h-1zM16 7h1v1h-1zM17 7h1v1h-1zM18 7h1v1h-1zM19 7h1v1h-1zM20 7h1v1h-1zM21 7h1v1h-1zM28 7h1v1h-1zM29 7h1v1h-1zM31 7h1v1h-1zM32 7h1v1h-1zM35 7h1v1h-1zM39 7h1v1h-1zM44 7h1v1h-1zM47 7h1v1h-1zM6 8h1v1h-1zM20 8h1v1h-1zM21 8h1v1h-1zM28 8h1v1h-1zM29 8h1v1h-1zM30 8h1v1h-1zM31 8h1v1h-1zM32 8h1v1h-1zM35 8h1v1h-1zM43 8h1v1h-1zM44 8h1v1h-1zM45 8h1v1h-1zM6 9h1v1h-1zM14 9h1v1h-1zM15 9h1v1h-1zM16 9h1v1h-1zM17 9h1v1h-1zM18 9h1v1h-1zM19 9h1v1h-1zM20 9h1v1h-1zM21 9h1v1h-1zM35 9h1v1h-1zM43 9h1v1h-1zM44 9h1v1h-1zM45 9h1v1h-1zM6 10h1v1h-1zM14 10h1v1h-1zM15 10h1v1h-1zM35 10h1v1h-1zM41 10h1v1h-1zM42 10h1v1h-1zM43 10h1v1h-1zM45 10h1v1h-1zM46 10h1v1h-1zM47 10h1v1h-1zM6 11h1v1h-1zM14 11h1v1h-1zM15 11h1v1h-1zM16 11h1v1h-1zM17 11h1v1h-1zM18 11h1v1h-1zM19 11h1v1h-1zM20 11h1v1h-1zM21 11h1v1h-1zM35 11h1v1h-1zM40 11h1v1h-1zM41 11h1v1h-1zM47 11h1v1h-1zM48 11h1v1h-1z";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 픽셀. */
export function PixelTypographyDemo() {
  const [mode, setMode] = useState<"styled" | "plain">("styled");
  return (
    <section className="grid w-80 gap-3">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-xs">
        <legend className="sr-only">비교</legend>
        {MODES.map(([value, label]) => (
          <label
            key={value}
            className="flex-1 cursor-pointer rounded-md py-1.5 text-center has-checked:bg-white has-checked:font-semibold has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="pixel-typography-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-slate-900">
        {mode === "styled" ? (
          <svg
            role="img"
            aria-label="주말 마켓"
            viewBox="0 0 50 12"
            className="h-24 w-[25rem] max-w-full fill-emerald-400"
            shapeRendering="crispEdges"
          >
            <path d={PIXEL_PATH} />
          </svg>
        ) : (
          <p className="text-5xl text-white">주말 마켓</p>
        )}
        <p className="text-xs text-emerald-300">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
