import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "검색 결과, 상품 목록의 정렬",
    "필터 시트를 여는 버튼",
    "좁은 머리글에서 아이콘 하나로 둘 때",
  ],
  whenNotToUse: [
    "메뉴 열기(햄버거와 헷갈림)",
    "정렬과 필터가 둘 다 있을 때 한 아이콘에 섞기",
    "현재 정렬 기준을 숨길 때",
  ],
  alternatives: [
    { name: "슬라이더", slug: "sliders", reason: "조절 손잡이로 된 필터 아이콘" },
    { name: "캐럿", slug: "caret", reason: "현재 정렬을 글자로 보여 주는 드롭다운" },
  ],
  accessibility: [
    "아이콘 버튼에 정렬이라는 이름을 붙입니다.",
    "선택지는 라디오 버튼 묶음입니다.",
    "현재 정렬 기준을 글자로 보여 줍니다.",
    "시트는 바깥을 눌러 닫을 수 있습니다.",
  ],
};
