import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const errorStatePattern: Pattern = {
  slug: "error-state",

  name: "Error State",
  nameKo: "오류 화면",
  aliases: ["에러 페이지", "에러 화면", "로드 실패", "다시 시도", "Load Error"],
  category: "empty-error",
  summary: "콘텐츠를 불러오지 못했을 때 오류와 복구 방법을 안내하는 화면",
  description:
    "목록이나 상세 화면을 불러오는 요청이 실패하면 어떤 작업에 문제가 생겼는지 알려 주고, 같은 화면에서 다시 시도할 수 있게 합니다.",
  tags: BASE_TAGS,
  loadGuide: () => import("@/entities/pattern/catalog/error-state/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/error-state/ErrorStateDemo").then((m) => m.ErrorStateDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/error-state/ErrorStateThumbnail").then(
      (m) => m.ErrorStateThumbnail,
    ),
  sources: [
    {
      fileName: "ErrorState.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/error-state/ErrorState.tsx?raw"),
    },
    {
      fileName: "ErrorStateDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/error-state/ErrorStateDemo.tsx?raw"),
    },
  ],
};
