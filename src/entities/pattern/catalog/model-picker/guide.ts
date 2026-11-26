import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "속도와 품질이 다른 모델을 고를 수 있을 때",
    "대화 시작 전에 정하는 설정",
    "모델이 서너 개일 때",
  ],
  whenNotToUse: [
    "사용자가 몰라도 되는 내부 선택(자동으로 고르기)",
    "모델이 하나뿐일 때",
    "모델마다 요금이 다른데 표시하지 않을 때",
  ],
  alternatives: [
    { name: "드롭다운 메뉴", slug: "dropdown-menu", reason: "일반적인 선택 메뉴" },
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "두세 개를 늘 보여 줄 때" },
  ],
  accessibility: [
    "버튼은 aria-haspopup=menu이고 이름에 현재 모델이 들어 있습니다.",
    "항목은 menuitemradio와 aria-checked로 선택 상태를 알립니다.",
    "방향키로 이동하고 Esc로 닫으면 버튼으로 포커스가 돌아옵니다.",
    "선택 표시는 체크와 함께 씁니다.",
  ],
};
