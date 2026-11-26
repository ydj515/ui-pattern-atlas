import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "일본어 간반(看板, 간판·표지판)에서 왔어요. 도요타 생산 방식에서 작업 카드를 붙여 흐름을 관리하던 방법이 소프트웨어 작업 관리로 옮겨 왔어요.",
  whenToUse: [
    "할 일, 진행 중, 완료처럼 상태 흐름이 있는 작업 관리",
    "팀이 함께 진행 상황을 볼 때",
    "카드 수가 많지 않을 때",
  ],
  whenNotToUse: [
    "상태가 둘뿐일 때(체크 목록 사용)",
    "작은 화면(상태 탭으로 나눈 목록 사용)",
    "카드가 수백 개일 때(표나 필터 목록 사용)",
  ],
  alternatives: [
    { name: "순서 바꾸기 목록", slug: "sortable-list", reason: "한 목록 안에서 순서만 바꿀 때" },
    { name: "선택 테이블", slug: "selectable-table", reason: "많은 항목의 상태를 한 번에 바꿀 때" },
  ],
  accessibility: [
    '끌어서 놓기와 같은 일을 하는 "…(으)로 옮기기" 버튼을 카드마다 둡니다.',
    '옮긴 결과를 role="status"로 알립니다.',
    "열은 이름과 카드 수가 있는 section입니다.",
    "끌어 놓을 열은 테두리와 배경으로 표시합니다.",
  ],
};
