import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const treeViewPattern: Pattern = {
  slug: "tree-view",

  name: "Tree View",
  nameKo: "트리 뷰",
  aliases: ["폴더 트리", "파일 탐색기", "중첩 목록", "tree", "file tree"],
  category: "disclosure",
  summary: "폴더처럼 중첩된 목록",
  description:
    "폴더 안에 폴더가 있는 구조를 들여쓴 목록으로 보여 주고, 필요한 가지만 펼쳐 보는 패턴입니다. 파일 탐색기나 조직도처럼 깊이가 있는 데이터를 다룹니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/tree-view/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/tree-view/TreeViewDemo").then((m) => m.TreeViewDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/tree-view/TreeViewThumbnail").then(
      (m) => m.TreeViewThumbnail,
    ),
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
