import { useState } from "react";
import { OnboardingCarousel } from "@/shared/ui/patterns/onboarding-carousel/OnboardingCarousel";

const SLIDES = [
  {
    title: "지출을 한곳에",
    body: "카드와 계좌 내역을 자동으로 모아요",
    art: <span className="block size-20 rounded-3xl bg-emerald-200" />,
  },
  {
    title: "예산 알림",
    body: "정한 금액을 넘기 전에 알려 드려요",
    art: <span className="block size-20 rounded-full bg-amber-200" />,
  },
  {
    title: "함께 쓰는 가계부",
    body: "가족과 같은 가계부를 나눠 써요",
    art: <span className="block h-20 w-24 rounded-3xl bg-sky-200" />,
  },
];

export function OnboardingCarouselDemo() {
  const [done, setDone] = useState(false);
  return (
    <div className="h-72 w-64 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {done ? (
        <div
          role="status"
          className="grid h-full place-content-center justify-items-center gap-3 p-5 text-center"
        >
          <p className="text-base font-bold text-slate-900">가계부를 시작했어요</p>
          <button
            type="button"
            onClick={() => setDone(false)}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm"
          >
            처음부터
          </button>
        </div>
      ) : (
        <OnboardingCarousel
          slides={SLIDES}
          onFinish={() => setDone(true)}
          skipLabel="건너뛰기"
          nextLabel="다음"
          finishLabel="시작하기"
        />
      )}
    </div>
  );
}
