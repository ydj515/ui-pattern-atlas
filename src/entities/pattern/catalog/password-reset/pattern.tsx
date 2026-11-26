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
  tags: [...BASE_TAGS, "form", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/password-reset/guide").then((m) => m.guide),
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
