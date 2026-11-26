import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const contextMenuPattern: Pattern = {
  slug: "context-menu",

  name: "Context Menu",
  nameKo: "컨텍스트 메뉴",
  aliases: [
    "우클릭 메뉴",
    "오른쪽 클릭 메뉴",
    "길게 누르기 메뉴",
    "right-click menu",
    "popup menu",
  ],
  category: "overlay",
  summary: "항목을 우클릭하거나 길게 눌러 여는 메뉴",
  description:
    "파일이나 메시지 같은 대상 위에서 우클릭하거나 길게 누르면, 그 대상에 할 수 있는 동작을 누른 자리에 띄우는 패턴입니다. 익숙한 사용자에게 빠른 지름길이 됩니다.",
  tags: [...BASE_TAGS, "Keyboard", "Touch"],
  loadGuide: () => import("@/entities/pattern/catalog/context-menu/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/context-menu/ContextMenuDemo").then(
      (m) => m.ContextMenuDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/context-menu/ContextMenuThumbnail").then(
      (m) => m.ContextMenuThumbnail,
    ),
  sources: [
    {
      fileName: "ContextMenu.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/context-menu/ContextMenu.tsx?raw"),
    },
    {
      fileName: "ContextMenuDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/context-menu/ContextMenuDemo.tsx?raw"),
    },
  ],
};
