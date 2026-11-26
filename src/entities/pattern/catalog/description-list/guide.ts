import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "주문 상세, 프로필, 제품 사양",
    "읽기 전용 정보를 정리할 때",
    "값 옆에 복사 같은 작은 동작이 붙을 때",
  ],
  whenNotToUse: [
    "여러 항목을 비교할 때(데이터 테이블 사용)",
    "값을 바로 고쳐야 할 때(폼 사용)",
    "짝이 아닌 일반 목록",
  ],
  alternatives: [
    { name: "데이터 테이블", slug: "data-table", reason: "여러 항목의 같은 값을 비교할 때" },
  ],
  accessibility: [
    "dl, dt, dd를 써서 값이 이름과 함께 읽힙니다.",
    "제목으로 섹션 이름을 붙입니다.",
    "값 옆의 복사 버튼은 결과를 글로 바꿔 보여 줍니다.",
    "좁은 화면에서도 읽는 순서가 바뀌지 않습니다.",
  ],
};
