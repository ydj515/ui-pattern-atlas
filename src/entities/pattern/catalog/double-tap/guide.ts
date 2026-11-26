import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "사진 중심 피드에서 반응을 빠르게 남길 때",
    "같은 동작을 하는 버튼이 화면에 보일 때",
    "실수로 눌러도 문제가 없는 가벼운 반응",
  ],
  whenNotToUse: [
    "두 번 눌러 확대하는 화면(제스처가 겹침)",
    "구매나 삭제처럼 결과가 큰 동작",
    "버튼 없이 제스처만 있을 때",
  ],
  alternatives: [
    { name: "좋아요 버튼", reason: "눈에 보이는 버튼으로 반응할 때" },
    { name: "반응 고르기", reason: "여러 감정 중에서 고를 때" },
  ],
  accessibility: [
    "좋아요 버튼은 aria-pressed로 상태를 알리고 키보드로 켜고 끌 수 있습니다.",
    "하트 효과는 장식이라 aria-hidden입니다.",
    "touch-manipulation으로 브라우저의 두 번 눌러 확대를 막고 지연을 없앱니다.",
    "동작 줄이기 설정에서는 하트가 커지는 효과를 끕니다.",
  ],
};
