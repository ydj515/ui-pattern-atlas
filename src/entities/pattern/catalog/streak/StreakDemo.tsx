import { useState } from "react";
import { Streak } from "@/shared/ui/patterns/streak/Streak";

const WEEK = ["월", "화", "수", "목", "금", "토", "일"];
const TODAY = 3;

export function StreakDemo() {
  const [recorded, setRecorded] = useState(false);
  return (
    <div className="grid w-72 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-3">
      <Streak
        count={recorded ? 10 : 9}
        countLabel={(count) => `${count}일 연속`}
        doneLabel="기록함"
        missedLabel="기록 없음"
        days={WEEK.map((label, index) => ({
          label,
          done: index < TODAY || (recorded && index === TODAY),
        }))}
      />
      <button
        type="button"
        disabled={recorded}
        onClick={() => setRecorded(true)}
        className="rounded-lg bg-orange-500 py-2 text-sm font-semibold text-white disabled:bg-slate-300"
      >
        {recorded ? "오늘 기록했어요" : "오늘 기록하기"}
      </button>
    </div>
  );
}
