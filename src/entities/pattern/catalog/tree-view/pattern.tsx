import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TreeViewThumbnail } from "@/entities/pattern/catalog/tree-view/TreeViewThumbnail";

export const treeViewPattern: Pattern = {
  slug: "tree-view",
  name: "Tree View",
  nameKo: "트리 뷰",
  aliases: ["폴더 트리", "파일 탐색기", "중첩 목록", "tree", "file tree"],
  category: "disclosure",
  summary: "폴더처럼 중첩된 목록",
  description:
    "폴더 안에 폴더가 있는 구조를 들여쓴 목록으로 보여 주고, 필요한 가지만 펼쳐 보는 패턴입니다. 파일 탐색기나 조직도처럼 깊이가 있는 데이터를 다룹니다.",
  whenToUse: [
    "파일, 폴더처럼 깊이가 정해지지 않은 구조",
    "여러 단계를 오가며 항목을 골라야 할 때",
    "구조 전체의 위치를 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "한두 단계뿐인 메뉴(사이드바나 아코디언 사용)",
    "모바일 화면(단계별로 화면을 넘기는 목록이 쉬움)",
    "순서가 중요한 목록",
  ],
  alternatives: [
    { name: "사이드바", slug: "sidebar-navigation", reason: "앱 메뉴처럼 얕은 구조" },
    { name: "아코디언", slug: "accordion", reason: "한 단계만 접을 때" },
  ],
  accessibility: [
    'WAI-ARIA tree로 role="tree", treeitem, group과 aria-level을 씁니다.',
    "트리 전체가 Tab 한 번이고 ↑/↓로 이동, →로 펼치거나 들어가고 ←로 접거나 부모로 갑니다.",
    "폴더는 aria-expanded, 파일은 aria-selected로 상태를 알립니다.",
    "Home/End로 처음과 끝으로 이동합니다.",
  ],
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/tree-view/TreeViewDemo").then((m) => m.TreeViewDemo),
  Thumbnail: TreeViewThumbnail,
  sources: [
    {
      fileName: "TreeView.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tree-view/TreeView.tsx?raw"),
    },
    {
      fileName: "TreeViewDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tree-view/TreeViewDemo.tsx?raw"),
    },
  ],
};
