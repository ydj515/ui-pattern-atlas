import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const regenerateResponsePattern: Pattern = {
  slug: "regenerate-response",

  name: "Regenerate Response",
  nameKo: "답변 다시 생성",
  aliases: ["다시 만들기", "답변 버전", "regenerate", "response versions"],
  category: "ai",
  summary: "새 답변을 만들고 이전 답변과 비교",
  description:
    "같은 질문으로 새 답변을 만들되 이전 답변을 지우지 않고 ‹ 1 / 2 › 로 오가며 비교하게 하는 패턴입니다. 마음에 들던 이전 답을 잃지 않아 부담 없이 다시 만들어 볼 수 있습니다.",
  tags: [...BASE_TAGS, "aria-live", "Versions", "Pagination"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/regenerate-response/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/regenerate-response/RegenerateResponseDemo").then(
      (m) => m.RegenerateResponseDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/regenerate-response/RegenerateResponseThumbnail").then(
      (m) => m.RegenerateResponseThumbnail,
    ),
  sources: [
    {
      fileName: "RegenerateResponse.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/regenerate-response/RegenerateResponse.tsx?raw"),
    },
    {
      fileName: "RegenerateResponseDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/regenerate-response/RegenerateResponseDemo.tsx?raw"),
    },
  ],
};
