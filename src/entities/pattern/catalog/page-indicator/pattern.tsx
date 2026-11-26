import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const pageIndicatorPattern: Pattern = {
  slug: "page-indicator",
  name: "Page Indicator",
  nameKo: "페이지 점",
  aliases: ["페이지 도트", "캐러셀 점", "dots", "pagination dots"],
  category: "indicator",
  summary: "캐러셀의 현재 위치 점",
  description:
    "몇 장으로 된 화면에서 지금 몇 번째인지를 점으로 보여 주는 패턴입니다. 현재 점은 색뿐 아니라 길이로도 구분합니다.",
  whenToUse: [
    "온보딩, 캐러셀처럼 몇 장 안 되는 순서",
    "전체 장수와 위치를 함께 보여 줄 때",
    "점을 눌러 바로 넘어갈 수 있을 때",
  ],
  whenNotToUse: [
    '장수가 많을 때("3 / 12" 같은 숫자 사용)',
    "단계에 이름이 있을 때(스테퍼 사용)",
    "목록의 페이지 이동(페이지네이션 사용)",
  ],
  alternatives: [
    { name: "스테퍼", slug: "stepper", reason: "단계마다 이름이 있을 때" },
    { name: "페이지네이션", slug: "pagination", reason: "목록의 쪽 이동" },
  ],
  accessibility: [
    '누를 수 있으면 점은 "2 / 4" 이름의 버튼이고 현재 점은 aria-current입니다.',
    "누를 수 없으면 위치를 화면에 보이지 않는 글로 알립니다.",
    "현재 점은 길이로도 구분해 색에만 의존하지 않습니다.",
    "누르는 영역은 점보다 크게 잡습니다.",
  ],
  tags: [...BASE_TAGS, "aria-current", "Carousel"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/page-indicator/PageIndicatorDemo").then(
      (m) => m.PageIndicatorDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/page-indicator/PageIndicatorThumbnail").then(
      (m) => m.PageIndicatorThumbnail,
    ),
  sources: [
    {
      fileName: "PageIndicator.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/page-indicator/PageIndicator.tsx?raw"),
    },
    {
      fileName: "PageIndicatorDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/page-indicator/PageIndicatorDemo.tsx?raw"),
    },
  ],
};
