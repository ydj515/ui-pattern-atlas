import { useState } from "react";

import { Listbox } from "@/shared/ui/patterns/listbox/Listbox";

const SOUNDS = [
  { value: "default", label: "기본", description: "짧은 알림음" },
  { value: "bell", label: "맑은 종소리", description: "두 번 울려요" },
  { value: "vibrate", label: "짧은 진동", description: "소리 없이 진동만" },
  { value: "silent", label: "무음", description: "알림만 쌓여요" },
] as const;

export function ListboxDemo() {
  const [sound, setSound] = useState<string>("default");

  return (
    <div className="w-full max-w-xs space-y-2">
      <Listbox label="알림 소리" options={SOUNDS} value={sound} onChange={setSound} />
      <p className="text-xs text-slate-500">목록을 누른 뒤 ↑ ↓ 키로도 고를 수 있어요</p>
    </div>
  );
}
