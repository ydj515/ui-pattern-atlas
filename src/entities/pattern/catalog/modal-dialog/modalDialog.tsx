import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const modalDialogPattern: Pattern = {
  slug: "modal-dialog",

  name: "Modal Dialog",
  nameKo: "모달 다이얼로그",
  aliases: ["모달", "다이얼로그", "팝업", "확인 창", "confirm", "dialog", "alert dialog"],
  category: "overlay",
  summary: "화면을 잠시 멈추고 중요한 결정을 받는 창",
  description:
    "사용자의 주의를 집중시키고, 중요한 결정이나 추가 입력이 필요한 경우 사용하는 UI 패턴입니다. 열려 있는 동안 뒤의 화면은 조작할 수 없습니다.",
  tags: [...BASE_TAGS, "dialog element", "Focus management"],
  loadGuide: () => import("@/entities/pattern/catalog/modal-dialog/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/modal-dialog/ModalDialogDemo").then(
      (m) => m.ModalDialogDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/modal-dialog/ModalDialogThumbnail").then(
      (m) => m.ModalDialogThumbnail,
    ),
  sources: [
    {
      fileName: "ModalDialog.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/modal-dialog/ModalDialog.tsx?raw"),
    },
    {
      fileName: "ModalDialogDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/modal-dialog/ModalDialogDemo.tsx?raw"),
    },
  ],
};
