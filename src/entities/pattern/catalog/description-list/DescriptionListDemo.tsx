import { useState } from "react";

import { DescriptionList } from "@/shared/ui/patterns/description-list/DescriptionList";

function CopyValue({ value }: { readonly value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <span className="flex items-center gap-2">
      {value}
      <button
        type="button"
        onClick={() => {
          void navigator.clipboard?.writeText(value);
          setCopied(true);
        }}
        className="rounded border border-slate-300 px-1.5 text-xs text-slate-600 hover:bg-slate-50"
      >
        {copied ? "복사됨" : "복사"}
      </button>
    </span>
  );
}

export function DescriptionListDemo() {
  return (
    <div className="w-full max-w-xs">
      <DescriptionList
        title="주문 정보"
        items={[
          { term: "주문 번호", details: <CopyValue value="A-1021" /> },
          { term: "주문일", details: "2026년 11월 23일" },
          { term: "결제 수단", details: "카드 (일시불)" },
          { term: "배송지", details: "서울시 마포구 월드컵로 12" },
        ]}
      />
    </div>
  );
}
