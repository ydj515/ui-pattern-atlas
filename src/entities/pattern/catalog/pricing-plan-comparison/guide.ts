import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["구독이나 멤버십에서 청구 단위가 같은 여러 옵션을 제시할 때"],
  whenNotToUse: ["요금제 간 혜택을 설명하기 전에 하나의 옵션을 자동 확정할 때"],
  alternatives: [
    {
      name: "타협 효과",
      slug: "compromise-effect",
      reason: "중간 옵션과 추천 강조가 어떻게 달리 보이는지 검토할 때",
    },
  ],
  accessibility: [
    "라디오 그룹에서 한 요금제를 선택하도록 하고 청구 주기와 포함 여부를 말로도 표시합니다.",
  ],
};
