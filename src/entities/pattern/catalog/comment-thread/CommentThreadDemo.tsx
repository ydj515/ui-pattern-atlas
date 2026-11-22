import { useState } from "react";
import {
  CommentThread,
  type ThreadComment,
} from "@/shared/ui/patterns/comment-thread/CommentThread";

const INITIAL: readonly ThreadComment[] = [
  {
    id: "1",
    author: "하늘",
    time: "2시간 전",
    body: "사진 정말 좋네요",
    replies: [{ id: "1-1", author: "도윤", time: "1시간 전", body: "고마워요" }],
  },
  { id: "2", author: "서연", time: "1시간 전", body: "어디서 찍었어요?", replies: [] },
];

export function CommentThreadDemo() {
  const [comments, setComments] = useState(INITIAL);
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="mb-3 text-sm font-bold text-slate-900">댓글 2</h3>
      <CommentThread
        comments={comments}
        replyLabel="답글"
        showRepliesLabel={(count) => `답글 ${count}개 보기`}
        hideRepliesLabel="답글 접기"
        placeholder="답글 쓰기"
        sendLabel="등록"
        onReply={(parentId, body) =>
          setComments((current) =>
            current.map((comment) =>
              comment.id === parentId
                ? {
                    ...comment,
                    replies: [
                      ...(comment.replies ?? []),
                      { id: `${parentId}-${Date.now()}`, author: "나", time: "방금", body },
                    ],
                  }
                : comment,
            ),
          )
        }
      />
    </section>
  );
}
