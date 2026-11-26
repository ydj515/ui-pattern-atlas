import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "저장 중에 값을 바꾸면 결과가 꼬이는 폼",
    "한 영역의 여러 조작을 동시에 막아야 할 때",
    "작업이 몇 초 안에 끝날 때",
  ],
  whenNotToUse: [
    "페이지 전체를 막는 경우(필요한 영역만 덮기)",
    "오래 걸리는 작업(진행 알림으로 다른 일을 하게 두기)",
    "버튼 하나만 막으면 되는 경우(버튼 비활성과 상태 문구로 충분)",
  ],
  alternatives: [
    { name: "진행 알림", slug: "progress-toast", reason: "작업 중에도 다른 일을 할 수 있을 때" },
    { name: "스피너", slug: "spinner", reason: "버튼이나 작은 영역의 상태만 보여 줄 때" },
  ],
  accessibility: [
    "덮인 내용에 inert를 걸어 클릭, 포커스, 보조 기술 접근을 모두 막습니다.",
    '영역에 aria-busy를 주고, "저장하는 중" 문구는 inert 바깥의 role="status"에 둡니다.',
    '끝나면 결과 문구("저장했어요")를 status로 알립니다.',
    "전환과 회전은 동작 줄이기 설정에서 꺼집니다.",
  ],
};
