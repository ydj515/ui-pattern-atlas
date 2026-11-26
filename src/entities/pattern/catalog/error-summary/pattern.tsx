import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const errorSummaryPattern: Pattern = {
  slug: "error-summary",

  name: "Error Summary",
  nameKo: "오류 요약",
  aliases: ["오류 목록", "에러 요약", "검증 요약", "validation summary", "form error summary"],
  category: "feedback",
  summary: "폼 위에 모은 오류 목록과 바로가기",
  description:
    "제출에 실패한 폼 위에 고쳐야 할 항목을 한곳에 모아 보여 주는 패턴입니다. 몇 개가 잘못됐는지 바로 알 수 있고, 각 항목을 누르면 해당 입력으로 이동합니다.",
  tags: [...BASE_TAGS, "Forms", "role=alert", "Focus management"],
  loadGuide: () => import("@/entities/pattern/catalog/error-summary/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/error-summary/ErrorSummaryDemo").then(
      (m) => m.ErrorSummaryDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/error-summary/ErrorSummaryThumbnail").then(
      (m) => m.ErrorSummaryThumbnail,
    ),
  sources: [
    {
      fileName: "ErrorSummary.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/error-summary/ErrorSummary.tsx?raw"),
    },
    {
      fileName: "ErrorSummaryDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/error-summary/ErrorSummaryDemo.tsx?raw"),
    },
  ],
};
