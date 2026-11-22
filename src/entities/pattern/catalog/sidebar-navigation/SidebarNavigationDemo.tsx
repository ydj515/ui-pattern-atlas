import { useState } from "react";

import {
  SidebarNavigation,
  type SidebarEntry,
} from "@/shared/ui/patterns/sidebar-navigation/SidebarNavigation";

const ENTRIES: readonly SidebarEntry[] = [
  { href: "#dashboard", label: "대시보드" },
  {
    label: "프로젝트",
    links: [
      { href: "#active", label: "진행 중" },
      { href: "#archive", label: "보관함" },
    ],
  },
  { href: "#team", label: "팀" },
  { href: "#settings", label: "설정" },
];

const LABELS: Record<string, string> = {
  "#dashboard": "대시보드",
  "#active": "진행 중",
  "#archive": "보관함",
  "#team": "팀",
  "#settings": "설정",
};

export function SidebarNavigationDemo() {
  const [current, setCurrent] = useState("#dashboard");

  return (
    <div className="flex h-64 w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
      <SidebarNavigation
        label="워크스페이스 메뉴"
        entries={ENTRIES}
        current={current}
        onNavigate={setCurrent}
      />
      <p className="flex-1 p-5 text-sm font-semibold text-slate-900">{LABELS[current]}</p>
    </div>
  );
}
