import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const slidePattern: Pattern = {
  slug: "slide",

  name: "Slide",
  nameKo: "슬라이드",
  aliases: ["슬라이드 인", "밀려 들어오기", "slide in", "slide out"],
  category: "motion",
  summary: "한쪽 가장자리에서 밀려 들어오기",
  description:
    "요소가 한쪽 가장자리에서 밀려 들어오고 같은 쪽으로 빠져나가는 전환입니다. 오고 간 방향이 같아서 어디에 숨어 있는지 알 수 있습니다.",
  tags: [...BASE_TAGS, "@starting-style", "CSS transition", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/slide/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/slide/SlideDemo").then((m) => m.SlideDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/slide/SlideThumbnail").then((m) => m.SlideThumbnail),
  sources: [
    {
      fileName: "Slide.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/slide/Slide.tsx?raw"),
    },
    {
      fileName: "SlideDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/slide/SlideDemo.tsx?raw"),
    },
  ],
};
