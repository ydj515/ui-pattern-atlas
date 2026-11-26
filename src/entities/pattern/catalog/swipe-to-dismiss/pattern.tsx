import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const swipeToDismissPattern: Pattern = {
  slug: "swipe-to-dismiss",

  name: "Swipe to Dismiss",
  nameKo: "끌어서 닫기",
  aliases: ["아래로 밀어 닫기", "시트 닫기", "drag to dismiss", "pull down to close"],
  category: "gesture",
  summary: "시트를 아래로 끌어 닫기",
  description:
    "바텀 시트의 손잡이를 아래로 끌면 시트가 손가락을 따라 내려가고, 일정 거리를 넘기면 닫히는 패턴입니다. 덜 끌고 놓으면 원래 자리로 돌아가 실수로 닫히지 않습니다.",
  tags: [...BASE_TAGS, "Pointer Events", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/swipe-to-dismiss/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/swipe-to-dismiss/SwipeToDismissDemo").then(
      (m) => m.SwipeToDismissDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/swipe-to-dismiss/SwipeToDismissThumbnail").then(
      (m) => m.SwipeToDismissThumbnail,
    ),
  sources: [
    {
      fileName: "SwipeToDismiss.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/swipe-to-dismiss/SwipeToDismiss.tsx?raw"),
    },
    {
      fileName: "SwipeToDismissDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/swipe-to-dismiss/SwipeToDismissDemo.tsx?raw"),
    },
  ],
};
