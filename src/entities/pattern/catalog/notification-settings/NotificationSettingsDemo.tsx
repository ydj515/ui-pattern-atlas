import { useState } from "react";
import { NotificationSettings } from "@/shared/ui/patterns/notification-settings/NotificationSettings";

const TOPICS = [
  { id: "order", label: "주문·배송", required: ["push"] },
  { id: "event", label: "이벤트·혜택" },
  { id: "comment", label: "댓글·답글" },
];
const CHANNELS = [
  { id: "push", label: "앱 푸시" },
  { id: "email", label: "이메일" },
  { id: "sms", label: "문자" },
];

export function NotificationSettingsDemo() {
  const [enabled, setEnabled] = useState<ReadonlySet<string>>(
    new Set(["order:email", "comment:push"]),
  );
  const [quiet, setQuiet] = useState(true);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <NotificationSettings
        caption="받을 알림"
        topics={TOPICS}
        channels={CHANNELS}
        enabled={enabled}
        onChange={setEnabled}
        requiredNote="주문·배송 앱 푸시는 필수 알림이라 끌 수 없어요"
        checkboxLabel={(topic, channel) => `${topic} ${channel}`}
      />
      <label className="flex items-center justify-between text-sm text-slate-800">
        밤 10시~아침 8시에는 알림 끄기
        <input
          type="checkbox"
          role="switch"
          checked={quiet}
          onChange={(event) => setQuiet(event.target.checked)}
          className="size-4 accent-slate-900"
        />
      </label>
      <p role="status" className="text-xs text-slate-600">
        켜 둔 알림 {enabled.size + 1}개
      </p>
    </section>
  );
}
