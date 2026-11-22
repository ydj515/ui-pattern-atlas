import { useState } from "react";
import { TermsAgreement } from "@/shared/ui/patterns/terms-agreement/TermsAgreement";

const ITEMS = [
  { id: "terms", label: "이용약관", required: true },
  { id: "privacy", label: "개인정보 수집·이용", required: true },
  { id: "marketing", label: "마케팅 정보 수신", required: false },
];

export function TermsAgreementDemo() {
  const [checked, setChecked] = useState<ReadonlySet<string>>(new Set());
  const [viewing, setViewing] = useState<string | null>(null);
  const [next, setNext] = useState(false);
  const ready = ITEMS.every((item) => !item.required || checked.has(item.id));
  const viewed = ITEMS.find((item) => item.id === viewing);

  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-4">
      <h3 className="mb-3 text-base font-bold text-slate-900">약관에 동의해 주세요</h3>
      <TermsAgreement
        items={ITEMS}
        checked={checked}
        onChange={setChecked}
        onView={setViewing}
        allLabel="전체 동의"
        requiredLabel="필수"
        optionalLabel="선택"
        viewLabel="보기"
      />
      {viewed ? (
        <p className="mt-2 rounded-lg bg-slate-50 p-2 text-xs text-slate-600">
          {viewed.label} 전문이 여기에 나와요.{" "}
          <button type="button" onClick={() => setViewing(null)} className="underline">
            닫기
          </button>
        </p>
      ) : null}
      <button
        type="button"
        disabled={!ready}
        onClick={() => setNext(true)}
        className="mt-3 w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white disabled:bg-slate-300"
      >
        다음
      </button>
      <p role="status" className="mt-2 h-4 text-center text-xs text-slate-600">
        {next && ready ? "다음 단계로 넘어가요" : ""}
      </p>
    </section>
  );
}
