import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "회원가입이나 비밀번호 변경 화면",
    "길이, 숫자, 특수문자처럼 규칙이 있을 때",
    "휴대폰에서 오타를 확인할 방법이 필요할 때",
  ],
  whenNotToUse: [
    "로그인 화면의 규칙 목록(이미 정한 비밀번호라 규칙 안내는 필요 없음)",
    "PIN처럼 숫자 몇 자리만 받을 때(인증번호 입력 사용)",
    "비밀번호 대신 패스키나 이메일 링크를 쓸 수 있을 때",
  ],
  alternatives: [
    { name: "텍스트 필드", slug: "text-field", reason: "가리지 않아도 되는 일반 입력" },
    { name: "인증번호 입력", slug: "otp-input", reason: "짧은 숫자 코드" },
  ],
  accessibility: [
    '보기 버튼은 aria-pressed로 켜짐 상태를 알리고, 이름("비밀번호 보기")은 그대로 둡니다.',
    "규칙 목록은 입력에 aria-describedby로 연결되고, 충족 여부를 색이 아닌 글자로도 알립니다.",
    'autocomplete="new-password"로 비밀번호 관리자가 새 비밀번호를 제안하게 합니다.',
    "붙여넣기를 막지 않습니다.",
  ],
};
