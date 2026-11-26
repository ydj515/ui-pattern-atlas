import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const edgeSwipePattern: Pattern = {
  slug: "edge-swipe",

  name: "Edge Swipe",
  nameKo: "가장자리 스와이프",
  aliases: ["가장자리에서 밀기", "뒤로 스와이프", "edge gesture", "drawer swipe"],
  category: "gesture",
  summary: "가장자리에서 밀어 메뉴 열기",
  description:
    "화면 왼쪽 가장자리에서 시작해 오른쪽으로 밀면 메뉴가 손가락을 따라 나오는 패턴입니다. 가장자리 24px 안에서 시작한 끌기만 받아 화면 안의 다른 가로 스크롤과 겹치지 않게 합니다.",
  tags: [...BASE_TAGS, "Pointer Events", "aria-expanded"],
  loadGuide: () => import("@/entities/pattern/catalog/edge-swipe/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/edge-swipe/EdgeSwipeDemo").then((m) => m.EdgeSwipeDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/edge-swipe/EdgeSwipeThumbnail").then(
      (m) => m.EdgeSwipeThumbnail,
    ),
  sources: [
    {
      fileName: "EdgeSwipe.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/edge-swipe/EdgeSwipe.tsx?raw"),
    },
    {
      fileName: "EdgeSwipeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/edge-swipe/EdgeSwipeDemo.tsx?raw"),
    },
  ],
};
