import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const microInteractionPattern: Pattern = {
  slug: "micro-interaction",

  name: "Micro-interaction",
  nameKo: "마이크로 인터랙션",
  aliases: ["작은 반응", "버튼 반응", "micro interaction", "tap feedback"],
  category: "motion",
  summary: "누른 순간의 작고 빠른 반응",
  description:
    "저장 버튼을 누르면 아이콘이 살짝 눌렸다가 튀어 오르며 채워지는 것처럼, 행동 하나에 바로 돌아오는 작은 반응입니다. 300ms 안에 끝나고, 결과는 아이콘과 글자로도 남겨 움직임을 놓쳐도 알 수 있게 합니다.",
  tags: [...BASE_TAGS, "Web Animations API", "aria-pressed", "Reduced motion"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/micro-interaction/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/micro-interaction/MicroToggleDemo").then(
      (m) => m.MicroToggleDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/micro-interaction/MicroToggleThumbnail").then(
      (m) => m.MicroToggleThumbnail,
    ),
  sources: [
    {
      fileName: "MicroToggle.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/micro-interaction/MicroToggle.tsx?raw"),
    },
    {
      fileName: "MicroToggleDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/micro-interaction/MicroToggleDemo.tsx?raw"),
    },
  ],
};
