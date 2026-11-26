import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const confirmationDialogPattern: Pattern = {
  slug: "confirmation-dialog",

  name: "Confirmation Dialog",
  nameKo: "확인 다이얼로그",
  aliases: ["확인창", "컨펌", "confirm", "나가기 확인", "저장 안 하고 나가기", "삭제 확인"],
  category: "overlay",
  summary: "작업을 계속할지 한 번 더 묻는 창",
  description:
    "되돌리기 어려운 작업을 실행하기 직전에 계속할지 취소할지 묻는 패턴입니다. await confirm() 한 줄로 쓸 수 있게 Promise로 감싸, 화면마다 모달 상태를 따로 관리하지 않아도 됩니다.",
  tags: [...BASE_TAGS, "Promise", "dialog element"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/confirmation-dialog/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/confirmation-dialog/ConfirmationDialogDemo").then(
      (m) => m.ConfirmationDialogDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/confirmation-dialog/ConfirmationDialogThumbnail").then(
      (m) => m.ConfirmationDialogThumbnail,
    ),
  sources: [
    {
      fileName: "ConfirmationDialog.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/confirmation-dialog/ConfirmationDialog.tsx?raw"),
    },
    {
      fileName: "ConfirmationDialogDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/confirmation-dialog/ConfirmationDialogDemo.tsx?raw"),
    },
  ],
};
