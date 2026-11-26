import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const passwordResetPattern: Pattern = {
  slug: "password-reset",
  name: "Password Reset",
  nameKo: "비밀번호 재설정",
  aliases: ["비밀번호 찾기", "비밀번호 분실", "forgot password", "reset password"],
  category: "auth",
  summary: "가입 여부를 드러내지 않는 재설정 요청",
  description:
    "가입한 이메일로 재설정 링크를 받는 화면입니다. 가입되지 않은 주소를 넣어도 같은 문구로 답해, 이 화면으로 누가 회원인지 알아낼 수 없게 합니다. 링크의 유효 시간도 함께 알립니다.",
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
  tags: [...BASE_TAGS, "form", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/password-reset/PasswordResetDemo").then(
      (m) => m.PasswordResetDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/password-reset/PasswordResetThumbnail").then(
      (m) => m.PasswordResetThumbnail,
    ),
  sources: [
    {
      fileName: "PasswordReset.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/password-reset/PasswordReset.tsx?raw"),
    },
    {
      fileName: "PasswordResetDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/password-reset/PasswordResetDemo.tsx?raw"),
    },
  ],
};
