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
  whenToUse: [
    "새로 추가된 메뉴나 기능을 알릴 때",
    "설명 없이 가볍게 눈길만 끌 때",
    "한 번 보면 충분할 때",
  ],
  whenNotToUse: [
    "여러 메뉴에 동시에 붙일 때(어디부터 봐야 할지 모름)",
    "개수를 알려야 할 때(배지 사용)",
    "자세한 안내가 필요할 때(기능 소개나 코치마크 사용)",
  ],
  alternatives: [
    { name: "배지", slug: "badge", reason: "개수를 알릴 때" },
    { name: "안 읽음 표시", slug: "unread-indicator", reason: "목록의 새 항목" },
  ],
  accessibility: [
    '점은 장식이고 화면에 보이지 않는 "새 기능" 글을 메뉴 이름 뒤에 읽어 줍니다.',
    "메뉴를 열면 사라지고, 그 사실을 저장해 다시 나타나지 않게 합니다.",
    "점 크기가 작아도 메뉴 전체가 누르는 영역입니다.",
    "현재 메뉴는 aria-current로 따로 표시합니다.",
  ],
  tags: [...BASE_TAGS, "Visually hidden text", "Onboarding"],
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
