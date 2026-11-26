import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["카페, 공방, 개인 브랜드", "초대장, 감사 카드", "짧은 문구"],
  whenNotToUse: [
    "긴 안내 글",
    "정확한 정보가 중요한 화면",
    "글꼴이 없는 기기에서 대체 글꼴로 어색해질 때",
  ],
  alternatives: [
    { name: "그래피티", slug: "graffiti", reason: "거리 벽화의 자유로운 획" },
    { name: "레트로 그루비", slug: "retro-groovy", reason: "물결치는 장식 글자" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
