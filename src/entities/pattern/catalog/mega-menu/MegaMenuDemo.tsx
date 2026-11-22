import { useState } from "react";

import { MegaMenu, type MegaMenuItem } from "@/shared/ui/patterns/mega-menu/MegaMenu";

const ITEMS: readonly MegaMenuItem[] = [
  {
    label: "제품",
    columns: [
      {
        title: "만들기",
        links: [
          { href: "#docs", label: "문서", description: "함께 쓰는 문서" },
          { href: "#board", label: "화이트보드", description: "생각을 펼치는 판" },
        ],
      },
      {
        title: "관리",
        links: [
          { href: "#projects", label: "프로젝트", description: "일의 흐름 보기" },
          { href: "#calendar", label: "일정", description: "팀 일정 맞추기" },
        ],
      },
    ],
  },
  {
    label: "솔루션",
    columns: [
      {
        title: "팀별",
        links: [
          { href: "#design", label: "디자인 팀" },
          { href: "#dev", label: "개발 팀" },
        ],
      },
      {
        title: "규모별",
        links: [
          { href: "#startup", label: "스타트업" },
          { href: "#enterprise", label: "기업" },
        ],
      },
    ],
  },
];

const LABELS = Object.fromEntries(
  ITEMS.flatMap((item) =>
    item.columns.flatMap((column) => column.links.map((link) => [link.href, link.label])),
  ),
);

export function MegaMenuDemo() {
  const [moved, setMoved] = useState("");

  return (
    <div className="w-full max-w-md pb-44">
      <div className="overflow-visible rounded-xl border border-slate-200 bg-white">
        <MegaMenu
          label="주 메뉴"
          items={ITEMS}
          onNavigate={(href) => setMoved(LABELS[href] ?? "")}
        />
      </div>
      <p role="status" className="mt-3 text-center text-sm text-slate-600">
        {moved ? `${moved} 페이지로 이동해요` : ""}
      </p>
    </div>
  );
}
