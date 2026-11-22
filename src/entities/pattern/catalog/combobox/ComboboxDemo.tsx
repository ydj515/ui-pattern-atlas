import { useState } from "react";

import { Combobox } from "@/shared/ui/patterns/combobox/Combobox";

const CITIES = [
  "서울",
  "부산",
  "인천",
  "대구",
  "대전",
  "광주",
  "울산",
  "세종",
  "수원",
  "울릉도",
] as const;

export function ComboboxDemo() {
  const [city, setCity] = useState("");

  return (
    <div className="w-full max-w-xs space-y-2 pb-40">
      <Combobox
        label="도시"
        placeholder="도시 이름을 입력하세요"
        emptyText="일치하는 도시가 없어요"
        options={CITIES}
        value={city}
        onChange={setCity}
      />
      <p className="text-sm text-slate-600">{city ? `선택한 도시: ${city}` : ""}</p>
    </div>
  );
}
