import { useId, useState, type FormEvent } from "react";

export interface ThreadComment {
  readonly id: string;
  readonly author: string;
  readonly time: string;
  readonly body: string;
  readonly replies?: readonly ThreadComment[];
}

export interface CommentThreadProps {
  readonly comments: readonly ThreadComment[];
  readonly onReply: (parentId: string, body: string) => void;
  readonly replyLabel?: string;
  readonly showRepliesLabel?: (count: number) => string;
  readonly hideRepliesLabel?: string;
  readonly placeholder?: string;
  readonly sendLabel?: string;
}

function ReplyForm({
  onSubmit,
  placeholder,
  sendLabel,
}: {
  readonly onSubmit: (body: string) => void;
  readonly placeholder: string;
  readonly sendLabel: string;
}) {
  const [body, setBody] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!body.trim()) return;
    onSubmit(body.trim());
    setBody("");
  }
  return (
    <form onSubmit={submit} className="mt-2 flex gap-2">
      <input
        autoFocus
        aria-label={placeholder}
        value={body}
        placeholder={placeholder}
        onChange={(event) => setBody(event.target.value)}
        className="min-w-0 flex-1 rounded-lg border border-slate-300 px-2 py-1 text-sm"
      />
      <button
        type="submit"
        className="rounded-lg bg-slate-900 px-3 text-xs font-semibold text-white"
      >
        {sendLabel}
      </button>
    </form>
  );
}

interface ItemProps {
  readonly comment: ThreadComment;
  readonly nested: boolean;
  readonly headingId: string;
  readonly replyLabel: string;
  readonly replying: boolean;
  readonly onReplyToggle?: () => void;
}

function Item({ comment, nested, headingId, replyLabel, replying, onReplyToggle }: ItemProps) {
  return (
    <article aria-labelledby={headingId} className="flex gap-2">
      <span
        aria-hidden="true"
        className={`grid shrink-0 place-items-center rounded-full bg-slate-200 font-semibold text-slate-600 ${nested ? "size-6 text-[10px]" : "size-8 text-xs"}`}
      >
        {comment.author[0]}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-500">
          <b id={headingId} className="mr-1 text-slate-900">
            {comment.author}
          </b>
          {comment.time}
        </p>
        <p className="text-sm text-slate-800">{comment.body}</p>
        {onReplyToggle ? (
          <button
            type="button"
            aria-expanded={replying}
            onClick={onReplyToggle}
            className="mt-0.5 text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            {replyLabel}
          </button>
        ) : null}
      </div>
    </article>
  );
}

/**
 * Comments with one level of replies indented under them. Replies fold behind
 * "답글 2개 보기", and 답글 opens a field right under the comment it answers.
 */
export function CommentThread({
  comments,
  onReply,
  replyLabel = "답글",
  showRepliesLabel = (count) => `답글 ${count}개 보기`,
  hideRepliesLabel = "답글 접기",
  placeholder = "답글 쓰기",
  sendLabel = "등록",
}: CommentThreadProps) {
  const id = useId();
  const [open, setOpen] = useState<ReadonlySet<string>>(new Set());
  const [replying, setReplying] = useState<string | null>(null);

  function toggle(commentId: string) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(commentId)) next.delete(commentId);
      else next.add(commentId);
      return next;
    });
  }

  return (
    <ul className="grid gap-4">
      {comments.map((comment) => {
        const replies = comment.replies ?? [];
        const shown = open.has(comment.id);
        return (
          <li key={comment.id}>
            <Item
              comment={comment}
              nested={false}
              headingId={`${id}-${comment.id}`}
              replyLabel={replyLabel}
              replying={replying === comment.id}
              onReplyToggle={() => setReplying(replying === comment.id ? null : comment.id)}
            />
            <div className="ml-10">
              {replying === comment.id ? (
                <ReplyForm
                  placeholder={placeholder}
                  sendLabel={sendLabel}
                  onSubmit={(body) => {
                    onReply(comment.id, body);
                    setReplying(null);
                    setOpen((current) => new Set([...current, comment.id]));
                  }}
                />
              ) : null}
              {replies.length ? (
                <button
                  type="button"
                  aria-expanded={shown}
                  onClick={() => toggle(comment.id)}
                  className="mt-1 text-xs font-semibold text-blue-700"
                >
                  {shown ? hideRepliesLabel : showRepliesLabel(replies.length)}
                </button>
              ) : null}
              {shown ? (
                <ul className="mt-2 grid gap-2 border-l-2 border-slate-100 pl-3">
                  {replies.map((reply) => (
                    <li key={reply.id}>
                      <Item
                        comment={reply}
                        nested
                        headingId={`${id}-${reply.id}`}
                        replyLabel={replyLabel}
                        replying={false}
                      />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
