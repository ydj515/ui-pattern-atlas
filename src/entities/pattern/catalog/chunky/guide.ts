import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["음식, 스포츠, 할인 배너", "짧고 강한 문구", "로고"],
  whenNotToUse: ["긴 문장", "획이 붙어 읽기 어려울 만큼 좁힐 때", "섬세한 분위기"],
  alternatives: [
    { name: "인플레이트 3D", slug: "inflated-three-d", reason: "부푼 입체" },
    { name: "브루털리즘 타이포그래피", slug: "brutalist-typography", reason: "겹침과 절단" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
