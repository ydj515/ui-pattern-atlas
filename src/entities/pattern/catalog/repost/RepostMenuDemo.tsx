import { useState } from "react";
import { RepostMenu } from "@/shared/ui/patterns/repost/RepostMenu";

const LABELS = { button: "리포스트", repost: "리포스트", undo: "리포스트 취소", quote: "인용하기" };

export function RepostMenuDemo() {
  const [reposted, setReposted] = useState(false);
  const [quoting, setQuoting] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <article className="grid w-80 gap-2 rounded-3xl border border-slate-200 bg-white p-5 pt-24">
      <p className="text-xs text-slate-500">서연</p>
      <p className="text-sm text-slate-900">이번 주말 서울숲에서 플리마켓 열려요</p>
      <div className="-ml-3 flex items-center">
        <RepostMenu
          reposted={reposted}
          count={12 + (reposted ? 1 : 0)}
          labels={LABELS}
          onRepost={(next) => {
            setReposted(next);
            setMessage(next ? "내 피드에 리포스트했어요" : "리포스트를 취소했어요");
          }}
          onQuote={() => setQuoting(true)}
        />
      </div>
      {quoting ? (
        <textarea
          autoFocus
          aria-label="인용하기"
          rows={2}
          placeholder="내 생각 덧붙이기"
          className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      ) : null}
      <p role="status" className="h-4 text-xs text-emerald-700">
        {message}
      </p>
    </article>
  );
}
