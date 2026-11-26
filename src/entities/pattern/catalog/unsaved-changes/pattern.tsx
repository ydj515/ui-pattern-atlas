import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const unsavedChangesPattern: Pattern = {
  slug: "unsaved-changes",

  name: "Unsaved Changes Warning",
  nameKo: "저장하지 않은 변경 경고",
  aliases: ["나가기 경고", "변경 사항 저장 확인", "unsaved changes dialog", "leave page warning"],
  category: "risky-actions",
  summary: "바꾼 내용이 있을 때만 나가기 전에 묻기",
  description:
    "바꾼 내용을 저장하지 않고 화면을 떠나려 할 때만 묻는 확인 창입니다. 저장하고 나가기, 저장하지 않고 나가기, 계속 편집 세 가지를 결과가 드러나는 이름으로 두고, 바꾼 것이 없으면 묻지 않고 바로 나갑니다.",
  tags: [...BASE_TAGS, "alertdialog", "beforeunload", "focus"],
  loadGuide: () => import("@/entities/pattern/catalog/unsaved-changes/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/unsaved-changes/UnsavedChangesDialogDemo").then(
      (m) => m.UnsavedChangesDialogDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/unsaved-changes/UnsavedChangesDialogThumbnail").then(
      (m) => m.UnsavedChangesDialogThumbnail,
    ),
  sources: [
    {
      fileName: "UnsavedChangesDialog.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/unsaved-changes/UnsavedChangesDialog.tsx?raw"),
    },
    {
      fileName: "UnsavedChangesDialogDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/unsaved-changes/UnsavedChangesDialogDemo.tsx?raw"),
    },
  ],
};
