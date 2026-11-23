import { useState } from "react";
import { Treemap } from "@/shared/ui/patterns/treemap/Treemap";

const DEVICES = {
  phone: {
    label: "휴대폰",
    data: [
      ["사진", 42],
      ["동영상", 28],
      ["앱", 18],
      ["문서", 6],
      ["기타", 6],
    ],
  },
  tablet: {
    label: "태블릿",
    data: [
      ["동영상", 48],
      ["앱", 22],
      ["사진", 14],
      ["문서", 10],
      ["기타", 6],
    ],
  },
} as const;

export function TreemapDemo() {
  const [device, setDevice] = useState<keyof typeof DEVICES>("phone");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">기기</legend>
        {(Object.keys(DEVICES) as (keyof typeof DEVICES)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="treemap-device"
              className="sr-only"
              checked={device === id}
              onChange={() => setDevice(id)}
            />
            {DEVICES[id].label}
          </label>
        ))}
      </fieldset>
      <Treemap
        title="저장 공간"
        data={DEVICES[device].data.map(([label, value]) => ({ label, value }))}
        format={(value) => `${value}GB`}
        tableLabel="표로 보기"
      />
    </section>
  );
}
