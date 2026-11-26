import { type Pattern } from "@/entities/pattern/model/pattern";

export const neonSignPattern: Pattern = {
  slug: "neon-sign",

  kind: "concept",
  name: "Neon Sign",
  nameKo: "네온 사인",
  aliases: ["네온", "네온 글자", "neon text", "glow text"],
  category: "typography-style",
  summary: "발광하는 튜브와 같은 외곽과 번짐",
  description:
    "어두운 바탕에서 글자 주변으로 빛이 여러 겹 번져 네온관처럼 보이게 하는 스타일입니다. 흰 중심과 분홍 빛 번짐을 겹칩니다.",
  tags: ["글자 스타일", "Neon Sign"],
  loadGuide: () => import("@/entities/pattern/catalog/neon-sign/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/neon-sign/NeonSignDemo").then((m) => m.NeonSignDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/neon-sign/NeonSignThumbnail").then(
      (m) => m.NeonSignThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/neon-sign/NeonSignDemo.tsx?raw"),
};
