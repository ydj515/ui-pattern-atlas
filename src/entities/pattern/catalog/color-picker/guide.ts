import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "태그, 캘린더, 라벨처럼 구분용 색을 고를 때",
    "브랜드 색처럼 쓸 수 있는 색이 정해져 있을 때",
    "결과를 바로 미리 볼 수 있을 때",
  ],
  whenNotToUse: [
    "색이 의미를 전하는 유일한 수단일 때(이름이나 아이콘도 함께 쓰기)",
    "디자인 도구처럼 정밀한 색 조정(전용 선택기 사용)",
    "보기가 2~3개뿐이고 이름이 더 중요할 때(라디오 그룹 사용)",
  ],
  alternatives: [
    { name: "라디오 그룹", slug: "radio-group", reason: "이름으로 고르는 게 더 분명할 때" },
  ],
  accessibility: [
    "견본은 이름(파랑, 초록)이 있는 기본 radio라 화살표 키로 고릅니다.",
    "고른 견본은 색과 함께 굵은 테두리로 표시됩니다.",
    "고른 색 코드를 글로 보여 줘 색을 보지 않아도 확인할 수 있습니다.",
    "직접 고르기는 브라우저의 input type=color를 그대로 씁니다.",
  ],
};
