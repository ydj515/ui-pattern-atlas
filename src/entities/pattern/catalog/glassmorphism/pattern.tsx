import { type Pattern } from "@/entities/pattern/model/pattern";

export const glassmorphismPattern: Pattern = {
  slug: "glassmorphism",
  kind: "concept",
  name: "Glassmorphism",
  nameKo: "글래스모피즘",
  aliases: ["글래스 효과", "유리 질감", "frosted glass"],
  category: "design-style",
  summary: "흐린 유리 질감",
  description:
    "반투명한 면 뒤의 배경을 흐리게 비쳐 젖빛 유리처럼 보이게 하는 스타일입니다. backdrop-filter로 뒤를 흐리고 얇은 흰 테두리로 유리의 모서리를 표현합니다.",
  origin:
    "유리(glass)와 '-morphism'을 합친 말이에요. 2020년 무렵 디자이너 미하우 말레비치(Michał Malewicz)가 이름 붙인 것으로 알려져 있어요.",
  whenToUse: [
    "색이 풍부한 배경 위에 떠 있는 카드나 메뉴",
    "뒤의 맥락을 살짝 보여 주며 겹칠 때",
    "분위기를 살리는 랜딩, 위젯",
  ],
  whenNotToUse: [
    "배경이 단조로워 유리 효과가 드러나지 않을 때",
    "글이 많은 화면(대비가 배경에 따라 흔들림)",
    "저사양 기기가 많은 서비스(흐림 비용)",
  ],
  alternatives: [
    { name: "리퀴드 글래스", slug: "liquid-glass", reason: "빛 반사와 굴절을 더한 유리" },
    { name: "플랫", slug: "flat-design", reason: "배경과 상관없이 대비가 일정한 면" },
  ],
  accessibility: [
    "배경이 바뀌어도 글자 대비가 유지되는지 가장 밝은 곳에서 확인합니다.",
    "prefers-reduced-transparency를 켠 사용자에게는 불투명 면을 주는 것을 권장합니다.",
    "테두리로 카드 경계를 보여 줍니다.",
    "상태는 글자로도 알립니다.",
  ],
  tags: ["디자인 스타일", "backdrop-filter"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/glassmorphism/GlassmorphismDemo").then(
      (m) => m.GlassmorphismDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/glassmorphism/GlassmorphismThumbnail").then(
      (m) => m.GlassmorphismThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/glassmorphism/GlassmorphismDemo.tsx?raw"),
};
