import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const modelPickerPattern: Pattern = {
  slug: "model-picker",

  name: "Model Picker",
  nameKo: "모델 선택",
  aliases: ["모델 바꾸기", "AI 모델 선택", "model switcher", "model selector"],
  category: "ai",
  summary: "답할 모델 고르기",
  description:
    "지금 모델 이름을 보여 주는 작은 버튼을 누르면, 모델마다 언제 쓰면 좋은지 한 줄 설명이 붙은 메뉴가 열리는 패턴입니다. 모델 이름만 늘어놓지 않고 쓰임을 말해 고르기 쉽게 합니다.",
  tags: [...BASE_TAGS, "menuitemradio", "Roving tabindex", "aria-haspopup"],
  loadGuide: () => import("@/entities/pattern/catalog/model-picker/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/model-picker/ModelPickerDemo").then(
      (m) => m.ModelPickerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/model-picker/ModelPickerThumbnail").then(
      (m) => m.ModelPickerThumbnail,
    ),
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
