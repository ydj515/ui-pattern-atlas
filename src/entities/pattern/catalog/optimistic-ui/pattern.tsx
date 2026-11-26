import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const optimisticUiPattern: Pattern = {
  slug: "optimistic-ui",

  name: "Optimistic UI",
  nameKo: "낙관적 업데이트",
  aliases: ["낙관적 UI", "즉시 반영", "optimistic update", "useOptimistic"],
  category: "loading",
  summary: "응답 전에 결과부터 보여 주기",
  description:
    "서버 응답을 기다리지 않고 성공했다고 가정해 결과를 먼저 보여 주는 패턴입니다. 요청이 실패하면 원래 상태로 되돌리고 짧게 알려 줍니다. 좋아요처럼 거의 실패하지 않는 작업을 즉각적으로 느끼게 합니다.",
  tags: [...BASE_TAGS, "useOptimistic", "aria-pressed"],
  loadGuide: () => import("@/entities/pattern/catalog/optimistic-ui/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/optimistic-ui/OptimisticUiDemo").then(
      (m) => m.OptimisticUiDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/optimistic-ui/OptimisticUiThumbnail").then(
      (m) => m.OptimisticUiThumbnail,
    ),
  sources: [
    {
      fileName: "OptimisticLikeButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/optimistic-ui/OptimisticLikeButton.tsx?raw"),
    },
    {
      fileName: "OptimisticUiDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/optimistic-ui/OptimisticUiDemo.tsx?raw"),
    },
  ],
};
