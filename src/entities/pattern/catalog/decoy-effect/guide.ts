import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "미끼(decoy) 선택지를 하나 더 두면 다른 선택지가 돋보인다는 뜻이에요. 1982년 조엘 후버(Joel Huber) 등의 연구로 알려졌고, 비대칭 지배 효과라고도 해요.",
  whenToUse: ["선택지를 더했을 때 기존 옵션의 상대적 매력이 어떻게 달라 보이는지 설명할 때"],
  whenNotToUse: ["구매자가 이용할 수 없는 허위 옵션을 노출하거나 특정 요금제를 고르도록 오도할 때"],
  alternatives: [
    {
      name: "타협 효과",
      slug: "compromise-effect",
      reason: "중간 옵션이 보이는 위치에 초점을 맞출 때",
    },
  ],
  accessibility: ["가격과 포함 혜택을 각 옵션에 동일한 구조의 텍스트로 표시합니다."],
};
