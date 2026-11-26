import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["빈티지, 음악 페스티벌", "따뜻하고 경쾌한 브랜드", "짧은 제목"],
  whenNotToUse: [
    "읽기 중심 화면",
    "글자를 하나씩 나눠 화면 읽기가 끊길 때(전체 문구를 함께 제공)",
    "진지한 정보",
  ],
  alternatives: [
    { name: "핸드레터링", slug: "hand-lettering", reason: "손글씨 느낌" },
    { name: "키네틱", slug: "kinetic-typography", reason: "움직이는 글자" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
