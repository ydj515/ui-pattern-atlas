import { useState } from "react";
import { Slide, type SlideFrom } from "@/shared/ui/patterns/slide/Slide";

// The card sits against the edge it comes from, so it starts fully outside the box.
const ALIGN: Record<SlideFrom, string> = {
  bottom: "items-end justify-center",
  top: "items-start justify-center",
  left: "items-center justify-start",
  right: "items-center justify-end",
};

const FROM: { value: SlideFrom; label: string }[] = [
  { value: "bottom", label: "아래에서" },
  { value: "top", label: "위에서" },
  { value: "left", label: "왼쪽에서" },
  { value: "right", label: "오른쪽에서" },
];

export function SlideDemo() {
  const [from, setFrom] = useState<SlideFrom>("bottom");
  const [show, setShow] = useState(false);

  return (
    <section className="w-full max-w-xs">
      <fieldset className="mb-3 grid grid-cols-4 gap-1 rounded-lg bg-slate-100 p-1 text-xs">
        <legend className="sr-only">나타나는 방향</legend>
        {FROM.map((item) => (
          <label
            key={item.value}
            className="cursor-pointer rounded-md py-1 text-center has-checked:bg-white has-checked:font-semibold has-checked:shadow-sm"
          >
            <input
              type="radio"
              name="slide-from"
              className="sr-only"
              checked={from === item.value}
              onChange={() => setFrom(item.value)}
            />
            {item.label}
          </label>
        ))}
      </fieldset>
      <div className={`flex h-32 overflow-hidden rounded-2xl bg-slate-100 ${ALIGN[from]}`}>
        <Slide show={show} from={from}>
          <div className="p-3">
            <p className="rounded-xl bg-white px-4 py-3 text-sm text-slate-900 shadow">
              새 메시지 1개
            </p>
          </div>
        </Slide>
      </div>
      <button
        type="button"
        aria-pressed={show}
        onClick={() => setShow((value) => !value)}
        className="mt-3 rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white"
      >
        {show ? "숨기기" : "보여 주기"}
      </button>
    </section>
  );
}
