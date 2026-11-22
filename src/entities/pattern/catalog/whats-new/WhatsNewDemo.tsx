import { useState } from "react";
import { WhatsNew } from "@/shared/ui/patterns/whats-new/WhatsNew";

const ITEMS = [
  { title: "사진으로 검색", body: "찍은 사진과 비슷한 상품을 찾아요" },
  { title: "더 빠른 결제", body: "저장한 카드로 한 번에 결제해요" },
  { title: "주문 알림 묶기", body: "같은 날 주문은 알림 하나로 보내요" },
];

export function WhatsNewDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-72 w-64 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
      <header className="flex items-center justify-between bg-white px-4 py-3">
        <h3 className="text-sm font-bold text-slate-900">동네가게</h3>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md px-2 py-1 text-xs text-slate-700 hover:bg-slate-100"
        >
          새 소식
        </button>
      </header>
      {open ? (
        <div className="absolute inset-0 flex items-end bg-slate-900/40 p-3">
          <div className="w-full">
            <WhatsNew
              version="버전 3.2"
              title="새로워진 점"
              items={ITEMS}
              closeLabel="확인"
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
