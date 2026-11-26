import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["군용, 산업, 아웃도어 브랜드", "상자, 표지판 느낌의 연출", "짧은 제목"],
  whenNotToUse: ["작은 크기(끊긴 부분 때문에 읽기 어려움)", "본문", "끊김이 글자 뜻을 바꿀 때"],
  alternatives: [
    { name: "그래피티", slug: "graffiti", reason: "스프레이 거리 느낌" },
    { name: "청키", slug: "chunky", reason: "두꺼운 획" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
