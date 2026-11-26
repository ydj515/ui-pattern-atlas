import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const switchPattern: Pattern = {
  slug: "switch",
  name: "Switch",
  nameKo: "스위치",
  aliases: ["토글", "토글 스위치", "toggle", "켜고 끄기", "on off"],
  category: "selection",
  summary: "누르는 즉시 켜지고 꺼지는 설정 버튼",
  description:
    "설정을 켜거나 끄는 두 가지 상태를 표현하고, 누르는 즉시 결과가 적용되는 패턴입니다. 현실의 전등 스위치처럼 저장 버튼 없이 바로 반영됩니다.",
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
  tags: [...BASE_TAGS, "role=switch"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/switch/SwitchDemo").then((m) => m.SwitchDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/switch/SwitchThumbnail").then((m) => m.SwitchThumbnail),
  sources: [
    {
      fileName: "Switch.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/switch/Switch.tsx?raw"),
    },
    {
      fileName: "SwitchDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/switch/SwitchDemo.tsx?raw"),
    },
  ],
};
