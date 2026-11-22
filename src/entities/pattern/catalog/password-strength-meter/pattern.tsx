import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { PasswordStrengthMeterThumbnail } from "@/entities/pattern/catalog/password-strength-meter/PasswordStrengthMeterThumbnail";

export const passwordStrengthMeterPattern: Pattern = {
  slug: "password-strength-meter",
  name: "Password Strength Meter",
  nameKo: "비밀번호 강도 표시",
  aliases: ["비밀번호 강도", "강도 막대", "password meter", "strength indicator"],
  category: "indicator",
  summary: "입력한 비밀번호의 강도를 단계와 문구로 안내",
  description:
    '비밀번호를 입력하는 동안 네 칸 막대와 "약함, 보통, 강함" 같은 낱말로 강도를 보여 주고, 더 강하게 만드는 방법을 한 줄로 알려 주는 패턴입니다.',
  whenToUse: [
    "회원가입, 비밀번호 변경",
    "규칙 대신 실제 강도로 안내하고 싶을 때",
    "입력하며 바로 피드백을 줄 때",
  ],
  whenNotToUse: [
    "로그인 화면",
    "규칙 충족 여부가 더 중요할 때(비밀번호 입력의 규칙 목록 사용)",
    "강도 계산이 단순 규칙뿐일 때(쉽게 속일 수 있음)",
  ],
  alternatives: [
    { name: "비밀번호 입력", slug: "password-field", reason: "규칙 목록과 보기 버튼" },
  ],
  accessibility: [
    "강도는 색이 아니라 낱말로 전하고 aria-live로 바뀔 때 알려 줍니다.",
    "막대는 장식이라 aria-hidden입니다.",
    "개선 방법을 글로 함께 보여 줍니다.",
    "실제 서비스에서는 zxcvbn 같은 추정기로 점수를 계산합니다.",
  ],
  tags: [...BASE_TAGS, "aria-live", "Forms"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/password-strength-meter/PasswordStrengthMeterDemo").then(
      (m) => m.PasswordStrengthMeterDemo,
    ),
  Thumbnail: PasswordStrengthMeterThumbnail,
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
