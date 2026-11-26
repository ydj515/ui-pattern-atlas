import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const loginFormPattern: Pattern = {
  slug: "login-form",

  name: "Login Form",
  nameKo: "로그인 폼",
  aliases: ["로그인 화면", "로그인 창", "sign in", "login", "sign-in form"],
  category: "auth",
  summary: "이메일과 비밀번호로 들어오기",
  description:
    "이메일과 비밀번호로 로그인하는 폼입니다. 틀렸을 때는 어느 칸이 틀렸는지 밝히지 않는 한 가지 문구로 알리고, 비밀번호 보기와 로그인 상태 유지, 비밀번호 찾기를 한곳에 둡니다.",
  tags: [...BASE_TAGS, "form", "autocomplete", "role=alert"],
  loadGuide: () => import("@/entities/pattern/catalog/login-form/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/login-form/LoginFormDemo").then((m) => m.LoginFormDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/login-form/LoginFormThumbnail").then(
      (m) => m.LoginFormThumbnail,
    ),
  sources: [
    {
      fileName: "LoginForm.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/login-form/LoginForm.tsx?raw"),
    },
    {
      fileName: "LoginFormDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/login-form/LoginFormDemo.tsx?raw"),
    },
  ],
};
