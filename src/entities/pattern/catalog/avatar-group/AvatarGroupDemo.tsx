import { useState } from "react";

import { AvatarGroup } from "@/shared/ui/patterns/avatar-group/AvatarGroup";

const TEAM = ["김하늘", "이도윤", "박서준", "최유나", "정민호", "한지우"] as const;

export function AvatarGroupDemo() {
  const [count, setCount] = useState(5);

  return (
    <div className="flex w-full max-w-xs items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
      <div>
        <p className="text-sm font-semibold text-slate-900">디자인 시스템</p>
        <p className="text-xs text-slate-500">참여 {count}명</p>
      </div>
      <div className="flex items-center gap-2">
        <AvatarGroup
          people={TEAM.slice(0, count)}
          max={3}
          summary={(shown, rest) =>
            rest > 0 ? `${shown.join(", ")} 외 ${rest}명` : shown.join(", ")
          }
        />
        <button
          type="button"
          aria-label="참여자 추가"
          disabled={count === TEAM.length}
          onClick={() => setCount((value) => value + 1)}
          className="grid size-9 place-items-center rounded-full border border-dashed border-slate-300 text-slate-500 disabled:opacity-40"
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  );
}
