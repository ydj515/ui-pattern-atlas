import { useState } from "react";

/** `unsupported` when the browser has no Notification API (e.g. some in-app browsers). */
export type PushPermission = NotificationPermission | "unsupported";

function readPermission(): PushPermission {
  return typeof window !== "undefined" && "Notification" in window
    ? Notification.permission
    : "unsupported";
}

/**
 * Asks for system notification permission and shows notifications.
 *
 * Only call `request` from a click on a button that explains the value first
 * ("배송 소식 알림 받기"); browsers block prompts that appear on page load, and a
 * denied permission cannot be asked again from the page.
 */
export function usePushNotification() {
  const [permission, setPermission] = useState<PushPermission>(readPermission);

  async function request(): Promise<PushPermission> {
    if (permission === "unsupported") return permission;
    const result = await Notification.requestPermission();
    setPermission(result);
    return result;
  }

  /** Shows a system notification. Returns false when permission is missing. */
  function show(title: string, options?: NotificationOptions): boolean {
    if (readPermission() !== "granted") return false;
    new Notification(title, options);
    return true;
  }

  return { permission, request, show } as const;
}

export interface PushNotificationBannerProps {
  readonly appName: string;
  readonly title: string;
  readonly body: string;
  readonly time?: string;
}

/**
 * In-page picture of how the system notification will look (lock screen / banner).
 * Useful next to the opt-in button and in places where the real one is blocked.
 * Decorative: the real notification is what users act on.
 */
export function PushNotificationBanner({
  appName,
  title,
  body,
  time = "지금",
}: PushNotificationBannerProps) {
  return (
    <div
      aria-hidden="true"
      className="w-72 rounded-2xl bg-white/90 p-3 text-left shadow-lg ring-1 ring-slate-900/5 backdrop-blur"
    >
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="size-4 rounded bg-slate-900" />
          {appName}
        </span>
        <span>{time}</span>
      </div>
      <p className="mt-1.5 text-sm font-semibold text-slate-900">{title}</p>
      <p className="text-sm text-slate-600">{body}</p>
    </div>
  );
}
