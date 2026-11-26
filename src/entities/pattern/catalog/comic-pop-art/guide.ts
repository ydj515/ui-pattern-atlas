import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["할인, 이벤트 배너", "장난스럽고 강렬한 브랜드", "짧은 감탄 문구"],
  whenNotToUse: ["진지한 정보", "긴 문장", "망점 배경 위 작은 글"],
  alternatives: [
    {
      name: "네오 브루털리즘 타이포그래피",
      slug: "neo-brutalist-typography",
      reason: "두꺼운 테두리 라벨",
    },
    { name: "그래피티", slug: "graffiti", reason: "거리 벽화" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
