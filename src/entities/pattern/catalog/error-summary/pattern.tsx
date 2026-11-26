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
  whenToUse: [
    "입력 항목이 많아 오류가 화면 밖에 있을 수 있는 긴 폼",
    "제출 버튼을 누른 뒤 한꺼번에 검증하는 폼",
    "스크린 리더 사용자에게 오류 개수와 위치를 한 번에 알려야 할 때",
  ],
  whenNotToUse: [
    "입력 한두 개짜리 짧은 폼(필드 옆 인라인 오류로 충분)",
    "입력하는 동안 실시간으로 검증할 때",
    "폼과 상관없는 서버 오류일 때(배너 알림 사용)",
  ],
  alternatives: [
    {
      name: "인라인 오류",
      slug: "inline-validation",
      reason: "필드 바로 아래에서 하나씩 알려 줄 때. 오류 요약과 함께 쓰는 것이 기본",
    },
    { name: "배너 알림", slug: "alert-banner", reason: "특정 필드와 상관없는 페이지 단위 문제" },
  ],
  accessibility: [
    '요약이 나타나면 요약 상자로 포커스를 옮기고 role="alert"로 오류 개수를 바로 읽어 줍니다.',
    '제목에 오류 개수를 넣어("2개 항목을 확인해 주세요") 무엇을 해야 하는지 먼저 전합니다.',
    "각 항목은 필드로 가는 링크이며, 누르면 스크롤만 하지 않고 입력에 포커스를 줍니다.",
    "필드에는 aria-invalid와 aria-describedby로 인라인 오류를 연결해 요약과 같은 문구를 유지합니다.",
  ],
  tags: [...BASE_TAGS, "Forms", "role=alert", "Focus management"],
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
