import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const twoFactorAuthPattern: Pattern = {
  slug: "two-factor-auth",

  name: "Two-Factor Auth",
  nameKo: "2단계 인증",
  aliases: ["이중 인증", "2FA", "MFA", "two-step verification", "one-time code"],
  category: "auth",
  summary: "비밀번호 다음에 일회용 코드로 한 번 더 확인",
  description:
    "비밀번호 다음에 휴대폰으로 받은 코드를 한 번 더 입력하는 화면입니다. 문자로 온 코드는 자동으로 채워지고, 틀리면 남은 시도 횟수를 알려 주며, 휴대폰을 잃었을 때는 백업 코드로 들어올 수 있습니다.",
  tags: [...BASE_TAGS, "one-time-code", "inputmode", "role=alert"],
  loadGuide: () => import("@/entities/pattern/catalog/two-factor-auth/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/two-factor-auth/TwoFactorAuthDemo").then(
      (m) => m.TwoFactorAuthDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/two-factor-auth/TwoFactorAuthThumbnail").then(
      (m) => m.TwoFactorAuthThumbnail,
    ),
  sources: [
    {
      fileName: "TwoFactorAuth.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/two-factor-auth/TwoFactorAuth.tsx?raw"),
    },
    {
      fileName: "TwoFactorAuthDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/two-factor-auth/TwoFactorAuthDemo.tsx?raw"),
    },
  ],
};
