import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const passwordStrengthMeterPattern: Pattern = {
  slug: "password-strength-meter",

  name: "Password Strength Meter",
  nameKo: "비밀번호 강도 표시",
  aliases: ["비밀번호 강도", "강도 막대", "password meter", "strength indicator"],
  category: "indicator",
  summary: "입력한 비밀번호의 강도를 단계와 문구로 안내",
  description:
    '비밀번호를 입력하는 동안 네 칸 막대와 "약함, 보통, 강함" 같은 낱말로 강도를 보여 주고, 더 강하게 만드는 방법을 한 줄로 알려 주는 패턴입니다.',
  tags: [...BASE_TAGS, "aria-live", "Forms"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/password-strength-meter/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/password-strength-meter/PasswordStrengthMeterDemo").then(
      (m) => m.PasswordStrengthMeterDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/password-strength-meter/PasswordStrengthMeterThumbnail").then(
      (m) => m.PasswordStrengthMeterThumbnail,
    ),
  sources: [
    {
      fileName: "PasswordStrengthMeter.tsx",
      role: "Component",
      load: () =>
        import("@/shared/ui/patterns/password-strength-meter/PasswordStrengthMeter.tsx?raw"),
    },
    {
      fileName: "PasswordStrengthMeterDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/password-strength-meter/PasswordStrengthMeterDemo.tsx?raw"),
    },
  ],
};
