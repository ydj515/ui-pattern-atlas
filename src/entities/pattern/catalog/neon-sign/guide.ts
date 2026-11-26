import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["바, 공연, 밤 분위기의 배너", "어두운 테마의 큰 제목", "짧은 문구"],
  whenNotToUse: ["밝은 배경", "본문", "빛 번짐으로 대비가 낮아질 때"],
  alternatives: [
    { name: "Y2K 크롬", slug: "chrome-typography", reason: "금속 광택" },
    { name: "아웃라인", slug: "outline", reason: "외곽선 강조" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
