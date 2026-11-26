import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const confettiPattern: Pattern = {
  slug: "confetti",

  name: "Confetti",
  nameKo: "축하 효과",
  aliases: ["컨페티", "폭죽 효과", "celebration", "party popper"],
  category: "completion",
  summary: "목표 달성 순간의 종이 조각",
  description:
    "30일 걷기처럼 오래 걸린 목표를 이룬 순간 종이 조각이 한 번 터져 흩어지는 효과입니다. 장식일 뿐이라 화면 읽기에서는 숨기고, 달성 문구를 함께 보여 줍니다.",
  tags: [...BASE_TAGS, "Web Animations API", "aria-hidden", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/confetti/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/confetti/ConfettiDemo").then((m) => m.ConfettiDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/confetti/ConfettiThumbnail").then(
      (m) => m.ConfettiThumbnail,
    ),
  sources: [
    {
      fileName: "Confetti.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/confetti/Confetti.tsx?raw"),
    },
    {
      fileName: "ConfettiDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/confetti/ConfettiDemo.tsx?raw"),
    },
  ],
};
