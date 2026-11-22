import { useState } from "react";

import { MultiStepForm } from "@/shared/ui/patterns/multi-step-form/MultiStepForm";

const fieldClass = "mt-1 block w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm";

export function MultiStepFormDemo() {
  const [name, setName] = useState("김하늘");
  const [address, setAddress] = useState("서울시 마포구");
  const [payment, setPayment] = useState("카드");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="text-center">
        <p role="status" className="text-sm font-semibold text-slate-900">
          주문을 마쳤어요
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-2 text-xs text-slate-500 underline"
        >
          처음부터
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-4">
      <MultiStepForm
        progressLabel={(current, total) => `${current}/${total}단계`}
        prevLabel="이전"
        nextLabel="다음"
        submitLabel="주문하기"
        onComplete={() => setDone(true)}
        steps={[
          {
            id: "address",
            title: "배송지",
            content: (
              <div className="space-y-2">
                <label className="block text-xs text-slate-600">
                  이름
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={fieldClass}
                  />
                </label>
                <label className="block text-xs text-slate-600">
                  주소
                  <input
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    className={fieldClass}
                  />
                </label>
              </div>
            ),
          },
          {
            id: "payment",
            title: "결제 수단",
            content: (
              <fieldset className="space-y-1.5 text-sm">
                <legend className="sr-only">결제 수단</legend>
                {["카드", "계좌이체"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      checked={payment === option}
                      onChange={() => setPayment(option)}
                    />
                    {option}
                  </label>
                ))}
              </fieldset>
            ),
          },
          {
            id: "review",
            title: "확인",
            content: (
              <dl className="space-y-1 text-sm text-slate-700">
                <div className="flex gap-2">
                  <dt className="text-slate-500">배송지</dt>
                  <dd>
                    {name} · {address}
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-slate-500">결제</dt>
                  <dd>{payment}</dd>
                </div>
              </dl>
            ),
          },
        ]}
      />
    </div>
  );
}
