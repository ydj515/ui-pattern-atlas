import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "가격, 거리처럼 범위를 조절하는 필터",
    "검색 결과 머리글의 필터 버튼",
    "세부 설정 열기",
  ],
  whenNotToUse: [
    "정렬만 바꿀 때(되너나 캐럿 사용)",
    "앱 전체 설정(톱니바퀴 아이콘 사용)",
    "적용된 필터를 숨길 때",
  ],
  alternatives: [
    { name: "되너", slug: "doner", reason: "정렬 아이콘" },
    { name: "필터 칩", slug: "filter-chip", reason: "필터를 칩으로 바로 고를 때" },
  ],
  accessibility: [
    "아이콘 버튼에 필터라는 이름을 붙입니다.",
    "적용된 필터를 글자로 보여 줍니다.",
    "시트 안 범위 입력에는 현재 값이 담긴 라벨이 있습니다.",
    "적용 결과는 role=status로 알립니다.",
  ],
};
