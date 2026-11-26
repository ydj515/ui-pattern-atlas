import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
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
};
