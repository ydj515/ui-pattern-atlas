import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const passwordFieldPattern: Pattern = {
  slug: "password-field",

  name: "Password Field",
  nameKo: "비밀번호 입력",
  aliases: ["비밀번호 보기", "비밀번호 규칙", "password input", "show password"],
  category: "text-input",
  summary: "보기/숨기기와 규칙 확인",
  description:
    "비밀번호를 가린 채 입력하되 눈 아이콘으로 직접 확인할 수 있게 하고, 지켜야 할 규칙을 입력하는 동안 하나씩 체크해 주는 패턴입니다. 제출한 뒤에야 오류를 알게 되는 일을 줄입니다.",
  tags: [...BASE_TAGS, "Forms", "autocomplete"],
  loadGuide: () => import("@/entities/pattern/catalog/password-field/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/password-field/PasswordFieldDemo").then(
      (m) => m.PasswordFieldDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/password-field/PasswordFieldThumbnail").then(
      (m) => m.PasswordFieldThumbnail,
    ),
  sources: [
    {
      fileName: "PasswordField.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/password-field/PasswordField.tsx?raw"),
    },
    {
      fileName: "PasswordFieldDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/password-field/PasswordFieldDemo.tsx?raw"),
    },
  ],
};
