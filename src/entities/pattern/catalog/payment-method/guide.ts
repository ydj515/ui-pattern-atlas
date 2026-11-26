import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "결제 수단이 여러 가지일 때",
    "수단마다 추가 선택이 다를 때",
    "자주 쓰는 수단을 기본으로 둘 때",
  ],
  whenNotToUse: [
    "수단이 하나뿐일 때",
    "카드 번호를 직접 받는 화면(결제사 화면 사용)",
    "수단마다 가격이 다른데 알리지 않을 때",
  ],
  alternatives: [
    { name: "라디오 그룹", slug: "radio-group", reason: "선택지 하나를 고르는 기본 형태" },
    { name: "결제 금액 확인", slug: "checkout-summary", reason: "결제 직전 금액 확인" },
  ],
  accessibility: [
    "fieldset과 legend로 묶은 라디오 버튼이라 방향키로 옮겨 다닙니다.",
    "할부 선택은 카드를 골랐을 때만 나타나 읽을 양이 줄어듭니다.",
    "선택한 카드는 테두리와 배경으로 함께 표시합니다.",
  ],
};
