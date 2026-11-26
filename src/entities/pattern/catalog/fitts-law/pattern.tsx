import { type Pattern } from "@/entities/pattern/model/pattern";

export const fittsLawPattern: Pattern = {
  slug: "fitts-law",

  kind: "concept",
  name: "Fitts's Law",
  nameKo: "피츠의 법칙",
  aliases: ["피츠 법칙", "목표 크기와 거리", "Fitts law", "target size"],
  category: "ux-laws",
  summary: "크고 가까운 버튼이 누르기 쉽다",
  description:
    "누를 대상이 크고 가까울수록 빨리, 정확하게 누를 수 있다는 원리입니다. 자주 쓰는 주요 버튼은 크게 만들고 손가락이나 커서가 닿기 쉬운 곳에 둡니다.",
  tags: ["UX 법칙", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/fitts-law/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/fitts-law/FittsLawDemo").then((m) => m.FittsLawDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/fitts-law/FittsLawThumbnail").then(
      (m) => m.FittsLawThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/fitts-law/FittsLawDemo.tsx?raw"),
};
