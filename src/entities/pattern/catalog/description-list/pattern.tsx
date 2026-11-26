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
  whenToUse: [
    "주문 상세, 프로필, 제품 사양",
    "읽기 전용 정보를 정리할 때",
    "값 옆에 복사 같은 작은 동작이 붙을 때",
  ],
  whenNotToUse: [
    "여러 항목을 비교할 때(데이터 테이블 사용)",
    "값을 바로 고쳐야 할 때(폼 사용)",
    "짝이 아닌 일반 목록",
  ],
  alternatives: [
    { name: "데이터 테이블", slug: "data-table", reason: "여러 항목의 같은 값을 비교할 때" },
  ],
  accessibility: [
    "dl, dt, dd를 써서 값이 이름과 함께 읽힙니다.",
    "제목으로 섹션 이름을 붙입니다.",
    "값 옆의 복사 버튼은 결과를 글로 바꿔 보여 줍니다.",
    "좁은 화면에서도 읽는 순서가 바뀌지 않습니다.",
  ],
  tags: [...BASE_TAGS, "dl", "Responsive"],
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
