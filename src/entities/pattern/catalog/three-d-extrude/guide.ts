import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["게임, 레트로, 영화 포스터", "큰 제목에 무게를 줄 때", "로고"],
  whenNotToUse: ["작은 글자", "그림자가 다음 줄과 겹칠 만큼 행간이 좁을 때", "본문"],
  alternatives: [
    { name: "인플레이트 3D", slug: "inflated-three-d", reason: "둥글게 부푼 입체" },
    { name: "엠보싱", slug: "emboss", reason: "표면에서 솟은 느낌" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
