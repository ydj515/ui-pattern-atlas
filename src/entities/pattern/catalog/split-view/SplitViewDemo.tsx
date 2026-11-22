import { useState } from "react";

import { SplitView } from "@/shared/ui/patterns/split-view/SplitView";

const MAILS = [
  {
    id: "a",
    subject: "시안 확인 부탁드려요",
    body: "수정한 시안을 올렸어요. 오늘 안에 봐 주세요.",
  },
  { id: "b", subject: "회의록 공유해요", body: "어제 회의에서 정한 일정이에요." },
  { id: "c", subject: "점심 메뉴 투표", body: "오늘 점심은 투표로 정해요." },
] as const;

export function SplitViewDemo() {
  const [wide, setWide] = useState(true);
  const [openId, setOpenId] = useState<string | null>("a");
  const mail = MAILS.find((item) => item.id === openId) ?? MAILS[0];

  return (
    <div className="space-y-2">
      <div role="group" aria-label="화면 폭" className="flex justify-center gap-1 text-xs">
        {[
          [true, "넓은 화면"],
          [false, "좁은 화면"],
        ].map(([value, label]) => (
          <button
            key={String(label)}
            type="button"
            aria-pressed={wide === value}
            onClick={() => setWide(value as boolean)}
            className="rounded-md border border-slate-300 px-2 py-1 aria-pressed:bg-slate-900 aria-pressed:text-white"
          >
            {label}
          </button>
        ))}
      </div>
      <div
        className="mx-auto h-56 overflow-hidden rounded-xl border border-slate-200 bg-white transition-[width] duration-300 motion-reduce:transition-none"
        style={{ width: wide ? 420 : 260 }}
      >
        <SplitView
          showDetail={openId !== null}
          onBack={() => setOpenId(null)}
          backLabel="목록"
          list={
            <ul className="text-sm">
              {MAILS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-current={item.id === openId ? "true" : undefined}
                    onClick={() => setOpenId(item.id)}
                    className="w-full px-3 py-2.5 text-left hover:bg-slate-50 aria-[current=true]:bg-blue-50"
                  >
                    {item.subject}
                  </button>
                </li>
              ))}
            </ul>
          }
          detail={
            <article className="p-4">
              <h3 className="text-sm font-semibold text-slate-900">{mail.subject}</h3>
              <p className="mt-2 text-sm text-slate-600">{mail.body}</p>
            </article>
          }
        />
      </div>
    </div>
  );
}
