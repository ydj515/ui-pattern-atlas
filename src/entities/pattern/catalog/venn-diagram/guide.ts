import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin: "1880년 영국 논리학자 존 벤(John Venn)이 소개해 그의 이름이 붙었어요.",
  whenToUse: [
    "두세 그룹이 얼마나 겹치는지 보여 줄 때",
    "중복 동의, 중복 구매처럼 교집합이 중요할 때",
    "영역별 정확한 수를 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "집합이 네 개 이상일 때",
    "겹침 비율을 면적으로 정확히 비교해야 할 때",
    "겹치지 않는 그룹을 비교할 때(막대 그래프 사용)",
  ],
  alternatives: [
    { name: "누적 막대 그래프", slug: "stacked-bar-chart", reason: "겹침 없이 구성을 비교할 때" },
    { name: "버블 차트", slug: "bubble-chart", reason: "원 크기로 양을 비교할 때" },
  ],
  accessibility: [
    "범례 버튼은 aria-pressed로 선택 상태를 알립니다.",
    "고른 집합의 합계를 aria-live로 읽어 줍니다.",
    "모든 영역의 수를 화면 읽기용 목록으로도 둡니다.",
  ],
};
