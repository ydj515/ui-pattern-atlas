import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "이메일로 새 계정을 만들 때",
    "비밀번호 규칙이 있을 때",
    "중복 가입을 미리 막고 싶을 때",
  ],
  whenNotToUse: [
    "입력할 항목이 많아 단계로 나눠야 할 때(단계별 입력 사용)",
    "소셜 계정으로 충분할 때(소셜 로그인 사용)",
    "가입 전에 둘러보게 할 수 있을 때",
  ],
  alternatives: [
    { name: "단계형 폼", slug: "multi-step-form", reason: "항목이 많아 단계로 나눌 때" },
    {
      name: "비밀번호 강도 표시",
      slug: "password-strength-meter",
      reason: "비밀번호 강도를 막대로 보여 줄 때",
    },
    { name: "약관 동의", slug: "terms-agreement", reason: "가입 전에 약관 동의를 받을 때" },
  ],
  accessibility: [
    "규칙 목록을 비밀번호 칸의 aria-describedby로 이어 읽어 줍니다.",
    "규칙마다 충족 여부를 글자로도 알려 색에 기대지 않습니다.",
    "중복 이메일 안내는 aria-live로 읽어 줍니다.",
  ],
};
