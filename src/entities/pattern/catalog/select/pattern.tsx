import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const selectPattern: Pattern = {
  slug: "select",

  name: "Select",
  nameKo: "셀렉트",
  aliases: ["드롭다운", "선택 상자", "dropdown", "select box", "picker"],
  category: "selection",
  summary: "목록에서 하나 고르는 드롭다운",
  description:
    "정해진 목록에서 하나를 고르는 드롭다운입니다. 기본 select 요소를 꾸며 써서 휴대폰에서는 운영체제의 선택 화면이 열리고, 키보드와 보조 기술 지원을 그대로 얻습니다.",
  tags: [...BASE_TAGS, "Native select", "Forms"],
  loadGuide: () => import("@/entities/pattern/catalog/select/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/select/SelectDemo").then((m) => m.SelectDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/select/SelectThumbnail").then((m) => m.SelectThumbnail),
  sources: [
    {
      fileName: "Select.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/select/Select.tsx?raw"),
    },
    {
      fileName: "SelectDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/select/SelectDemo.tsx?raw"),
    },
  ],
};
