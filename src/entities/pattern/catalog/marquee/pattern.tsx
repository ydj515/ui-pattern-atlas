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
  origin:
    "극장 입구 차양 간판(marquee)에 공연 이름이 흘러가듯 표시되던 데서 온 이름이에요. 초기 웹에는 같은 이름의 HTML 태그 <marquee>도 있었어요.",
  whenToUse: [
    "배송, 혜택처럼 짧고 덜 중요한 문구 여러 개",
    "로고나 고객사 이름을 나열할 때",
    "페이지 맨 위의 얇은 띠",
  ],
  whenNotToUse: [
    "꼭 읽어야 하는 공지(배너 사용)",
    "누를 수 있는 링크가 많은 목록",
    "본문 사이에 두어 읽기를 방해할 때",
  ],
  alternatives: [
    { name: "배너 알림", slug: "alert-banner", reason: "꼭 읽어야 하는 공지" },
    { name: "캐러셀", slug: "carousel", reason: "사용자가 넘기며 볼 때" },
  ],
  accessibility: [
    "두 번째 목록은 aria-hidden이라 화면 읽기에서 한 번만 들립니다.",
    "마우스를 올리거나 포커스가 들어오면 멈추고, 멈추기 버튼도 있습니다(WCAG 2.2.2).",
    "동작 줄이기에서는 흐르지 않고 줄바꿈해 모두 보여 줍니다.",
    "띠 전체에 aria-label로 이름을 붙입니다.",
  ],
  tags: [...BASE_TAGS, "CSS animation", "WCAG 2.2.2", "Reduced motion"],
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
