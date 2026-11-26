import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "대니얼 카너먼(Daniel Kahneman)과 동료들이 1990년대에 발표한 연구에서 정리된 이름이에요. 경험의 가장 강한 순간(peak)과 끝(end)이 기억을 좌우한다는 뜻이에요.",
  whenToUse: [
    "완료 화면, 배송 완료 알림을 설계할 때",
    "긴 흐름의 마지막 단계를 다듬을 때",
    "불편한 순간을 줄일 우선순위를 정할 때",
  ],
  whenNotToUse: [
    "중간의 큰 불편을 끝의 연출로 덮으려 할 때",
    "끝 화면을 광고로 채울 때",
    "과한 축하로 다음 행동을 가릴 때",
  ],
  alternatives: [
    { name: "완료 화면", slug: "success-screen", reason: "결과와 다음 단계" },
    { name: "축하 효과", slug: "confetti", reason: "목표 달성의 순간" },
  ],
  accessibility: [
    "완료 결과는 제목과 글로 분명히 알립니다.",
    "장식 사진은 alt를 비우거나 설명을 붙입니다.",
    "다음 행동 버튼을 함께 둡니다.",
    "축하 효과는 동작 줄이기를 지킵니다.",
  ],
};
