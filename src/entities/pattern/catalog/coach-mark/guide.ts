import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "새 메모, 공유처럼 처음엔 눈에 잘 띄지 않는 핵심 버튼",
    "업데이트로 위치가 바뀐 버튼",
    "한 화면에 한 번, 한 가지만",
  ],
  whenNotToUse: [
    "여러 버튼을 차례로 설명할 때(프로덕트 투어 사용)",
    "버튼 이름만으로 충분히 알 수 있을 때",
    "들어올 때마다 다시 보여 줄 때",
  ],
  alternatives: [
    { name: "프로덕트 투어", slug: "product-tour", reason: "여러 곳을 순서대로 짚을 때" },
    { name: "툴팁", slug: "tooltip", reason: "마우스를 올렸을 때만 짧게 설명할 때" },
  ],
  accessibility: [
    "말풍선은 role=dialog이고 문구로 이름을 붙입니다.",
    "열리면 확인 버튼으로 포커스가 가고 Esc로 닫힙니다.",
    "어둡게 덮은 영역은 장식이라 aria-hidden이며, 가리킨 버튼은 그대로 누를 수 있습니다.",
    "말풍선 문구는 한 문장으로 짧게 씁니다.",
  ],
};
