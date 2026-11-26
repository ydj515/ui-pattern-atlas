import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "가입이나 이메일 변경 뒤 인증이 필요할 때",
    "메일이 늦게 올 수 있을 때",
    "주소를 잘못 적었을 가능성이 있을 때",
  ],
  whenNotToUse: [
    "인증 없이 바로 쓸 수 있을 때",
    "문자 인증으로 충분할 때(인증번호 입력 사용)",
    "같은 화면에서 코드를 바로 입력받을 때",
  ],
  alternatives: [
    { name: "인증번호 입력", slug: "otp-input", reason: "메일 대신 문자 코드를 받을 때" },
    { name: "회원가입 폼", slug: "signup-form", reason: "가입 정보를 입력하는 앞 단계" },
  ],
  accessibility: [
    "다시 보내기는 대기 시간 동안 disabled이고 남은 초를 버튼 이름으로 알려 줍니다.",
    '다시 보낸 결과는 role="status"로 읽어 줍니다.',
    "제목과 본문을 section의 이름으로 이어 둡니다.",
  ],
};
