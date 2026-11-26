import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const dragAndDropPattern: Pattern = {
  slug: "drag-and-drop",

  name: "Drag and Drop",
  nameKo: "드래그 앤 드롭",
  aliases: ["끌어서 놓기", "칸반", "드래그", "DnD"],
  category: "gesture",
  summary: "항목을 끌어 다른 곳에 놓기",
  description:
    "카드를 끌어 다른 칸에 놓아 상태를 바꾸는 패턴입니다. 끄는 동안 놓을 수 있는 칸을 강조하고, 같은 일을 하는 옮기기 버튼을 카드마다 둬 끌기가 유일한 방법이 되지 않게 합니다.",
  tags: [...BASE_TAGS, "HTML Drag and Drop", "WCAG 2.5.7"],
  loadGuide: () => import("@/entities/pattern/catalog/drag-and-drop/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/drag-and-drop/DragAndDropDemo").then(
      (m) => m.DragAndDropDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/drag-and-drop/DragAndDropThumbnail").then(
      (m) => m.DragAndDropThumbnail,
    ),
  sources: [
    {
      fileName: "DragAndDrop.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/drag-and-drop/DragAndDrop.tsx?raw"),
    },
    {
      fileName: "DragAndDropDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/drag-and-drop/DragAndDropDemo.tsx?raw"),
    },
  ],
};
