import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "긴 목록에서 제목과 필터, 검색을 늘 써야 할 때",
    "어느 화면에 있는지 계속 알려 줄 때",
    "헤더가 한 줄로 짧을 때",
  ],
  whenNotToUse: [
    "헤더가 높아 화면을 많이 가릴 때(스크롤 방향에 따라 숨기기)",
    "읽기 중심의 긴 글(화면을 넓게 쓰기)",
    "작은 화면에서 여러 줄의 헤더",
  ],
  alternatives: [
    { name: "하단 고정 버튼", slug: "sticky-action-bar", reason: "주요 행동을 아래에 고정할 때" },
    { name: "맨 위로", slug: "back-to-top", reason: "헤더 대신 처음으로 돌아가는 버튼" },
  ],
  accessibility: [
    "position: sticky라 문서 흐름과 읽는 순서는 그대로입니다.",
    "고정 헤더가 앵커 이동 시 제목을 가리지 않도록 scroll-margin-top을 둡니다.",
    "그림자는 스크롤했을 때만 넣어 경계를 알립니다.",
    "헤더 안의 제목은 화면 이름이라 h 요소로 둡니다.",
  ],
};
