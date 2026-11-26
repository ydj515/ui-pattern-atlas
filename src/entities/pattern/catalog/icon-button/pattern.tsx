import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const iconButtonPattern: Pattern = {
  slug: "icon-button",

  name: "Icon Button",
  nameKo: "아이콘 버튼",
  aliases: ["아이콘만 있는 버튼", "툴바 버튼", "icon-only button", "ghost button"],
  category: "button",
  summary: "글자 없이 아이콘만 있는 버튼",
  description:
    "글자 대신 아이콘만으로 행동을 나타내는 작은 버튼입니다. 이름을 보조 기술에 알리고, 마우스를 올리거나 키보드로 오면 같은 이름을 툴팁으로 보여 줍니다.",
  tags: [...BASE_TAGS, "aria-label", "Tooltip"],
  loadGuide: () => import("@/entities/pattern/catalog/icon-button/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/icon-button/IconButtonDemo").then((m) => m.IconButtonDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/icon-button/IconButtonThumbnail").then(
      (m) => m.IconButtonThumbnail,
    ),
  sources: [
    {
      fileName: "IconButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/icon-button/IconButton.tsx?raw"),
    },
    {
      fileName: "IconButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/icon-button/IconButtonDemo.tsx?raw"),
    },
  ],
};
