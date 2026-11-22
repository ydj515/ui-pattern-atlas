import { useState } from "react";
import { AchievementBadge } from "@/shared/ui/patterns/achievement-badge/AchievementBadge";

export function AchievementBadgeDemo() {
  const [reviews, setReviews] = useState(4);
  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">내 배지</h3>
      <ul className="mt-4 grid grid-cols-3 gap-2">
        <li>
          <AchievementBadge
            title="첫 주문"
            icon="★"
            progress={1}
            goal={1}
            earnedOn="11월 3일 획득"
            lockedLabel="잠김"
          />
        </li>
        <li>
          <AchievementBadge
            title="후기 다섯 개"
            icon="✎"
            progress={reviews}
            goal={5}
            earnedOn="오늘 획득"
            lockedLabel="잠김"
          />
        </li>
        <li>
          <AchievementBadge
            title="한 달 연속"
            icon="◆"
            progress={12}
            goal={30}
            lockedLabel="잠김"
          />
        </li>
      </ul>
      <p role="status" className="mt-3 h-4 text-center text-xs font-semibold text-amber-700">
        {reviews >= 5 ? "배지를 받았어요: 후기 다섯 개" : ""}
      </p>
      <button
        type="button"
        onClick={() => setReviews((value) => (value >= 5 ? 4 : value + 1))}
        className="mt-3 w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
      >
        {reviews >= 5 ? "처음부터" : "후기 쓰기"}
      </button>
    </section>
  );
}
