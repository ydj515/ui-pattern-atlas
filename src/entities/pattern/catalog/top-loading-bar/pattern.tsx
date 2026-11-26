import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const topLoadingBarPattern: Pattern = {
  slug: "top-loading-bar",

  name: "Top Loading Bar",
  nameKo: "상단 로딩 바",
  aliases: ["페이지 로딩 바", "진행 막대", "nprogress", "route progress", "loading bar"],
  category: "loading",
  summary: "페이지를 이동할 때 화면 상단의 가는 막대로 로딩 상태 표시",
  description:
    "페이지나 화면을 옮길 때 맨 위에 가는 막대가 차오르며 불러오는 중임을 알리는 패턴입니다. 기존 화면을 그대로 두어 깜빡임이 없고, 빠르게 끝나는 이동에서는 아예 나타나지 않습니다.",
  tags: [...BASE_TAGS, "progressbar", "aria-busy"],
  loadGuide: () => import("@/entities/pattern/catalog/top-loading-bar/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/top-loading-bar/TopLoadingBarDemo").then(
      (m) => m.TopLoadingBarDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/top-loading-bar/TopLoadingBarThumbnail").then(
      (m) => m.TopLoadingBarThumbnail,
    ),
  sources: [
    {
      fileName: "TopLoadingBar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/top-loading-bar/TopLoadingBar.tsx?raw"),
    },
    {
      fileName: "TopLoadingBarDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/top-loading-bar/TopLoadingBarDemo.tsx?raw"),
    },
  ],
};
