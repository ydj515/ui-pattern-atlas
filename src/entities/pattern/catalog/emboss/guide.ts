import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["고급 패키지, 명함 같은 질감 연출", "배경과 어우러진 은은한 제목", "큰 글자"],
  whenNotToUse: ["읽어야 하는 글(대비가 매우 낮음)", "작은 크기", "어두운 테마에서 그대로 쓸 때"],
  alternatives: [
    { name: "3D 돌출", slug: "three-d-extrude", reason: "옆면을 그린 입체" },
    { name: "뉴모피즘", slug: "neumorphism", reason: "같은 원리의 화면 스타일" },
  ],
  accessibility: [
    "엠보싱은 대비가 매우 낮아 장식 제목에만 쓰고 정보 글에는 쓰지 않습니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
