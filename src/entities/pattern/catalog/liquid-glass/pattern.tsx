import { type Pattern } from "@/entities/pattern/model/pattern";
import { LiquidGlassThumbnail } from "@/entities/pattern/catalog/liquid-glass/LiquidGlassThumbnail";

export const liquidGlassPattern: Pattern = {
  slug: "liquid-glass",
  kind: "concept",
  name: "Liquid Glass",
  nameKo: "리퀴드 글래스",
  aliases: ["리퀴드 글라스", "굴절 유리", "liquid glass UI"],
  category: "design-style",
  summary: "빛과 색이 비치고 굴절되는 유리 표면",
  description:
    "투명한 유리 면 아래로 배경의 빛과 색이 비치고, 가장자리에서 빛이 반사되는 것처럼 보이게 하는 스타일 사례입니다. 이 예시는 채도를 높인 흐림, 위쪽 반사광, 안쪽 하이라이트로 근사하며, 실제 굴절은 플랫폼 기능에 따라 다릅니다.",
  origin: "2025년 애플이 iOS 26을 비롯한 운영체제에 들여온 디자인 언어의 이름이에요.",
  whenToUse: [
    "사진, 영상 위에 떠 있는 조작 막대",
    "콘텐츠를 가리지 않고 컨트롤을 겹칠 때",
    "최신 플랫폼의 인상을 맞출 때",
  ],
  whenNotToUse: [
    "밝고 복잡한 배경 위 긴 글",
    "웹에서 굴절을 흉내 내려 무거운 필터를 남용할 때",
    "대비를 보장할 수 없는 화면",
  ],
  alternatives: [
    { name: "글래스모피즘", slug: "glassmorphism", reason: "단순한 젖빛 유리" },
    { name: "머티리얼", slug: "material-design", reason: "불투명한 면과 그림자" },
  ],
  accessibility: [
    "배경이 바뀌어도 글자가 읽히도록 글자 그림자와 대비를 함께 확인합니다.",
    "prefers-reduced-transparency에서는 불투명한 면으로 바꾸는 것을 권장합니다.",
    "반사광 레이어는 pointer-events: none의 장식입니다.",
    "상태는 글자로 알립니다.",
  ],
  tags: ["디자인 스타일", "backdrop-filter"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/liquid-glass/LiquidGlassDemo").then(
      (m) => m.LiquidGlassDemo,
    ),
  Thumbnail: LiquidGlassThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/liquid-glass/LiquidGlassDemo.tsx?raw"),
};
