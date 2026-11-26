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
  whenToUse: [
    "이름 짓기, 문구 쓰기처럼 답이 여러 개일 수 있는 질문",
    "답이 마음에 들지 않을 때 다시 시도하게 할 때",
    "버전끼리 비교가 필요할 때",
  ],
  whenNotToUse: [
    "사실을 묻는 질문에서 다른 답을 권할 때",
    "버전이 너무 많이 쌓일 때(최근 몇 개만 보관)",
    "질문 자체를 바꿔야 할 때(고쳐 묻기 사용)",
  ],
  alternatives: [
    { name: "고쳐 묻기", slug: "edit-prompt", reason: "질문을 바꿔 다시 물을 때" },
    { name: "답변 평가", slug: "response-feedback", reason: "다시 생성 버튼을 도구 줄에 둘 때" },
  ],
  accessibility: [
    "이전, 다음 답변 버튼은 이름이 있고 끝에서는 비활성입니다.",
    "몇 번째 답변인지 글자로 보여 줍니다.",
    "답변 영역은 aria-live로 바뀐 답을 알립니다.",
    "만드는 동안 버튼을 비활성으로 둡니다.",
  ],
  tags: [...BASE_TAGS, "aria-live", "Versions", "Pagination"],
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
