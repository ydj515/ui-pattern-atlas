import { useState } from "react";

import { TreeView, type TreeNode } from "@/shared/ui/patterns/tree-view/TreeView";

const NODES: readonly TreeNode[] = [
  {
    id: "design",
    label: "디자인",
    children: [
      { id: "logo", label: "로고.svg" },
      {
        id: "icons",
        label: "아이콘",
        children: [
          { id: "home", label: "홈.svg" },
          { id: "search", label: "검색.svg" },
        ],
      },
    ],
  },
  { id: "docs", label: "문서", children: [{ id: "guide", label: "가이드.md" }] },
  { id: "readme", label: "README.md" },
];

const LABELS: Record<string, string> = {
  logo: "로고.svg",
  home: "홈.svg",
  search: "검색.svg",
  guide: "가이드.md",
  readme: "README.md",
};

export function TreeViewDemo() {
  const [selected, setSelected] = useState<string | null>("logo");

  return (
    <div className="w-full max-w-xs space-y-2">
      <TreeView
        label="프로젝트 파일"
        nodes={NODES}
        selected={selected}
        onSelect={setSelected}
        defaultExpanded={["design"]}
      />
      <p className="text-xs text-slate-500">{selected ? `열린 파일: ${LABELS[selected]}` : ""}</p>
    </div>
  );
}
