import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "습관, 활동 기록의 꾸준함을 보여 줄 때",
    "요일별 리듬을 찾을 때",
    "하루 단위 값이 한 달 이상 있을 때",
  ],
  whenNotToUse: [
    "정확한 값을 비교할 때(막대 그래프 사용)",
    "날짜가 아닌 두 기준의 분포(히트맵 사용)",
    "값이 며칠뿐일 때",
  ],
  alternatives: [
    { name: "히트맵", slug: "heatmap", reason: "요일과 시간처럼 두 기준의 분포를 볼 때" },
    { name: "세로 막대 그래프", slug: "column-chart", reason: "날짜별 값을 정확히 비교할 때" },
  ],
  accessibility: [
    "달력에 포커스를 두고 화살표로 날짜를 옮기면 값을 aria-live로 읽어 줍니다.",
    "값이 없는 날도 쉰 날처럼 글자로 알려 줍니다.",
    "한 가지 색의 밝기로만 크기를 나타내 색약에도 순서가 보입니다.",
  ],
};
