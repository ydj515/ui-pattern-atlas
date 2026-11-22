export const PATTERN_CATEGORIES = [
  {
    id: "overlay",
    label: "Overlay",
    labelKo: "오버레이",
    description: "지금 화면 위에 잠깐 띄우는 창과 말풍선",
  },
  {
    id: "feedback",
    label: "Feedback",
    labelKo: "알림과 피드백",
    description: "작업 결과와 오류를 알려 주는 메시지",
  },
  {
    id: "navigation",
    label: "Navigation",
    labelKo: "이동",
    description: "지금 위치를 보여 주고 다른 페이지로 이어 주는 길",
  },
  {
    id: "disclosure",
    label: "Disclosure",
    labelKo: "콘텐츠 펼침",
    description: "긴 내용을 나눠 두고 필요한 만큼만 펼쳐 보기",
  },
  {
    id: "text-input",
    label: "Text input",
    labelKo: "텍스트 입력",
    description: "글자와 숫자를 직접 입력받는 필드",
  },
  {
    id: "selection",
    label: "Selection",
    labelKo: "선택 컨트롤",
    description: "켜고 끄거나 하나를 고르는 컨트롤",
  },
  {
    id: "special-input",
    label: "Special input",
    labelKo: "특수 입력",
    description: "날짜, 파일, 색처럼 형식이 정해진 입력",
  },
  {
    id: "button",
    label: "Buttons",
    labelKo: "버튼과 상태",
    description: "누를 수 있는 것과 그 상태",
  },
  {
    id: "list-table",
    label: "Lists and tables",
    labelKo: "목록과 표",
    description: "여러 항목을 나열하고 비교하는 화면",
  },
  {
    id: "card-gallery",
    label: "Cards and gallery",
    labelKo: "카드와 갤러리",
    description: "이미지와 내용을 묶어 보여 주는 화면",
  },
  {
    id: "indicator",
    label: "Indicators",
    labelKo: "인디케이터",
    description: "상태와 개수를 작게 알려 주는 표시",
  },
  {
    id: "layout",
    label: "Layout",
    labelKo: "화면 배치",
    description: "화면을 나누고 고정하는 방법",
  },
  {
    id: "loading",
    label: "Loading",
    labelKo: "로딩",
    description: "작업 중이나 콘텐츠를 기다릴 때 보여 주는 상태",
  },
  {
    id: "empty-error",
    label: "Empty and error",
    labelKo: "빈 화면과 오류",
    description: "결과가 비었거나 불러오지 못했을 때의 안내",
  },
  {
    id: "gesture",
    label: "Gesture",
    labelKo: "제스처",
    description: "손가락으로 누르거나 밀고 당기는 동작",
  },
  {
    id: "motion",
    label: "Motion",
    labelKo: "화면 전환과 움직임",
    description: "무엇이 바뀌었는지 보여 주는 움직임",
  },
  {
    id: "text-motion",
    label: "Text motion",
    labelKo: "글자 모션",
    description: "숫자와 글자가 움직이는 표현",
  },
  {
    id: "onboarding",
    label: "Onboarding",
    labelKo: "첫 실행",
    description: "처음 온 사람이 길을 찾게 돕는 화면",
  },
  {
    id: "completion",
    label: "Completion and reward",
    labelKo: "완료와 보상",
    description: "끝냈다는 감각을 주는 화면",
  },
  {
    id: "reaction-share",
    label: "Reaction and share",
    labelKo: "반응과 공유",
    description: "평가하고 퍼뜨리고 함께 쓰는 화면",
  },
  {
    id: "pricing-display",
    label: "Pricing and discounts",
    labelKo: "가격과 할인 표시",
    description: "가격과 혜택, 청구 조건을 쉽게 비교하는 화면",
  },
  {
    id: "pricing-psychology",
    label: "Pricing psychology",
    labelKo: "가격의 심리",
    description: "가격과 선택지를 보여 주는 방식이 선택에 주는 영향",
  },
] as const satisfies readonly {
  id: string;
  label: string;
  labelKo: string;
  description: string;
}[];

export type PatternCategory = (typeof PATTERN_CATEGORIES)[number];
export type PatternCategoryId = PatternCategory["id"];

export function isPatternCategoryId(value: unknown): value is PatternCategoryId {
  return PATTERN_CATEGORIES.some((category) => category.id === value);
}

export function getCategory(id: PatternCategoryId): PatternCategory {
  const category = PATTERN_CATEGORIES.find((candidate) => candidate.id === id);
  if (!category) throw new Error(`Unknown pattern category: ${id}`);
  return category;
}
