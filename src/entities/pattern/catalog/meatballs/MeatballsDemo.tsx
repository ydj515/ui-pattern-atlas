import { useState } from "react";

const ACTIONS = ["링크 복사", "알림 끄기", "신고하기"];

export function MeatballsDemo() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <article className="relative w-72 rounded-3xl border border-slate-200 bg-white p-4">
      <header className="flex items-center justify-between">
        <p className="text-xs text-slate-600">
          <b className="text-slate-900">서연</b> · 2시간 전
        </p>
        <button
          type="button"
          aria-label="게시물 더 보기"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-8 place-items-center rounded-lg hover:bg-slate-100"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-slate-700">
            <circle cx="5" cy="12" r="1.8" />
            <circle cx="12" cy="12" r="1.8" />
            <circle cx="19" cy="12" r="1.8" />
          </svg>
        </button>
      </header>
      <p className="mt-2 text-sm text-slate-800">이번 주말 서울숲에서 플리마켓 열려요</p>
      <span className="mt-3 block h-24 rounded-xl bg-gradient-to-br from-emerald-100 to-sky-200" />
      {open ? (
        <div
          role="menu"
          className="absolute top-12 right-4 z-10 grid w-32 rounded-xl bg-white p-1 text-sm shadow-lg ring-1 ring-slate-200"
        >
          {ACTIONS.map((action, index) => (
            <button
              key={action}
              type="button"
              role="menuitem"
              autoFocus={index === 0}
              onClick={() => {
                setOpen(false);
                setMessage(
                  action === "링크 복사"
                    ? "링크를 복사했어요"
                    : action === "알림 끄기"
                      ? "이 게시물 알림을 껐어요"
                      : "신고를 접수했어요",
                );
              }}
              className="rounded-lg px-3 py-1.5 text-left hover:bg-slate-100"
            >
              {action}
            </button>
          ))}
        </div>
      ) : null}
      <p role="status" className="mt-2 h-4 text-xs text-slate-600">
        {message}
      </p>
    </article>
  );
}
