import { useState } from "react";

import { ColorPicker } from "@/shared/ui/patterns/color-picker/ColorPicker";

const COLORS = [
  { value: "#2563eb", name: "파랑" },
  { value: "#16a34a", name: "초록" },
  { value: "#ea580c", name: "주황" },
  { value: "#9333ea", name: "보라" },
  { value: "#475569", name: "회색" },
] as const;

export function ColorPickerDemo() {
  const [color, setColor] = useState<string>("#2563eb");

  return (
    <div className="w-full max-w-xs space-y-4">
      <ColorPicker
        label="태그 색"
        colors={COLORS}
        value={color}
        onChange={setColor}
        customLabel="직접 고르기"
      />
      <p className="text-sm text-slate-600">
        미리 보기{" "}
        <span
          className="ml-1 rounded-full px-2.5 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: color }}
        >
          디자인
        </span>
      </p>
    </div>
  );
}
