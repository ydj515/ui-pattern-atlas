import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const pullToRefreshPattern: Pattern = {
  slug: "pull-to-refresh",

  name: "Pull to Refresh",
  nameKo: "당겨서 새로고침",
  aliases: ["Pull-to-refresh", "새로 고침", "당기기"],
  category: "gesture",
  summary: "목록 상단을 아래로 당겨 최신 항목을 요청",
  description:
    "스크롤 영역이 맨 위에 있을 때 아래로 당겼다가 놓으면 데이터를 다시 불러옵니다. 새로고침 버튼도 같은 요청을 실행할 수 있습니다.",
  tags: BASE_TAGS,
  loadGuide: () => import("@/entities/pattern/catalog/pull-to-refresh/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/pull-to-refresh/PullToRefreshDemo").then(
      (m) => m.PullToRefreshDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/pull-to-refresh/PullToRefreshThumbnail").then(
      (m) => m.PullToRefreshThumbnail,
    ),
  sources: [
    {
      fileName: "PullToRefresh.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/pull-to-refresh/PullToRefresh.tsx?raw"),
    },
    {
      fileName: "PullToRefreshDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/pull-to-refresh/PullToRefreshDemo.tsx?raw"),
    },
  ],
};
