import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SignupFormThumbnail } from "@/entities/pattern/catalog/signup-form/SignupFormThumbnail";

export const signupFormPattern: Pattern = {
  slug: "signup-form",
  name: "Signup Form",
  nameKo: "회원가입 폼",
  aliases: ["가입 화면", "계정 만들기", "sign up", "registration form", "create account"],
  category: "auth",
  summary: "중복 이메일과 비밀번호 규칙을 미리 알려 주는 가입",
  description:
    "이름, 이메일, 비밀번호로 계정을 만드는 폼입니다. 이미 가입된 이메일은 칸을 벗어날 때 바로 알리고, 비밀번호 규칙은 입력 전부터 보여 주며 맞을 때마다 체크합니다. 제출할 때 문제가 있어도 입력한 값은 그대로 둡니다.",
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
  tags: [...BASE_TAGS, "form", "aria-describedby", "aria-live"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/signup-form/SignupFormDemo").then((m) => m.SignupFormDemo),
  Thumbnail: SignupFormThumbnail,
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
