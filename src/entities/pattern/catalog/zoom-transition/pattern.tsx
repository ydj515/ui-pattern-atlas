import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const zoomTransitionPattern: Pattern = {
  slug: "zoom-transition",

  name: "Zoom Transition",
  nameKo: "줌 전환",
  aliases: ["확대 전환", "스케일 전환", "zoom in transition", "app launch animation"],
  category: "motion",
  summary: "아이콘에서 화면이 커져 나오기",
  description:
    "홈 화면의 앱 아이콘을 누르면 그 아이콘 위치에서 화면이 커져 나오고, 닫으면 다시 그 아이콘으로 줄어드는 전환입니다. transform-origin을 누른 위치에 맞춰 어디서 열린 화면인지 보여 줍니다.",
  tags: [...BASE_TAGS, "@starting-style", "transform-origin", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/zoom-transition/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/zoom-transition/ZoomTransitionDemo").then(
      (m) => m.ZoomTransitionDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/zoom-transition/ZoomTransitionThumbnail").then(
      (m) => m.ZoomTransitionThumbnail,
    ),
  sources: [
    {
      fileName: "ZoomTransition.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/zoom-transition/ZoomTransition.tsx?raw"),
    },
    {
      fileName: "ZoomTransitionDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/zoom-transition/ZoomTransitionDemo.tsx?raw"),
    },
  ],
};
