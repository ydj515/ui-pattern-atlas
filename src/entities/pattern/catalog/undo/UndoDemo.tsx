import { useState } from "react";

import { UndoBar } from "@/shared/ui/patterns/undo/UndoBar";

const MAILS = ["주간 회의 안내", "배송이 시작됐어요", "청구서가 도착했어요"] as const;

interface Pending {
  readonly mail: string;
  readonly index: number;
  readonly key: number;
}

export function UndoDemo() {
  const [mails, setMails] = useState<readonly string[]>(MAILS);
  const [pending, setPending] = useState<Pending | null>(null);
  const [message, setMessage] = useState("");

  function remove(mail: string) {
    // One undo at a time: a new delete commits the previous one.
    setMails((current) => current.filter((item) => item !== mail));
    setPending((previous) => ({
      mail,
      index: mails.indexOf(mail),
      key: (previous?.key ?? 0) + 1,
    }));
    setMessage("");
  }

  function undo() {
    if (!pending) return;
    setMails((current) => current.toSpliced(pending.index, 0, pending.mail));
    setPending(null);
    setMessage("삭제를 되돌렸어요");
  }

  return (
    <div className="w-full max-w-sm space-y-3">
      <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
        {mails.map((mail) => (
          <li
            key={mail}
            className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-800"
          >
            {mail}
            <button
              type="button"
              aria-label={`${mail} 삭제`}
              onClick={() => remove(mail)}
              className="grid size-7 place-items-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-rose-600"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
                <path d="M8 2a1 1 0 0 0-1 1v1H4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2h-3V3a1 1 0 0 0-1-1H8Zm-3 6 .8 8.1A2 2 0 0 0 7.8 18h4.4a2 2 0 0 0 2-1.9L15 8H5Z" />
              </svg>
            </button>
          </li>
        ))}
        {mails.length === 0 ? (
          <li className="px-4 py-2.5 text-sm text-slate-500">받은 메일이 없어요</li>
        ) : null}
      </ul>
      {pending ? (
        <UndoBar
          key={pending.key}
          message="메일 1개를 삭제했어요"
          undoLabel="되돌리기"
          onUndo={undo}
          onExpire={() => {
            setPending(null);
            setMessage("메일을 영구 삭제했어요");
          }}
        />
      ) : (
        <p role="status" className="min-h-5 text-center text-xs text-slate-500">
          {message}
        </p>
      )}
    </div>
  );
}
