import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "이메일이나 아이디로 계정에 들어올 때",
    "비밀번호 관리자가 채울 수 있게 할 때",
    "다시 방문한 사용자가 빨리 들어오게 할 때",
  ],
  whenNotToUse: [
    "소셜 계정만으로 가입하는 서비스(소셜 로그인 사용)",
    "로그인 없이 써도 되는 기능을 막을 때",
    "처음 온 사람에게 가입보다 로그인을 먼저 들이밀 때",
  ],
  alternatives: [
    { name: "간편 로그인", slug: "social-sign-in", reason: "외부 계정으로 바로 들어올 때" },
    { name: "비밀번호 입력", slug: "password-field", reason: "비밀번호 칸만 따로 쓸 때" },
  ],
  accessibility: [
    "autocomplete로 username, current-password를 지정해 비밀번호 관리자가 채울 수 있습니다.",
    '오류는 role="alert"로 읽고, 두 칸 모두 aria-invalid와 aria-describedby로 이어 둡니다.',
    "비밀번호 보기는 aria-pressed가 있는 버튼입니다.",
  ],
};
