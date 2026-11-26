import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "회원가입, 비밀번호 변경",
    "규칙 대신 실제 강도로 안내하고 싶을 때",
    "입력하며 바로 피드백을 줄 때",
  ],
  whenNotToUse: [
    "로그인 화면",
    "규칙 충족 여부가 더 중요할 때(비밀번호 입력의 규칙 목록 사용)",
    "강도 계산이 단순 규칙뿐일 때(쉽게 속일 수 있음)",
  ],
  alternatives: [
    { name: "비밀번호 입력", slug: "password-field", reason: "규칙 목록과 보기 버튼" },
  ],
  accessibility: [
    "강도는 색이 아니라 낱말로 전하고 aria-live로 바뀔 때 알려 줍니다.",
    "막대는 장식이라 aria-hidden입니다.",
    "개선 방법을 글로 함께 보여 줍니다.",
    "실제 서비스에서는 zxcvbn 같은 추정기로 점수를 계산합니다.",
  ],
};
