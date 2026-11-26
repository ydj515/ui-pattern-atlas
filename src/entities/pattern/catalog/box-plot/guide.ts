import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "1970년대 통계학자 존 튜키(John Tukey)가 탐색적 데이터 분석을 위해 소개했어요. 상자(box)와 수염(whisker) 모양이라 상자 수염 그림이라고도 해요.",
  whenToUse: [
    "지역, 요일 같은 그룹의 퍼짐을 비교할 때",
    "동떨어진 값이 있는지 확인할 때",
    "평균만으로 오해할 수 있는 데이터",
  ],
  whenNotToUse: [
    "상자 그림을 읽기 낯선 사람에게 보여 줄 때(히스토그램 사용)",
    "값이 몇 개뿐일 때(점으로 모두 보여 주기)",
    "분포 봉우리가 두 개 이상일 때(히스토그램 사용)",
  ],
  alternatives: [
    { name: "히스토그램", slug: "histogram", reason: "한 그룹의 분포 모양을 자세히 볼 때" },
    { name: "산점도", slug: "scatter-plot", reason: "값 하나하나를 모두 보여 줄 때" },
  ],
  accessibility: [
    "가리키면 중앙값과 가운데 50% 범위를 글자로 보여 줍니다.",
    "표로 보기에 그룹별 다섯 숫자와 동떨어진 값을 적습니다.",
    "상자와 동떨어진 값은 모양과 색을 모두 다르게 그립니다.",
  ],
};
