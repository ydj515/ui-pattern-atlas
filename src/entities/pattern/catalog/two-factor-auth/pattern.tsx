import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TwoFactorAuthThumbnail } from "@/entities/pattern/catalog/two-factor-auth/TwoFactorAuthThumbnail";

export const twoFactorAuthPattern: Pattern = {
  slug: "two-factor-auth",
  name: "Two-Factor Auth",
  nameKo: "2단계 인증",
  aliases: ["이중 인증", "2FA", "MFA", "two-step verification", "one-time code"],
  category: "auth",
  summary: "비밀번호 다음에 일회용 코드로 한 번 더 확인",
  description:
    "비밀번호 다음에 휴대폰으로 받은 코드를 한 번 더 입력하는 화면입니다. 문자로 온 코드는 자동으로 채워지고, 틀리면 남은 시도 횟수를 알려 주며, 휴대폰을 잃었을 때는 백업 코드로 들어올 수 있습니다.",
  whenToUse: [
    "결제나 개인정보처럼 보호가 중요한 계정",
    "새 기기에서 로그인할 때",
    "보안 설정을 바꿀 때",
  ],
  whenNotToUse: [
    "매번 묻기엔 위험이 낮은 동작",
    "백업 수단 없이 휴대폰 하나에만 기댈 때",
    "코드 길이와 형식을 알려 주지 않을 때",
  ],
  alternatives: [
    { name: "인증번호 입력", slug: "otp-input", reason: "코드 칸만 따로 쓸 때" },
    { name: "로그인 폼", slug: "login-form", reason: "앞 단계의 비밀번호 입력" },
  ],
  accessibility: [
    'autocomplete="one-time-code"와 inputmode="numeric"을 지정합니다.',
    '오류와 남은 시도 횟수는 role="alert"로 읽어 줍니다.',
    "백업 코드로 바꾸면 안내 문구와 칸 이름이 함께 바뀝니다.",
  ],
  tags: [...BASE_TAGS, "one-time-code", "inputmode", "role=alert"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/two-factor-auth/TwoFactorAuthDemo").then(
      (m) => m.TwoFactorAuthDemo,
    ),
  Thumbnail: TwoFactorAuthThumbnail,
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
