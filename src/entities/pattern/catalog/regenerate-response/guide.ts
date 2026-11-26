import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
