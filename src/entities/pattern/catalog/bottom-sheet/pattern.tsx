import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const bottomSheetPattern: Pattern = {
  slug: "bottom-sheet",

  name: "Bottom Sheet",
  nameKo: "바텀시트",
  aliases: ["하단 시트", "액션 시트", "Action Sheet", "아래에서 올라오는 창", "모달 시트"],
  category: "overlay",
  summary: "화면 아래에서 올라오는 작업 패널",
  description:
    "화면 아래 가장자리에서 패널을 올려 짧은 선택지나 다음 행동을 보여 주는 패턴입니다. 엄지가 닿는 위치에 선택지가 모여 있어 모바일에서 빠르게 고를 수 있고, 고르거나 닫으면 원래 화면으로 돌아갑니다.",
  tags: [...BASE_TAGS, "dialog element", "Mobile"],
  loadGuide: () => import("@/entities/pattern/catalog/bottom-sheet/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bottom-sheet/BottomSheetDemo").then(
      (m) => m.BottomSheetDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bottom-sheet/BottomSheetThumbnail").then(
      (m) => m.BottomSheetThumbnail,
    ),
  sources: [
    {
      fileName: "BottomSheet.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bottom-sheet/BottomSheet.tsx?raw"),
    },
    {
      fileName: "BottomSheetDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bottom-sheet/BottomSheetDemo.tsx?raw"),
    },
  ],
};
