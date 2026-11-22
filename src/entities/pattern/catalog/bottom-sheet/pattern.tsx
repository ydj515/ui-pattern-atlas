import { BASE_TAGS, type Pattern } from "../../model/pattern";
import { BottomSheetThumbnail } from "./BottomSheetThumbnail";

export const bottomSheetPattern: Pattern = {
  slug: "bottom-sheet",

  name: "Bottom Sheet",
  nameKo: "바텀시트",
  aliases: ["하단 시트", "Action Sheet"],
  category: "overlay",
  summary: "화면 아래에서 올라오는 작업 패널",
  description:
    "짧은 선택지나 다음 행동을 화면 아래에서 제공합니다. 작업을 마치거나 닫으면 원래 화면으로 돌아갑니다.",
  whenToUse: ["모바일에서 여러 옵션 중 하나를 빠르게 고를 때"],
  whenNotToUse: ["여러 페이지에 걸쳐 진행하는 작업이나 긴 본문"],
  alternatives: [
    {
      name: "모달 다이얼로그",
      slug: "modal-dialog",
      reason: "중요한 결정과 그 영향에 집중해야 할 때",
    },
    { name: "드로어", slug: "drawer", reason: "화면 옆의 탐색이나 보조 패널을 열 때" },
  ],
  accessibility: [
    "네이티브 dialog로 배경 포커스를 막고 Escape 키로 닫을 수 있게 합니다.",
    "스와이프 외에도 명확한 닫기 버튼을 제공합니다.",
  ],
  tags: BASE_TAGS,
  loadPreview: () => import("./BottomSheetDemo").then((m) => m.BottomSheetDemo),
  Thumbnail: BottomSheetThumbnail,
  sources: [
    {
      fileName: "BottomSheet.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bottom-sheet/BottomSheet.tsx?raw"),
    },
    {
      fileName: "BottomSheetDemo.tsx",
      role: "Usage",
      load: () => import("./BottomSheetDemo.tsx?raw"),
    },
  ],
};
