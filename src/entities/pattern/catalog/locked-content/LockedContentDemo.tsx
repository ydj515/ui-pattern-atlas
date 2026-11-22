import { useState } from "react";

import { LockedContent } from "@/shared/ui/patterns/locked-content/LockedContent";

const FREE =
  "작은 팀일수록 색과 글꼴부터 정리하는 편이 빠릅니다. 버튼을 만들 때마다 같은 질문을 반복하지 않게 되니까요.";
// In a real app the server sends this only after checking the membership.
const MEMBERS_ONLY =
  "다음은 간격입니다. 4의 배수로 시작하면 대부분의 화면을 충분히 맞출 수 있습니다.";

export function LockedContentDemo() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <article className="w-full max-w-sm space-y-2">
      <h3 className="text-sm font-semibold text-slate-900">디자인 시스템을 처음 만들 때</h3>
      {unlocked ? (
        <div className="space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm leading-6 text-slate-700">
          <p>{FREE}</p>
          <p>{MEMBERS_ONLY}</p>
          <button
            type="button"
            onClick={() => setUnlocked(false)}
            className="text-xs text-slate-500 underline underline-offset-2"
          >
            잠금 다시 보기
          </button>
        </div>
      ) : (
        <LockedContent
          preview={<p>{FREE}</p>}
          title="멤버십 회원만 볼 수 있어요"
          description="월 4,900원으로 모든 글을 읽을 수 있어요."
          actionLabel="멤버십 시작하기"
          onUnlock={() => setUnlocked(true)}
        />
      )}
    </article>
  );
}
