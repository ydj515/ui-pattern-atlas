import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const descriptionListPattern: Pattern = {
  slug: "description-list",

  name: "Description List",
  nameKo: "정의 목록",
  aliases: ["키 값 목록", "상세 정보", "dl", "key value list"],
  category: "list-table",
  summary: "항목명과 값의 짝",
  description:
    "주문 번호, 결제 수단처럼 이름과 값이 짝을 이룬 정보를 정리해 보여 주는 패턴입니다. 넓은 화면에서는 두 열로, 좁은 화면에서는 이름 아래 값을 놓습니다.",
  tags: [...BASE_TAGS, "dl", "Responsive"],
  loadGuide: () => import("@/entities/pattern/catalog/description-list/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/description-list/DescriptionListDemo").then(
      (m) => m.DescriptionListDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/description-list/DescriptionListThumbnail").then(
      (m) => m.DescriptionListThumbnail,
    ),
  sources: [
    {
      fileName: "DescriptionList.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/description-list/DescriptionList.tsx?raw"),
    },
    {
      fileName: "DescriptionListDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/description-list/DescriptionListDemo.tsx?raw"),
    },
  ],
};
