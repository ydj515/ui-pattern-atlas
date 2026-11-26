import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const featureDotPattern: Pattern = {
  slug: "feature-dot",

  name: "Feature Dot",
  nameKo: "새 기능 점",
  aliases: ["새 기능 표시", "NEW 점", "new badge", "discovery dot"],
  category: "indicator",
  summary: "새로 생긴 메뉴에 붙는 점",
  description:
    "새로 생긴 메뉴 옆에 작은 점을 붙여 눈길을 끌고, 한 번 열어 보면 사라지게 하는 패턴입니다. 본 뒤에도 남아 있으면 의미가 없어지므로 열었는지를 기억합니다.",
  tags: [...BASE_TAGS, "Visually hidden text", "Onboarding"],
  loadGuide: () => import("@/entities/pattern/catalog/feature-dot/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/feature-dot/FeatureDotDemo").then((m) => m.FeatureDotDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/feature-dot/FeatureDotThumbnail").then(
      (m) => m.FeatureDotThumbnail,
    ),
  sources: [
    {
      fileName: "FeatureDot.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/feature-dot/FeatureDot.tsx?raw"),
    },
    {
      fileName: "FeatureDotDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/feature-dot/FeatureDotDemo.tsx?raw"),
    },
  ],
};
