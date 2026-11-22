import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { DragAndDropThumbnail } from "@/entities/pattern/catalog/drag-and-drop/DragAndDropThumbnail";

export const dragAndDropPattern: Pattern = {
  slug: "drag-and-drop",
  name: "Drag and Drop",
  nameKo: "드래그 앤 드롭",
  aliases: ["끌어서 놓기", "칸반", "드래그", "DnD"],
  category: "gesture",
  summary: "항목을 끌어 다른 곳에 놓기",
  description:
    "카드를 끌어 다른 칸에 놓아 상태를 바꾸는 패턴입니다. 끄는 동안 놓을 수 있는 칸을 강조하고, 같은 일을 하는 옮기기 버튼을 카드마다 둬 끌기가 유일한 방법이 되지 않게 합니다.",
  whenToUse: [
    "칸반 보드처럼 상태를 칸으로 나눠 보여 줄 때",
    "파일을 폴더나 업로드 영역으로 옮길 때",
    "공간적인 위치가 의미를 가질 때",
  ],
  whenNotToUse: [
    "순서만 바꿀 때(순서 바꾸기 목록 사용)",
    "옮길 곳이 많아 끄는 거리가 길 때(옮기기 메뉴 사용)",
    "터치 화면에서 스크롤과 자주 겹칠 때",
  ],
  alternatives: [
    { name: "순서 바꾸기", slug: "sortable-list", reason: "같은 목록 안에서 순서만 바꿀 때" },
    { name: "파일 업로드", slug: "file-upload", reason: "파일을 끌어다 놓을 때" },
  ],
  accessibility: [
    "카드마다 옮기기 버튼이 있어 키보드와 스위치 사용자도 같은 일을 할 수 있습니다(WCAG 2.5.7).",
    "옮긴 결과(디자인 검토 → 완료)는 role=status로 읽어 줍니다.",
    "놓을 칸은 이름이 있는 section이라 위치를 구분할 수 있습니다.",
    "강조는 색과 점선 테두리 두 가지로 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "React", "Tailwind CSS", "HTML Drag and Drop", "WCAG 2.5.7"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/drag-and-drop/DragAndDropDemo").then(
      (m) => m.DragAndDropDemo,
    ),
  Thumbnail: DragAndDropThumbnail,
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
