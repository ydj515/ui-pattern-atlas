import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const momentumScrollingPattern: Pattern = {
  slug: "momentum-scrolling",

  name: "Momentum Scrolling",
  nameKo: "관성 스크롤",
  aliases: ["관성", "플링", "inertia scrolling", "fling"],
  category: "gesture",
  summary: "손을 떼도 이어지다 멈추는 스크롤",
  description:
    "빠르게 밀고 손을 떼면 그 속도로 계속 미끄러지다가 점점 느려져 멈추는 스크롤입니다. 터치와 휠은 브라우저가 이미 해 주므로, 마우스로 끌어 넘기는 경우에만 같은 느낌을 더합니다.",
  tags: [...BASE_TAGS, "requestAnimationFrame", "Reduced motion"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/momentum-scrolling/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/momentum-scrolling/MomentumScrollDemo").then(
      (m) => m.MomentumScrollDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/momentum-scrolling/MomentumScrollThumbnail").then(
      (m) => m.MomentumScrollThumbnail,
    ),
  sources: [
    {
      fileName: "MomentumScroll.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/momentum-scrolling/MomentumScroll.tsx?raw"),
    },
    {
      fileName: "MomentumScrollDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/momentum-scrolling/MomentumScrollDemo.tsx?raw"),
    },
  ],
};
