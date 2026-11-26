import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "가입 직후나 첫 방문의 첫 화면",
    "시작 버튼 하나로 다음 행동을 정할 수 있을 때",
    "한 번만 보여 줄 수 있을 때",
  ],
  whenNotToUse: [
    "들어올 때마다 다시 띄울 때",
    "소개할 내용이 여러 장일 때(온보딩 슬라이드 사용)",
    "광고나 이벤트를 끼워 넣을 때",
  ],
  alternatives: [
    { name: "온보딩 슬라이드", slug: "onboarding-carousel", reason: "여러 장으로 소개할 때" },
    { name: "모달 다이얼로그", slug: "modal-dialog", reason: "일반적인 확인 창" },
  ],
  accessibility: [
    "기본 dialog 요소의 showModal로 열어 포커스가 안에 머뭅니다.",
    "열리면 시작하기 버튼에 포커스가 갑니다.",
    "Esc로 닫으면 먼저 둘러보기와 같게 처리합니다.",
    "제목을 aria-labelledby로 연결합니다.",
  ],
};
