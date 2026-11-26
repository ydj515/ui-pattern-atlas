import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const tagPattern: Pattern = {
  slug: "tag",

  name: "Tag",
  nameKo: "태그",
  aliases: ["라벨", "칩", "label", "pill"],
  category: "indicator",
  summary: "분류를 나타내는 작은 라벨",
  description:
    "글이나 항목의 분류, 주제를 작은 라벨로 붙이는 패턴입니다. 편집 화면에서는 태그마다 빼기 버튼을 둘 수 있습니다.",
  tags: [...BASE_TAGS, "Label", "Button"],
  loadGuide: () => import("@/entities/pattern/catalog/tag/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/tag/TagDemo").then((m) => m.TagDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/tag/TagThumbnail").then((m) => m.TagThumbnail),
  sources: [
    {
      fileName: "Tag.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tag/Tag.tsx?raw"),
    },
    {
      fileName: "TagDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tag/TagDemo.tsx?raw"),
    },
  ],
};
