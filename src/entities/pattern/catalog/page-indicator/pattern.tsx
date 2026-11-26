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
  tags: [...BASE_TAGS, "aria-current", "Carousel"],
  loadGuide: () => import("@/entities/pattern/catalog/page-indicator/guide").then((m) => m.guide),
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
