import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const profileSetupPattern: Pattern = {
  slug: "profile-setup",

  name: "Profile Setup",
  nameKo: "프로필 설정",
  aliases: ["프로필 만들기", "닉네임 설정", "onboarding profile", "avatar setup"],
  category: "onboarding",
  summary: "닉네임과 사진을 처음 정하기",
  description:
    "가입 직후 닉네임과 사진을 정하는 단계입니다. 사진을 고르기 전에는 닉네임 첫 글자를 보여 주고, 글자 수 규칙을 입력 전부터 알려 주며, 나중에 하기로 건너뛸 수 있습니다.",
  tags: [...BASE_TAGS, "aria-describedby", "File input", "aria-invalid"],
  loadGuide: () => import("@/entities/pattern/catalog/profile-setup/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/profile-setup/ProfileSetupDemo").then(
      (m) => m.ProfileSetupDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/profile-setup/ProfileSetupThumbnail").then(
      (m) => m.ProfileSetupThumbnail,
    ),
  sources: [
    {
      fileName: "ProfileSetup.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/profile-setup/ProfileSetup.tsx?raw"),
    },
    {
      fileName: "ProfileSetupDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/profile-setup/ProfileSetupDemo.tsx?raw"),
    },
  ],
};
