import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["배송 조회, 주문 상태", "변경 이력, 활동 기록", "앞으로 남은 단계도 함께 보여 줄 때"],
  whenNotToUse: [
    "순서보다 내용이 중요한 목록(리스트 사용)",
    "단계를 사용자가 직접 진행할 때(스테퍼 사용)",
    "기록이 아주 많을 때(날짜별 그룹 목록 사용)",
  ],
  alternatives: [
    { name: "스테퍼", slug: "stepper", reason: "사용자가 직접 단계를 넘어갈 때" },
    { name: "그룹 목록", slug: "grouped-list", reason: "날짜별로 묶어 보여 줄 때" },
  ],
  accessibility: [
    'ol 목록으로 순서를 전하고 최신 단계는 aria-current="step"입니다.',
    '아직 일어나지 않은 단계는 "예정"을 글로 보여 줍니다.',
    "점과 선은 장식이라 aria-hidden입니다.",
    "시간은 글로 함께 보여 줍니다.",
  ],
};
