import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const staggerPattern: Pattern = {
  slug: "stagger",

  name: "Stagger",
  nameKo: "순차 등장",
  aliases: ["순차 애니메이션", "스태거", "staggered animation", "cascade"],
  category: "motion",
  summary: "여러 요소를 짧은 간격으로 차례로 보여 주기",
  description:
    "목록의 항목들이 한꺼번에 나타나지 않고 짧은 간격을 두고 위에서부터 차례로 올라오는 패턴입니다. 간격은 항목당 수십 ms로 짧게 두고, 전체가 400ms 안에 끝나게 합니다.",
  tags: [...BASE_TAGS, "@starting-style", "transition-delay", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/stagger/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/stagger/StaggerDemo").then((m) => m.StaggerDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/stagger/StaggerThumbnail").then((m) => m.StaggerThumbnail),
  sources: [
    {
      fileName: "Stagger.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/stagger/Stagger.tsx?raw"),
    },
    {
      fileName: "StaggerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/stagger/StaggerDemo.tsx?raw"),
    },
  ],
};
