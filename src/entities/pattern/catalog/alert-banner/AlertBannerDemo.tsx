import { useState } from "react";

import { AlertBanner, type AlertBannerTone } from "@/shared/ui/patterns/alert-banner/AlertBanner";

const MESSAGES: Record<AlertBannerTone, { title: string; body: string }> = {
  info: { title: "새 기능이 추가됐어요", body: "이제 프로젝트를 폴더별로 정리할 수 있어요." },
  success: { title: "결제 수단을 등록했어요", body: "다음 결제일부터 새 카드로 결제돼요." },
  warning: { title: "쿠폰 마감이 3일 남았어요", body: "11월 25일 자정까지 사용할 수 있어요." },
  error: { title: "결제에 실패했어요", body: "카드 한도를 확인한 뒤 다시 시도해 주세요." },
};

const TONES = Object.keys(MESSAGES) as AlertBannerTone[];

export function AlertBannerDemo() {
  const [tone, setTone] = useState<AlertBannerTone>("warning");
  const [dismissed, setDismissed] = useState(false);
  const message = MESSAGES[tone];

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {TONES.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={option === tone}
            onClick={() => {
              setTone(option);
              setDismissed(false);
            }}
            className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 aria-pressed:border-slate-900 aria-pressed:bg-slate-900 aria-pressed:text-white"
          >
            {option}
          </button>
        ))}
      </div>
      {dismissed ? (
        <button
          type="button"
          onClick={() => setDismissed(false)}
          className="block w-full text-center text-sm text-slate-500 underline underline-offset-2"
        >
          배너 다시 보기
        </button>
      ) : (
        <AlertBanner
          tone={tone}
          title={message.title}
          onDismiss={() => setDismissed(true)}
          dismissLabel="배너 닫기"
        >
          {message.body}
        </AlertBanner>
      )}
    </div>
  );
}
