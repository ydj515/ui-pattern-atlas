import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const responsiveGridPattern: Pattern = {
  slug: "responsive-grid",
  name: "Responsive Grid",
  nameKo: "반응형 그리드",
  aliases: ["자동 열 그리드", "auto-fill grid", "fluid grid", "responsive columns"],
  category: "layout",
  summary: "폭에 따라 열 수가 바뀌는 격자",
  description:
    "칸의 최소 폭만 정해 두면 들어갈 수 있는 만큼 열이 자동으로 생기는 격자입니다. 중단점 없이 어떤 폭에서도 칸이 고르게 채워집니다.",
  whenToUse: [
    "상품, 사진, 카드처럼 같은 크기의 항목이 반복될 때",
    "화면 폭이 다양할 때",
    "중단점을 따로 관리하고 싶지 않을 때",
  ],
  whenNotToUse: [
    "항목 크기가 서로 달라야 할 때(벤토 그리드나 메이슨리 사용)",
    "열 수가 디자인상 고정돼야 할 때",
    "표처럼 행과 열을 비교할 때",
  ],
  alternatives: [
    { name: "카드 그리드", slug: "card-grid", reason: "카드 안의 줄을 맞출 때" },
    { name: "메이슨리", slug: "masonry-grid", reason: "높이가 다른 항목" },
  ],
  accessibility: [
    "DOM 순서가 곧 보이는 순서라 읽는 순서가 어긋나지 않습니다.",
    "목록에 이름을 붙여 항목 수가 함께 읽힙니다.",
    "확대해도 열이 줄어들 뿐 내용이 잘리지 않습니다(WCAG 1.4.10).",
    "repeat(auto-fill, minmax())만 쓰고 JavaScript가 필요 없습니다.",
  ],
  tags: [...BASE_TAGS, "CSS grid", "Reflow"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/responsive-grid/ResponsiveGridDemo").then(
      (m) => m.ResponsiveGridDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/responsive-grid/ResponsiveGridThumbnail").then(
      (m) => m.ResponsiveGridThumbnail,
    ),
  sources: [
    {
      fileName: "ResponsiveGrid.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/responsive-grid/ResponsiveGrid.tsx?raw"),
    },
    {
      fileName: "ResponsiveGridDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/responsive-grid/ResponsiveGridDemo.tsx?raw"),
    },
  ],
};
