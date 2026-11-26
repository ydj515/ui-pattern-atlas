import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const marqueePattern: Pattern = {
  slug: "marquee",

  name: "Marquee",
  nameKo: "흐르는 글자",
  aliases: ["마키", "티커", "흐르는 띠", "ticker", "scrolling text"],
  category: "text-motion",
  summary: "옆으로 끝없이 흘러가는 띠",
  description:
    "무료 배송, 오늘 출발 같은 짧은 문구가 띠 안에서 옆으로 끝없이 흘러가는 표현입니다. 같은 목록을 두 번 이어 붙여 이음매 없이 반복하고, 마우스를 올리거나 멈추기 버튼을 누르면 멈춥니다.",
  tags: [...BASE_TAGS, "CSS animation", "WCAG 2.2.2", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/marquee/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/marquee/MarqueeDemo").then((m) => m.MarqueeDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/marquee/MarqueeThumbnail").then((m) => m.MarqueeThumbnail),
  sources: [
    {
      fileName: "Marquee.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/marquee/Marquee.tsx?raw"),
    },
    {
      fileName: "MarqueeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/marquee/MarqueeDemo.tsx?raw"),
    },
  ],
};
