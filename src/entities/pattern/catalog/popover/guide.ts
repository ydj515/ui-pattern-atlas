import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "툴팁보다 긴 설명이나 링크, 버튼이 필요할 때",
    "현재 화면을 떠나지 않고 간단한 설정을 바꿀 때",
    "특정 요소에 대한 상세 정보를 필요할 때만 보여줄 때",
  ],
  whenNotToUse: [
    "반드시 응답을 받아야 하는 결정일 때",
    "패널 안에 긴 폼이나 스크롤이 필요한 콘텐츠를 넣을 때",
    "호버만으로 열려야 하는 짧은 라벨일 때",
  ],
  alternatives: [
    { name: "툴팁", slug: "tooltip", reason: "한 줄짜리 비대화형 설명" },
    { name: "모달 다이얼로그", slug: "modal-dialog", reason: "반드시 결정이 필요한 경우" },
    { name: "아코디언", slug: "accordion", reason: "항상 페이지 흐름 안에 보여야 하는 설명" },
  ],
  accessibility: [
    "트리거 버튼에 aria-expanded와 aria-controls를 설정해 열림 상태를 알립니다.",
    "열리면 패널로 포커스를 옮기고, Esc로 닫으면 트리거로 포커스를 되돌립니다.",
    "바깥 영역을 누르면 닫히지만 페이지의 나머지는 계속 조작할 수 있습니다.",
    '패널에는 role="dialog"와 제목을 연결한 접근 가능한 이름을 부여합니다.',
  ],
};
