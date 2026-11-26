import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "재고, 조회 수 표시를 검토할 때",
    "희소성 표시에 쓰는 데이터 출처를 확인할 때",
    "구매 압박 문구의 선을 정할 때",
  ],
  whenNotToUse: [
    "무작위나 고정된 숫자를 재고처럼 보여 줄 때",
    "모든 상품에 같은 경고를 붙일 때",
    "빨간 느낌표로 불안을 키울 때",
  ],
  alternatives: [
    { name: "희소성", slug: "scarcity", reason: "실제 제약을 정직하게 알릴 때" },
    { name: "가짜 긴급함", slug: "fake-urgency", reason: "가짜 마감 타이머" },
  ],
  accessibility: [
    "재고는 숫자와 글로 담담하게 적습니다.",
    "색과 느낌표로 압박하지 않습니다.",
    "바뀌는 숫자를 aria-live로 계속 읽히지 않게 합니다.",
    "실제 데이터의 갱신 시각을 함께 둡니다.",
  ],
};
