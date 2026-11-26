import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const bouncePattern: Pattern = {
  slug: "bounce",

  name: "Bounce",
  nameKo: "바운스",
  aliases: ["튀기", "통통", "bounce animation", "hop"],
  category: "motion",
  summary: "바닥에 닿아 튀어 오르는 움직임",
  description:
    "공이 바닥에 떨어져 점점 낮게 튀다 멈추듯 움직이는 효과입니다. 장바구니에 상품을 담으면 장바구니가 한 번 통통 튀어 숫자가 바뀐 곳으로 눈길을 보냅니다.",
  tags: [...BASE_TAGS, "Web Animations API", "Keyframes", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/bounce/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bounce/BounceDemo").then((m) => m.BounceDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bounce/BounceThumbnail").then((m) => m.BounceThumbnail),
  sources: [
    {
      fileName: "Bounce.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bounce/Bounce.tsx?raw"),
    },
    {
      fileName: "BounceDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bounce/BounceDemo.tsx?raw"),
    },
  ],
};
