import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "목록에서 항목을 열고 돌아오기를 반복하는 화면",
    "목록이 길어 위치를 잃기 쉬울 때",
    "SPA에서 화면을 바꿔 그릴 때",
  ],
  whenNotToUse: [
    "돌아갈 곳이 여러 갈래라 이름을 붙이기 어려울 때(브라우저 뒤로 가기에 맡기기)",
    "목록 내용이 그사이 크게 바뀌는 경우(새로 고침 안내)",
    "한 화면짜리 흐름",
  ],
  alternatives: [{ name: "브레드크럼", slug: "breadcrumb", reason: "상위 단계로 올라갈 때" }],
  accessibility: [
    '뒤로 버튼은 "목록으로 돌아가기"처럼 어디로 가는지 이름에 담습니다.',
    "돌아오면 스크롤 위치를 되살리고 열었던 항목으로 포커스를 옮깁니다.",
    "브라우저 뒤로 가기와 같은 결과가 되도록 주소 기록과 함께 쓰는 것이 좋습니다.",
    "위치를 되살릴 때 화면이 움직이지 않게 preventScroll로 포커스합니다.",
  ],
};
