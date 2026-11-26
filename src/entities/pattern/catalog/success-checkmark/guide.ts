import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "송금, 결제처럼 잠깐 기다린 뒤 성공했을 때",
    "결과 화면의 첫 시선",
    "한 화면에 한 번",
  ],
  whenNotToUse: [
    "목록의 항목마다 반복될 때",
    "실패 가능성을 숨기고 성공처럼 보일 때",
    "오래 끄는 화려한 연출",
  ],
  alternatives: [
    { name: "완료 화면", slug: "success-screen", reason: "결과와 다음 단계를 함께 보여 줄 때" },
    { name: "축하 효과", slug: "confetti", reason: "목표 달성처럼 큰 성취일 때" },
  ],
  accessibility: [
    "체크 표시는 role=img와 이름(보냈어요)을 가집니다.",
    "결과 문구를 role=status로 함께 알립니다.",
    "동작 줄이기에서는 그리지 않고 완성된 표시를 바로 보여 줍니다.",
    "보내는 중에는 버튼을 비활성으로 두어 두 번 보내지 않게 합니다.",
  ],
};
