import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "처음 사용하는 사용자에게 첫 행동을 유도할 때",
    "검색이나 필터 결과가 없을 때 조건을 바꾸도록 안내할 때",
    "모든 할 일을 마친 상태처럼 비어 있는 것이 긍정적인 상황일 때",
  ],
  whenNotToUse: [
    "데이터를 아직 불러오는 중일 때(스켈레톤 사용)",
    "오류 때문에 비어 있는데 이유를 숨길 때",
    "행동을 유도할 버튼이 여러 개 경쟁할 때",
  ],
  alternatives: [
    { name: "스켈레톤", slug: "skeleton", reason: "로딩 중인 상태" },
    { name: "오류 화면", slug: "error-state", reason: "오류로 인해 내용을 표시할 수 없을 때" },
    {
      name: "배너 알림",
      slug: "alert-banner",
      reason: "나머지 콘텐츠를 탐색할 수 있는 부분 실패",
    },
  ],
  accessibility: [
    "일러스트와 아이콘은 장식이므로 aria-hidden으로 숨깁니다.",
    "제목과 설명은 일반 텍스트로 두어 스크린 리더가 순서대로 읽게 합니다.",
    "주요 행동은 실제 <button> 또는 <a>로 제공해 키보드로 접근할 수 있게 합니다.",
  ],
};
