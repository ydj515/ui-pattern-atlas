import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const backToTopPattern: Pattern = {
  slug: "back-to-top",

  name: "Back to Top",
  nameKo: "맨 위로",
  aliases: ["위로 가기", "탑 버튼", "scroll to top", "back to top button"],
  category: "navigation",
  summary: "긴 페이지에서 처음으로 돌아가기",
  description:
    "긴 페이지를 한참 내렸을 때만 나타나, 누르면 맨 위로 돌아가는 버튼입니다. 돌아간 뒤 포커스를 맨 위 제목으로 옮겨 키보드 사용자도 처음부터 이어 갑니다.",
  tags: [...BASE_TAGS, "Focus management", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/back-to-top/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/back-to-top/BackToTopDemo").then((m) => m.BackToTopDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/back-to-top/BackToTopThumbnail").then(
      (m) => m.BackToTopThumbnail,
    ),
  sources: [
    {
      fileName: "BackToTop.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/back-to-top/BackToTop.tsx?raw"),
    },
    {
      fileName: "BackToTopDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/back-to-top/BackToTopDemo.tsx?raw"),
    },
  ],
};
