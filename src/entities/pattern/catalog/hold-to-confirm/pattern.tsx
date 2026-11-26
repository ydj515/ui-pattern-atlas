import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const holdToConfirmPattern: Pattern = {
  slug: "hold-to-confirm",

  name: "Hold to Confirm",
  nameKo: "길게 눌러 확인",
  aliases: ["꾹 눌러 삭제", "길게 누르기", "press and hold", "long press confirm"],
  category: "button",
  summary: "실수 방지를 위해 꾹 누르기",
  description:
    "삭제처럼 되돌릴 수 없는 행동을 버튼을 잠시 누르고 있어야 실행되게 하는 패턴입니다. 누르는 동안 버튼이 차오르고, 중간에 손을 떼면 취소됩니다.",
  tags: [...BASE_TAGS, "Pointer", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/hold-to-confirm/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/hold-to-confirm/HoldToConfirmDemo").then(
      (m) => m.HoldToConfirmDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/hold-to-confirm/HoldToConfirmThumbnail").then(
      (m) => m.HoldToConfirmThumbnail,
    ),
  sources: [
    {
      fileName: "HoldToConfirm.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/hold-to-confirm/HoldToConfirm.tsx?raw"),
    },
    {
      fileName: "HoldToConfirmDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/hold-to-confirm/HoldToConfirmDemo.tsx?raw"),
    },
  ],
};
