import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "사이즈, 색상마다 재고가 다를 때",
    "남은 수량이 결정에 영향을 줄 때",
    "품절 옵션을 고르기 전에 알려야 할 때",
  ],
  whenNotToUse: [
    "재고와 상관없이 늘 적게 보일 때(가짜 희소성 참고)",
    "디지털 상품처럼 재고가 없을 때",
    "정확한 재고를 알 수 없을 때",
  ],
  alternatives: [
    { name: "가짜 희소성", slug: "fake-scarcity", reason: "거짓 재고 표시가 왜 문제인지 볼 때" },
    { name: "희소성", slug: "scarcity", reason: "실제 제약을 알리는 방법을 볼 때" },
  ],
  accessibility: [
    "상태마다 모양이 다른 아이콘과 글자를 함께 써 색에 기대지 않습니다.",
    "옵션을 바꾸면 aria-live로 새 재고 상태를 읽어 줍니다.",
    "품절 옵션은 고를 수 있되 다음 행동을 버튼 이름으로 알려 줍니다.",
  ],
};
