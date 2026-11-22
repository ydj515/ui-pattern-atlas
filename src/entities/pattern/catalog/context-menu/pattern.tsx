import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ContextMenuThumbnail } from "@/entities/pattern/catalog/context-menu/ContextMenuThumbnail";

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
  whenToUse: [
    "파일, 메시지, 표의 행처럼 대상마다 같은 동작을 반복해서 쓸 때",
    "숙련된 사용자를 위한 빠른 지름길을 더할 때",
    "캔버스나 편집기처럼 버튼을 늘어놓기 어려운 화면일 때",
  ],
  whenNotToUse: [
    "그 동작을 할 수 있는 유일한 방법일 때(우클릭은 잘 발견되지 않습니다)",
    "브라우저 기본 우클릭 메뉴가 더 쓸모 있는 링크나 본문 텍스트 위일 때",
    "처음 쓰는 사용자가 꼭 알아야 하는 주요 동작일 때",
  ],
  alternatives: [
    {
      name: "드롭다운 메뉴",
      slug: "dropdown-menu",
      reason: "눈에 보이는 버튼으로 같은 동작을 제공할 때",
    },
    {
      name: "바텀시트",
      slug: "bottom-sheet",
      reason: "모바일에서 길게 누른 뒤 큰 선택지를 보여 줄 때",
    },
  ],
  accessibility: [
    "대상에 포커스가 있을 때 Shift+F10이나 메뉴 키로도 열려 마우스 없이 쓸 수 있습니다.",
    "터치에서는 0.5초 길게 누르면 열리고, 열리면 첫 항목에 포커스가 갑니다.",
    'role="menu"와 role="menuitem"을 쓰고 ↑↓·Home·End로 이동하며, Esc나 Tab으로 닫으면 대상으로 포커스가 돌아갑니다.',
    "같은 동작을 화면의 다른 버튼이나 메뉴로도 제공해 우클릭을 모르는 사용자도 쓸 수 있게 합니다.",
  ],
  tags: [...BASE_TAGS, "Keyboard", "Touch"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/context-menu/ContextMenuDemo").then(
      (m) => m.ContextMenuDemo,
    ),
  Thumbnail: ContextMenuThumbnail,
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
