import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "설정, 금액, 요금제의 기본 선택을 정할 때",
    "개인정보 기본 설정을 검토할 때",
    "많은 사람이 고르는 값을 안내할 때",
  ],
  whenNotToUse: [
    "회사에만 유리한 값을 기본으로 둘 때",
    "개인정보 공유를 기본으로 켤 때",
    "기본값을 바꾸기 어렵게 만들 때",
  ],
  alternatives: [
    { name: "미리 체크된 동의", slug: "pre-checked-opt-in", reason: "동의를 기본값으로 켤 때" },
    { name: "라디오 그룹", slug: "radio-group", reason: "하나를 고르는 입력" },
  ],
  accessibility: [
    "기본 선택은 라디오 버튼의 checked로 화면 읽기에도 알려집니다.",
    "기본값인 이유를 글로 적습니다.",
    "다른 값으로 쉽게 바꿀 수 있게 합니다.",
    "선택 상태를 색과 테두리 둘 다로 보여 줍니다.",
  ],
};
