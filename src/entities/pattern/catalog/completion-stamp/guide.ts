import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "미션, 쿠폰, 스탬프 카드처럼 종이 비유가 맞는 화면",
    "끝낸 카드를 목록에 그대로 둘 때",
    "가벼운 보상의 순간",
  ],
  whenNotToUse: [
    "진지한 업무 문서의 승인 표시",
    "글자를 가려 읽기 어려워질 때",
    "여러 카드에 동시에 찍힐 때",
  ],
  alternatives: [
    { name: "체크 애니메이션", slug: "success-checkmark", reason: "도장 대신 체크로 알릴 때" },
    { name: "업적 배지", slug: "achievement-badge", reason: "달성을 진열할 때" },
  ],
  accessibility: [
    "도장은 aria-hidden이고 완료는 role=status 문구로 알립니다.",
    "pointer-events: none이라 카드의 버튼을 가리지 않습니다.",
    "동작 줄이기에서는 내려오는 효과 없이 바로 보입니다.",
    "도장 색과 배경 대비를 충분히 둡니다.",
  ],
};
