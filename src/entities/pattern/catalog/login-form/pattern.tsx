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
  tags: [...BASE_TAGS, "form", "autocomplete", "role=alert"],
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
