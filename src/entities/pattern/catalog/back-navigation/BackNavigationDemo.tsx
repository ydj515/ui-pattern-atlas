import { useLayoutEffect, useRef, useState } from "react";

import { BackButton, useListPosition } from "@/shared/ui/patterns/back-navigation/BackNavigation";

const NOTICES = Array.from({ length: 20 }, (_, index) => ({
  id: `n${index + 1}`,
  title: `공지 ${index + 1}`,
}));

function NoticeList({
  onOpen,
  restore,
}: {
  readonly onOpen: (list: HTMLElement | null, id: string) => void;
  readonly restore: (list: HTMLElement | null) => string | null;
}) {
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const id = restore(listRef.current);
    if (id)
      listRef.current
        ?.querySelector<HTMLButtonElement>(`[data-id="${id}"]`)
        ?.focus({ preventScroll: true });
  }, [restore]);

  return (
    <ul
      ref={listRef}
      aria-label="공지 목록"
      className="h-full divide-y divide-slate-100 overflow-y-auto text-sm"
    >
      {NOTICES.map((notice) => (
        <li key={notice.id}>
          <button
            type="button"
            data-id={notice.id}
            onClick={() => onOpen(listRef.current, notice.id)}
            className="block w-full px-4 py-3 text-left text-slate-700 hover:bg-slate-50 focus-visible:bg-blue-50 focus-visible:outline-none"
          >
            {notice.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export function BackNavigationDemo() {
  const { save, restore } = useListPosition();
  const [openId, setOpenId] = useState<string | null>(null);
  const notice = NOTICES.find((item) => item.id === openId);

  return (
    <div className="h-72 w-full max-w-xs overflow-hidden rounded-xl border border-slate-200 bg-white">
      {notice ? (
        <article className="space-y-3 p-4">
          <BackButton label="목록" suffix="으로 돌아가기" onBack={() => setOpenId(null)} />
          <h3 className="text-base font-semibold text-slate-900">{notice.title}</h3>
          <p className="text-sm text-slate-600">
            목록으로 돌아가면 보던 위치에서 이어 볼 수 있어요.
          </p>
        </article>
      ) : (
        <NoticeList
          restore={restore}
          onOpen={(list, id) => {
            save(list, id);
            setOpenId(id);
          }}
        />
      )}
    </div>
  );
}
