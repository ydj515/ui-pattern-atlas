import { useState } from "react";

import { UnreadIndicator } from "@/shared/ui/patterns/unread-indicator/UnreadIndicator";

const INITIAL = [
  { id: "a", from: "김하늘", subject: "시안 확인 부탁드려요", unread: true },
  { id: "b", from: "이도윤", subject: "회의록 공유해요", unread: true },
  { id: "c", from: "박서준", subject: "점심 메뉴 투표", unread: false },
];

export function UnreadIndicatorDemo() {
  const [mails, setMails] = useState(INITIAL);

  return (
    <div className="w-full max-w-xs">
      <ul
        aria-label="받은 메일"
        className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white"
      >
        {mails.map((mail) => (
          <li key={mail.id}>
            <button
              type="button"
              onClick={() =>
                setMails((current) =>
                  current.map((item) => (item.id === mail.id ? { ...item, unread: false } : item)),
                )
              }
              className="flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-slate-50"
            >
              <UnreadIndicator unread={mail.unread} label="안 읽음" />
              <span className="min-w-0 flex-1">
                <span
                  className={`block text-sm ${mail.unread ? "font-semibold text-slate-900" : "text-slate-600"}`}
                >
                  {mail.subject}
                </span>
                <span className="block text-xs text-slate-500">{mail.from}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setMails(INITIAL)}
        className="mt-2 text-xs text-slate-500 underline"
      >
        처음 상태로
      </button>
    </div>
  );
}
