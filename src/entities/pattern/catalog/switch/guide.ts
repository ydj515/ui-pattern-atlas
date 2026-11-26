import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "알림 수신, 다크 모드처럼 즉시 적용되는 설정일 때",
    "켜짐과 꺼짐, 두 상태만 존재할 때",
    "설정 목록에서 여러 항목을 독립적으로 바꿀 때",
  ],
  whenNotToUse: [
    "제출 버튼을 눌러야 반영되는 폼 안의 선택일 때(체크박스 사용)",
    "세 가지 이상의 선택지가 있을 때",
    "약관 동의처럼 '동의함'을 명시적으로 표시해야 할 때",
  ],
  alternatives: [
    { name: "Checkbox", reason: "폼 제출과 함께 반영되는 선택" },
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "두 개 이상의 이름 있는 상태" },
  ],
  accessibility: [
    '네이티브 <button>에 role="switch"와 aria-checked를 지정해 상태를 알립니다.',
    "<label htmlFor>로 텍스트 라벨을 연결해 라벨을 눌러도 토글됩니다.",
    "보조 설명은 aria-describedby로 연결합니다.",
    "켜짐 상태를 색상만이 아니라 손잡이 위치로도 구분합니다.",
  ],
};
