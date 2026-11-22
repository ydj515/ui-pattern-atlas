import { useEffect, useState } from "react";

import {
  PushNotificationBanner,
  usePushNotification,
} from "@/shared/ui/patterns/push-notification/PushNotification";

const NOTICE = { title: "배송이 시작됐어요", body: "주문하신 상품이 출발했어요" } as const;
const PREVIEW_MS = 3000;

export function PushNotificationDemo() {
  const { permission, request, show } = usePushNotification();
  const [previewing, setPreviewing] = useState(false);

  useEffect(() => {
    if (!previewing) return;
    const timer = window.setTimeout(() => setPreviewing(false), PREVIEW_MS);
    return () => window.clearTimeout(timer);
  }, [previewing]);

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <div className="h-24">
        {previewing ? (
          <PushNotificationBanner
            appName="쇼핑앱"
            time="지금"
            title={NOTICE.title}
            body={NOTICE.body}
          />
        ) : null}
      </div>
      <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">주문 상태 알림</p>
        <p className="mt-1 text-xs text-slate-500">배송이 시작되면 알려 드릴게요.</p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setPreviewing(true)}
            className="flex-1 rounded-lg border border-slate-300 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            미리 보기
          </button>
          {permission === "default" ? (
            <button
              type="button"
              onClick={() => void request()}
              className="flex-1 rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              알림 받기
            </button>
          ) : null}
          {permission === "granted" ? (
            <button
              type="button"
              onClick={() => show(NOTICE.title, { body: NOTICE.body })}
              className="flex-1 rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              테스트 알림
            </button>
          ) : null}
        </div>
        <p role="status" className="mt-2 min-h-4 text-xs text-slate-500">
          {permission === "denied" ? "브라우저 설정에서 알림을 허용해 주세요." : null}
          {permission === "unsupported" ? "이 브라우저는 알림을 지원하지 않아요." : null}
        </p>
      </div>
    </div>
  );
}
