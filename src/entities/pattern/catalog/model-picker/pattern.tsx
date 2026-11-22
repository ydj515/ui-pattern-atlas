import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ModelPickerThumbnail } from "@/entities/pattern/catalog/model-picker/ModelPickerThumbnail";

export const modelPickerPattern: Pattern = {
  slug: "model-picker",
  name: "Model Picker",
  nameKo: "모델 선택",
  aliases: ["모델 바꾸기", "AI 모델 선택", "model switcher", "model selector"],
  category: "ai",
  summary: "답할 모델 고르기",
  description:
    "지금 모델 이름을 보여 주는 작은 버튼을 누르면, 모델마다 언제 쓰면 좋은지 한 줄 설명이 붙은 메뉴가 열리는 패턴입니다. 모델 이름만 늘어놓지 않고 쓰임을 말해 고르기 쉽게 합니다.",
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
  tags: [...BASE_TAGS, "menuitemradio", "Roving tabindex", "aria-haspopup"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/model-picker/ModelPickerDemo").then(
      (m) => m.ModelPickerDemo,
    ),
  Thumbnail: ModelPickerThumbnail,
  sources: [
    {
      fileName: "ModelPicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/model-picker/ModelPicker.tsx?raw"),
    },
    {
      fileName: "ModelPickerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/model-picker/ModelPickerDemo.tsx?raw"),
    },
  ],
};
