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
  whenToUse: [
    "날짜별 날씨, 사진처럼 같은 형식의 화면을 차례로 볼 때",
    "화면 수가 적고 순서가 있을 때",
    "모바일에서 한 손으로 넘길 때",
  ],
  whenNotToUse: [
    "성격이 다른 화면 사이 이동(탭이나 하단 탭 바 사용)",
    "가로로 밀리는 다른 요소가 화면 안에 있을 때",
    "화면이 많아 원하는 곳까지 오래 넘겨야 할 때",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "성격이 다른 화면을 오갈 때" },
    { name: "캐러셀", slug: "carousel", reason: "여러 카드를 한 줄로 넘길 때" },
  ],
  accessibility: [
    "이전, 다음 버튼으로 같은 이동을 할 수 있습니다.",
    "지금 화면의 제목이 aria-live로 바뀌어 위치를 알립니다.",
    "보이지 않는 화면은 inert라 Tab이 넘어가지 않습니다.",
    "scroll-snap은 브라우저 기능이라 키보드 스크롤도 화면 단위로 멈춥니다.",
  ],
  tags: [...BASE_TAGS, "Scroll snap", "inert"],
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
