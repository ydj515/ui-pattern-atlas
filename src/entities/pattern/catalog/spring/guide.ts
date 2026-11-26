import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "끌어서 놓은 요소가 제자리로 돌아갈 때",
    "스위치, 시트처럼 손으로 다루는 요소",
    "움직이는 도중에 다시 조작될 수 있을 때",
  ],
  whenNotToUse: [
    "정해진 시간 안에 끝나야 하는 전환",
    "진지한 정보(오류, 결제)를 보여 주는 요소",
    "많이 튀어서 산만할 때(감쇠를 높이기)",
  ],
  alternatives: [
    { name: "이즈 인·아웃", slug: "ease-in-out", reason: "정해진 시간과 곡선으로 움직일 때" },
    { name: "바운스", slug: "bounce", reason: "바닥에 닿아 튀는 움직임" },
  ],
  accessibility: [
    "동작 줄이기에서는 튀지 않고 바로 목표로 갑니다.",
    "버튼 글자가 다음 동작(왼쪽으로, 오른쪽으로)을 알려 줍니다.",
    "공은 장식이고 상태는 버튼 글자로 전달합니다.",
    "프레임마다 요청을 취소해 화면을 벗어나면 계산을 멈춥니다.",
  ],
};
