import { useState } from "react";

import { ToggleButton } from "@/shared/ui/patterns/toggle-button/ToggleButton";

export function ToggleButtonDemo() {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white">
      <div
        role="toolbar"
        aria-label="글자 모양"
        className="flex gap-1 border-b border-slate-100 p-1.5"
      >
        <ToggleButton label="굵게" pressed={bold} onChange={setBold}>
          <span className="font-bold">B</span>
        </ToggleButton>
        <ToggleButton label="기울임" pressed={italic} onChange={setItalic}>
          <span className="font-serif italic">I</span>
        </ToggleButton>
        <ToggleButton label="밑줄" pressed={underline} onChange={setUnderline}>
          <span className="underline">U</span>
        </ToggleButton>
      </div>
      <p
        className={`p-4 text-sm text-slate-800 ${bold ? "font-bold" : ""} ${italic ? "italic" : ""} ${underline ? "underline" : ""}`}
      >
        오늘 회의는 3시에 시작해요
      </p>
    </div>
  );
}
