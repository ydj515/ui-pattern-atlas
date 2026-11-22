import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ProfileSetupThumbnail } from "@/entities/pattern/catalog/profile-setup/ProfileSetupThumbnail";

export const profileSetupPattern: Pattern = {
  slug: "profile-setup",
  name: "Profile Setup",
  nameKo: "프로필 설정",
  aliases: ["프로필 만들기", "닉네임 설정", "onboarding profile", "avatar setup"],
  category: "onboarding",
  summary: "닉네임과 사진을 처음 정하기",
  description:
    "가입 직후 닉네임과 사진을 정하는 단계입니다. 사진을 고르기 전에는 닉네임 첫 글자를 보여 주고, 글자 수 규칙을 입력 전부터 알려 주며, 나중에 하기로 건너뛸 수 있습니다.",
  whenToUse: [
    "다른 사람에게 이름이 보이는 서비스",
    "필요한 정보가 닉네임과 사진 정도일 때",
    "건너뛰어도 쓸 수 있을 때",
  ],
  whenNotToUse: [
    "이름이 필요 없는 서비스",
    "생일, 주소처럼 지금 필요 없는 정보를 함께 받을 때",
    "건너뛸 수 없게 막을 때",
  ],
  alternatives: [
    { name: "아바타", slug: "avatar", reason: "프로필 사진 표시" },
    { name: "인라인 검증", slug: "inline-validation", reason: "입력 규칙을 바로 알릴 때" },
  ],
  accessibility: [
    "닉네임 칸은 label과 연결하고 규칙과 글자 수를 aria-describedby로 묶습니다.",
    "규칙에 맞지 않으면 aria-invalid로 알립니다.",
    "사진 선택은 label로 감싼 파일 입력이라 키보드로 열 수 있습니다.",
    "아바타 미리 보기는 장식이라 aria-hidden입니다.",
  ],
  tags: [...BASE_TAGS, "aria-describedby", "File input", "aria-invalid"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/profile-setup/ProfileSetupDemo").then(
      (m) => m.ProfileSetupDemo,
    ),
  Thumbnail: ProfileSetupThumbnail,
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
