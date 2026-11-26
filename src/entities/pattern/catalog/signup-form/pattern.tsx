import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const signupFormPattern: Pattern = {
  slug: "signup-form",

  name: "Signup Form",
  nameKo: "회원가입 폼",
  aliases: ["가입 화면", "계정 만들기", "sign up", "registration form", "create account"],
  category: "auth",
  summary: "중복 이메일과 비밀번호 규칙을 미리 알려 주는 가입",
  description:
    "이름, 이메일, 비밀번호로 계정을 만드는 폼입니다. 이미 가입된 이메일은 칸을 벗어날 때 바로 알리고, 비밀번호 규칙은 입력 전부터 보여 주며 맞을 때마다 체크합니다. 제출할 때 문제가 있어도 입력한 값은 그대로 둡니다.",
  tags: [...BASE_TAGS, "form", "aria-describedby", "aria-live"],
  loadGuide: () => import("@/entities/pattern/catalog/signup-form/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/signup-form/SignupFormDemo").then((m) => m.SignupFormDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/signup-form/SignupFormThumbnail").then(
      (m) => m.SignupFormThumbnail,
    ),
  sources: [
    {
      fileName: "SignupForm.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/signup-form/SignupForm.tsx?raw"),
    },
    {
      fileName: "SignupFormDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/signup-form/SignupFormDemo.tsx?raw"),
    },
  ],
};
