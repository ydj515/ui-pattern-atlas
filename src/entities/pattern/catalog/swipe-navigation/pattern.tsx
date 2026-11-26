import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const swipeNavigationPattern: Pattern = {
  slug: "swipe-navigation",

  name: "Swipe Navigation",
  nameKo: "스와이프 이동",
  aliases: ["옆으로 넘기기", "페이지 넘기기", "swipe pages", "paging"],
  category: "gesture",
  summary: "옆으로 밀어 다음 화면으로",
  description:
    "같은 종류의 화면을 옆으로 밀어 넘기는 패턴입니다. CSS scroll snap으로 한 화면씩 딱 맞춰 멈추고, 지금 화면의 제목과 이전, 다음 버튼을 위에 둡니다.",
  tags: [...BASE_TAGS, "Scroll snap", "inert"],
  loadGuide: () => import("@/entities/pattern/catalog/swipe-navigation/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/swipe-navigation/SwipeNavigationDemo").then(
      (m) => m.SwipeNavigationDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/swipe-navigation/SwipeNavigationThumbnail").then(
      (m) => m.SwipeNavigationThumbnail,
    ),
  sources: [
    {
      fileName: "SwipeNavigation.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/swipe-navigation/SwipeNavigation.tsx?raw"),
    },
    {
      fileName: "SwipeNavigationDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/swipe-navigation/SwipeNavigationDemo.tsx?raw"),
    },
  ],
};
