import { useState } from "react";

import { OptimisticLikeButton } from "@/shared/ui/patterns/optimistic-ui/OptimisticLikeButton";

const SERVER_DELAY_MS = 1000;

export function OptimisticUiDemo() {
  const [saved, setSaved] = useState({ liked: false, count: 12 });
  const [failNext, setFailNext] = useState(false);

  async function save(liked: boolean) {
    await new Promise((resolve) => window.setTimeout(resolve, SERVER_DELAY_MS));
    if (failNext) {
      setFailNext(false);
      throw new Error("network");
    }
    setSaved((current) => ({ liked, count: current.count + (liked ? 1 : -1) }));
  }

  return (
    <div className="w-full max-w-xs space-y-3">
      <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="h-24 bg-gradient-to-br from-amber-200 via-rose-300 to-indigo-400"
        />
        <div className="space-y-3 p-4">
          <p className="text-sm font-semibold text-slate-900">한강 노을</p>
          <OptimisticLikeButton
            label="좋아요"
            errorText="좋아요를 반영하지 못했어요"
            liked={saved.liked}
            count={saved.count}
            onChange={save}
          />
          <p className="text-xs text-slate-500">서버에 저장된 값: {saved.count}</p>
        </div>
      </article>
      <label className="flex items-center gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          checked={failNext}
          onChange={(event) => setFailNext(event.target.checked)}
        />
        다음 요청 실패시키기
      </label>
    </div>
  );
}
