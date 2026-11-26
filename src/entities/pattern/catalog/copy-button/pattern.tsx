import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const copyButtonPattern: Pattern = {
  slug: "copy-button",

  name: "Copy Button",
  nameKo: "복사 버튼",
  aliases: ["클립보드 복사", "링크 복사", "copy to clipboard", "clipboard"],
  category: "button",
  summary: "눌러서 복사하고 결과 표시",
  description:
    '누르면 링크나 코드를 클립보드에 복사하고, 버튼 자리에서 잠깐 "복사됨"으로 바뀌어 결과를 알려 주는 패턴입니다. 복사가 막히면 그 사실도 알려 줍니다.',
  tags: [...BASE_TAGS, "Clipboard API", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/copy-button/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/copy-button/CopyButtonDemo").then((m) => m.CopyButtonDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/copy-button/CopyButtonThumbnail").then(
      (m) => m.CopyButtonThumbnail,
    ),
  sources: [
    {
      fileName: "CopyButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/copy-button/CopyButton.tsx?raw"),
    },
    {
      fileName: "CopyButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/copy-button/CopyButtonDemo.tsx?raw"),
    },
  ],
};
