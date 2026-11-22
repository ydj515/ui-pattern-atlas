import { useState } from "react";

import { MultiSelect } from "@/shared/ui/patterns/multi-select/MultiSelect";

const TEAMS = ["디자인", "개발", "마케팅", "영업", "운영"] as const;

export function MultiSelectDemo() {
  const [teams, setTeams] = useState<readonly string[]>([]);

  return (
    <div className="w-full max-w-xs pb-44">
      <MultiSelect
        label="담당 팀"
        placeholder="팀을 고르세요"
        removeLabel={(team) => `${team} 빼기`}
        summary={(count) => `${count}개 선택`}
        options={TEAMS}
        selected={teams}
        onChange={setTeams}
      />
    </div>
  );
}
