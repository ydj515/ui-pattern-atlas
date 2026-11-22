import { useState } from "react";

import { Select } from "@/shared/ui/patterns/select/Select";

const REGIONS = [
  { value: "seoul", label: "서울" },
  { value: "busan", label: "부산" },
  { value: "daegu", label: "대구" },
  { value: "ulleungdo", label: "울릉도" },
] as const;

export function SelectDemo() {
  const [region, setRegion] = useState("");

  return (
    <div className="w-full max-w-xs space-y-2">
      <Select
        label="지역"
        placeholder="지역을 고르세요"
        hint="배송비가 지역마다 달라요"
        options={REGIONS}
        value={region}
        onChange={setRegion}
      />
      <p role="status" className="min-h-5 text-sm text-slate-700">
        {region === ""
          ? ""
          : region === "ulleungdo"
            ? "울릉도는 배송비 3,000원이 더 붙어요"
            : "기본 배송비가 적용돼요"}
      </p>
    </div>
  );
}
