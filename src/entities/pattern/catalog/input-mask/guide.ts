import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "전화번호, 카드번호, 사업자등록번호처럼 형식이 고정된 번호",
    "자릿수가 많아 끊어 읽어야 실수가 줄 때",
    "붙여넣은 번호의 형식이 제각각일 때",
  ],
  whenNotToUse: [
    "나라마다 형식이 다른 국제 전화번호(국가 선택과 함께 쓰기)",
    "이름, 주소처럼 형식이 없는 글",
    "입력 중 커서가 튀면 안 되는 긴 텍스트",
  ],
  alternatives: [
    { name: "텍스트 필드", slug: "text-field", reason: "형식이 정해지지 않은 입력" },
    { name: "인증번호 입력", slug: "otp-input", reason: "짧은 코드를 칸별로 받을 때" },
  ],
  accessibility: [
    "라벨에 무엇을 넣는지 쓰고, 형식 예시는 placeholder와 안내 문구로 보여 줍니다.",
    'inputmode="numeric"과 autocomplete(tel, cc-number)로 키패드와 자동 채우기를 맞춥니다.',
    "구분자가 들어가도 커서가 방금 입력한 숫자 뒤에 머물러 이어서 쓸 수 있습니다.",
    "구분자를 지워도 숫자만 다시 계산하므로 Backspace가 막히지 않습니다.",
  ],
};
