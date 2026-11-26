import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["귀엽고 친근한 브랜드 로고, 배너", "어린이, 간식, 장난감 관련 화면", "짧은 제목"],
  whenNotToUse: ["진지한 정보 화면", "작은 크기(두께 표현이 뭉개짐)", "글자가 많은 문단"],
  alternatives: [
    { name: "청키", slug: "chunky", reason: "두꺼운 획으로 덩어리감" },
    { name: "3D 돌출", slug: "three-d-extrude", reason: "옆면을 그린 입체" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
