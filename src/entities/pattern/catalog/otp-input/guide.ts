import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "휴대폰 인증, 2단계 인증처럼 자릿수가 정해진 코드",
    "문자로 받은 코드를 자동 채우기로 넣게 할 때",
    "몇 자리 남았는지 보여 주면 도움이 될 때",
  ],
  whenNotToUse: [
    "자릿수가 정해지지 않은 코드(텍스트 필드 사용)",
    "영문이 섞인 긴 키(텍스트 필드에 붙여넣기)",
    "비밀번호(비밀번호 입력 사용)",
  ],
  alternatives: [
    { name: "텍스트 필드", slug: "text-field", reason: "한 칸에 inputmode=numeric으로 받기" },
    { name: "입력 마스크", slug: "input-mask", reason: "구분자가 있는 긴 번호" },
  ],
  accessibility: [
    '칸들을 role="group"으로 묶고, 각 칸은 "인증번호 1/6자리"처럼 이름을 가집니다.',
    '첫 칸에 autocomplete="one-time-code"를 두어 문자 자동 채우기가 동작합니다.',
    'inputmode="numeric"으로 숫자 키패드가 열리고, 숫자 외 문자는 무시합니다.',
    'Backspace는 앞 칸으로, 화살표는 칸 사이를 이동하며 결과는 role="status"로 알립니다.',
  ],
};
