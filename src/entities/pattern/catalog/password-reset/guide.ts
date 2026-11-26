import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "비밀번호를 잊은 사용자가 스스로 바꾸게 할 때",
    "이메일로 본인을 확인할 수 있을 때",
    "로그인 화면의 비밀번호 찾기에서 이어질 때",
  ],
  whenNotToUse: [
    "가입 여부를 알려 줘도 되는 내부 도구(다만 대부분 피하는 편이 안전)",
    "비밀번호가 없는 로그인 방식",
    "고객센터를 거쳐야만 바꿀 수 있을 때",
  ],
  alternatives: [
    { name: "로그인 폼", slug: "login-form", reason: "재설정 뒤 다시 로그인할 때" },
    {
      name: "이메일 인증 안내",
      slug: "email-verification",
      reason: "메일을 보낸 뒤 기다리는 화면",
    },
  ],
  accessibility: [
    "형식 오류는 aria-invalid와 aria-describedby로 칸에 이어 둡니다.",
    '보낸 뒤 화면은 role="status"로 읽어 줍니다.',
    'autocomplete="email"을 지정합니다.',
  ],
};
