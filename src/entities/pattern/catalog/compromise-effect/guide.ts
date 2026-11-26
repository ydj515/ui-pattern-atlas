import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "1989년 이타마르 시몬슨(Itamar Simonson)의 연구로 알려진 개념이에요. 양 끝 사이의 중간 안이 무난한 타협(compromise)처럼 느껴진다는 뜻이에요.",
  whenToUse: ["같은 요금제가 비교 대상의 구성에 따라 어떻게 보이는지 확인할 때"],
  whenNotToUse: ["추천 표시 하나만 보고 요금제의 실제 선택 비율을 단정할 때"],
  alternatives: [
    {
      name: "미끼 효과",
      slug: "decoy-effect",
      reason: "한 옵션보다 뚜렷하게 불리한 대안을 추가했을 때의 비교",
    },
    {
      name: "요금제 비교",
      slug: "pricing-plan-comparison",
      reason: "청구 주기와 포함 혜택을 같은 기준으로 표시",
    },
  ],
  accessibility: ["추천은 텍스트로 표시하고 요금제를 대신 선택하지 않습니다."],
};
