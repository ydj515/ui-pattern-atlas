import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const socialSignInPattern: Pattern = {
  slug: "social-sign-in",

  name: "Social Sign-in",
  nameKo: "간편 로그인",
  aliases: ["소셜 로그인", "외부 계정 로그인", "SSO", "continue with"],
  category: "onboarding",
  summary: "외부 계정으로 바로 가입하고 로그인",
  description:
    "이미 쓰는 외부 계정으로 가입과 로그인을 한 번에 하는 버튼 묶음입니다. 버튼마다 어느 계정인지 글자로 쓰고, 누른 버튼만 연결 중으로 바뀌며 나머지는 기다리게 해 두 번 시작되지 않게 합니다.",
  tags: [...BASE_TAGS, "OAuth", "aria-busy", "disabled"],
  loadGuide: () => import("@/entities/pattern/catalog/social-sign-in/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/social-sign-in/SocialSignInDemo").then(
      (m) => m.SocialSignInDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/social-sign-in/SocialSignInThumbnail").then(
      (m) => m.SocialSignInThumbnail,
    ),
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
