import { useRef, useState } from "react";

import { Fab } from "@/shared/ui/patterns/fab/Fab";

const MAILS = Array.from({ length: 12 }, (_, index) => `받은 메일 ${index + 1}`);

export function FabDemo() {
  const [extended, setExtended] = useState(true);
  const [composing, setComposing] = useState(false);
  const lastTopRef = useRef(0);

  return (
    <div className="relative h-72 w-full max-w-xs overflow-hidden rounded-xl border border-slate-200 bg-white">
      <ul
        aria-label="받은 메일함"
        tabIndex={0}
        onScroll={(event) => {
          // Shrink while scrolling down, grow back when scrolling up.
          const top = event.currentTarget.scrollTop;
          setExtended(top < lastTopRef.current || top < 8);
          lastTopRef.current = top;
        }}
        className="h-full divide-y divide-slate-100 overflow-y-auto pb-20 text-sm focus:outline-none"
      >
        {MAILS.map((mail) => (
          <li key={mail} className="px-4 py-3 text-slate-700">
            {mail}
          </li>
        ))}
      </ul>
      <Fab
        label="새 메일"
        extended={extended}
        onClick={() => setComposing(true)}
        className="absolute right-4 bottom-4"
        icon={
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M10 4v12M4 10h12" />
          </svg>
        }
      />
      <p
        role="status"
        className="absolute top-2 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-3 py-1 text-xs text-white empty:hidden"
      >
        {composing ? "새 메일을 쓰고 있어요" : ""}
      </p>
    </div>
  );
}
