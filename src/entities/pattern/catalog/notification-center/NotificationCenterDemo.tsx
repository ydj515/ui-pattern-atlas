import { useState } from "react";

import {
  NotificationCenter,
  type NotificationItem,
} from "@/shared/ui/patterns/notification-center/NotificationCenter";

const INITIAL: readonly NotificationItem[] = [
  { id: "shipping", title: "배송이 시작됐어요", time: "5분 전", read: false },
  { id: "comment", title: "김하늘 님이 댓글을 남겼어요", time: "1시간 전", read: false },
  { id: "coupon", title: "쿠폰이 곧 만료돼요", time: "어제", read: false },
];

export function NotificationCenterDemo() {
  const [notifications, setNotifications] = useState(INITIAL);

  return (
    <div className="w-full max-w-sm pb-56">
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2">
        <span className="text-sm font-semibold text-slate-900">내 서비스</span>
        <NotificationCenter
          title="알림"
          readAllLabel="모두 읽음"
          notifications={notifications}
          onRead={(id) =>
            setNotifications((items) =>
              items.map((item) => (item.id === id ? { ...item, read: true } : item)),
            )
          }
          onReadAll={() =>
            setNotifications((items) => items.map((item) => ({ ...item, read: true })))
          }
        />
      </div>
    </div>
  );
}
