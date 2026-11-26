import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "주문 뒤 배송 상태를 확인할 때",
    "단계가 정해진 처리 과정",
    "외부 운송장 번호를 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "진행률 숫자가 중요한 작업(진행 바 사용)",
    "단계가 없는 상태 한 줄(상태 배지 사용)",
    "실시간 위치를 지도로 보여 줄 때",
  ],
  alternatives: [
    { name: "스테퍼", slug: "stepper", reason: "입력 단계를 보여 줄 때" },
    { name: "타임라인", slug: "timeline", reason: "시간 순서의 기록을 보여 줄 때" },
  ],
  accessibility: [
    '단계는 ol이고 지금 단계에 aria-current="step"을 붙입니다.',
    "지금 단계라는 말을 화면 읽기용 글자로 덧붙입니다.",
    "운송장 번호 복사는 버튼으로 둡니다.",
  ],
};
