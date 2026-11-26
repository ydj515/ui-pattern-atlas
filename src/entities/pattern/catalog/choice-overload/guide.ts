import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "2000년 시나 아이엔가(Sheena Iyengar)와 마크 레퍼(Mark Lepper)의 잼 시식 실험으로 널리 알려졌어요. 잼을 24가지 놓았을 때보다 6가지 놓았을 때 더 많은 사람이 샀어요.",
  whenToUse: [
    "상품 진열, 요금제, 템플릿 고르기 화면",
    "처음 쓰는 사람에게 시작점을 줄 때",
    "비교 기준이 많은 목록",
  ],
  whenNotToUse: [
    "원하는 것을 정확히 아는 사람에게 선택지를 숨길 때",
    "추천을 회사에 유리한 것으로만 채울 때",
    "전체 목록으로 가는 길을 막을 때",
  ],
  alternatives: [
    { name: "힉의 법칙", slug: "hicks-law", reason: "선택지 수와 결정 시간" },
    { name: "필터 칩", slug: "filter-chip", reason: "목록을 좁혀 보여 줄 때" },
  ],
  accessibility: [
    "색 견본마다 맛 이름을 글로 둡니다.",
    "추천 이유를 글로 적습니다.",
    "전체 목록으로 가는 링크를 남깁니다.",
    "선택지는 키보드로 고를 수 있게 합니다.",
  ],
};
