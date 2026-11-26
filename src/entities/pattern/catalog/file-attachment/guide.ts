import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "문서, 사진을 읽고 답하는 AI",
    "여러 파일을 한 번에 보낼 때",
    "크기나 형식 제한이 있을 때",
  ],
  whenNotToUse: [
    "파일 관리가 주 기능인 화면(파일 업로드 사용)",
    "첨부가 필요 없는 대화",
    "제한을 보낸 뒤에야 알려 줄 때",
  ],
  alternatives: [
    { name: "파일 업로드", slug: "file-upload", reason: "끌어다 놓는 업로드 영역" },
    { name: "프롬프트 입력", slug: "prompt-input", reason: "첨부 버튼이 있는 입력창" },
  ],
  accessibility: [
    "칩 목록에 첨부 파일이라는 이름을 붙입니다.",
    "빼기 버튼 이름에 파일 이름이 들어 있습니다.",
    "진행률과 오류를 글자로 보여 주고 막대는 장식입니다.",
    "올리는 중이거나 오류가 있으면 보내기를 비활성으로 두고 이유를 알립니다.",
  ],
};
