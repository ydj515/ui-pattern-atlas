import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const notFoundPagePattern: Pattern = {
  slug: "not-found-page",

  name: "404 Page",
  nameKo: "찾을 수 없는 페이지",
  aliases: ["404", "페이지 없음", "not found", "page not found"],
  category: "empty-error",
  summary: "주소가 틀렸을 때 돌아갈 길",
  description:
    "없는 주소로 들어왔을 때 상황을 쉬운 말로 알리고, 검색이나 홈으로 이어지는 길을 주는 패턴입니다. 오류 코드보다 다음 행동이 먼저 보이게 합니다.",
  tags: [...BASE_TAGS, "role=search", "HTTP 404"],
  loadGuide: () => import("@/entities/pattern/catalog/not-found-page/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/not-found-page/NotFoundPageDemo").then(
      (m) => m.NotFoundPageDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/not-found-page/NotFoundPageThumbnail").then(
      (m) => m.NotFoundPageThumbnail,
    ),
  sources: [
    {
      fileName: "NotFoundPage.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/not-found-page/NotFoundPage.tsx?raw"),
    },
    {
      fileName: "NotFoundPageDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/not-found-page/NotFoundPageDemo.tsx?raw"),
    },
  ],
};
