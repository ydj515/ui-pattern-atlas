import { useState } from "react";

import { BottomTabBar, type BottomTab } from "@/shared/ui/patterns/bottom-tab-bar/BottomTabBar";

const icon = (path: string) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <path d={path} />
  </svg>
);

const TABS: readonly BottomTab[] = [
  { href: "#home", label: "홈", icon: icon("M4 11 12 4l8 7v9h-5v-6H9v6H4Z") },
  { href: "#search", label: "검색", icon: icon("M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 4 4") },
  {
    href: "#alerts",
    label: "알림",
    icon: icon("M6 16V11a6 6 0 0 1 12 0v5l2 2H4Zm4 3a2 2 0 0 0 4 0"),
    badge: 3,
  },
  {
    href: "#me",
    label: "내 정보",
    icon: icon("M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0"),
  },
];

export function BottomTabBarDemo() {
  const [current, setCurrent] = useState("#home");
  const tab = TABS.find((item) => item.href === current);

  return (
    <div className="flex h-72 w-60 flex-col overflow-hidden rounded-3xl border-4 border-slate-900 bg-slate-50">
      <p className="flex-1 p-5 text-base font-semibold text-slate-900">{tab?.label}</p>
      <BottomTabBar
        label="주요 화면"
        tabs={TABS}
        current={current}
        onNavigate={setCurrent}
        badgeLabel={(count) => `새 알림 ${count}개`}
      />
    </div>
  );
}
