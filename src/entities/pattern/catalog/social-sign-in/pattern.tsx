import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SocialSignInThumbnail } from "@/entities/pattern/catalog/social-sign-in/SocialSignInThumbnail";

export const socialSignInPattern: Pattern = {
  slug: "social-sign-in",
  name: "Social Sign-in",
  nameKo: "간편 로그인",
  aliases: ["소셜 로그인", "외부 계정 로그인", "SSO", "continue with"],
  category: "onboarding",
  summary: "외부 계정으로 바로 가입하고 로그인",
  description:
    "이미 쓰는 외부 계정으로 가입과 로그인을 한 번에 하는 버튼 묶음입니다. 버튼마다 어느 계정인지 글자로 쓰고, 누른 버튼만 연결 중으로 바뀌며 나머지는 기다리게 해 두 번 시작되지 않게 합니다.",
  whenToUse: [
    "가입 단계를 줄이고 싶은 서비스의 시작 화면",
    "사용자층이 많이 쓰는 계정이 정해져 있을 때",
    "이메일 가입도 함께 둘 수 있을 때",
  ],
  whenNotToUse: [
    "외부 계정 정보가 필요 없는데 많은 권한을 요청할 때",
    "버튼이 다섯 개를 넘을 때",
    "회사 계정만 쓰는 업무 도구(단일 SSO 버튼 사용)",
  ],
  alternatives: [
    { name: "약관 동의", slug: "terms-agreement", reason: "가입 다음 단계" },
    { name: "로딩 버튼", slug: "loading-button", reason: "버튼 하나의 처리 중 상태" },
  ],
  accessibility: [
    "버튼 이름에 계정 이름을 글자로 넣어 로고만으로 구분하지 않게 합니다.",
    "연결 중인 버튼은 aria-busy로, 나머지는 disabled로 표시합니다.",
    "로고 자리 표시는 장식이라 aria-hidden입니다.",
    "버튼 높이 44px로 누르기 쉽게 합니다.",
  ],
  tags: [...BASE_TAGS, "OAuth", "aria-busy", "disabled"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/social-sign-in/SocialSignInDemo").then(
      (m) => m.SocialSignInDemo,
    ),
  Thumbnail: SocialSignInThumbnail,
  sources: [
    {
      fileName: "SocialSignIn.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/social-sign-in/SocialSignIn.tsx?raw"),
    },
    {
      fileName: "SocialSignInDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/social-sign-in/SocialSignInDemo.tsx?raw"),
    },
  ],
};
