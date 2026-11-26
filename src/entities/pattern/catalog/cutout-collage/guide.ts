import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["진, 포스터, 실험적인 브랜드", "수작업 느낌의 연출", "짧은 단어"],
  whenNotToUse: ["긴 문장", "협박 편지처럼 불쾌하게 읽힐 수 있는 맥락", "정보 전달이 중요한 화면"],
  alternatives: [
    { name: "네오 브루털리즘 타이포그래피", slug: "neo-brutalist-typography", reason: "상자 라벨" },
    { name: "핸드레터링", slug: "hand-lettering", reason: "손으로 쓴 느낌" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
