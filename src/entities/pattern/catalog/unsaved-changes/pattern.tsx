import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { UnsavedChangesDialogThumbnail } from "@/entities/pattern/catalog/unsaved-changes/UnsavedChangesDialogThumbnail";

export const unsavedChangesPattern: Pattern = {
  slug: "unsaved-changes",
  name: "Unsaved Changes Warning",
  nameKo: "저장하지 않은 변경 경고",
  aliases: ["나가기 경고", "변경 사항 저장 확인", "unsaved changes dialog", "leave page warning"],
  category: "risky-actions",
  summary: "바꾼 내용이 있을 때만 나가기 전에 묻기",
  description:
    "바꾼 내용을 저장하지 않고 화면을 떠나려 할 때만 묻는 확인 창입니다. 저장하고 나가기, 저장하지 않고 나가기, 계속 편집 세 가지를 결과가 드러나는 이름으로 두고, 바꾼 것이 없으면 묻지 않고 바로 나갑니다.",
  whenToUse: [
    "자동 저장이 없는 편집 화면",
    "입력한 내용이 많아 잃으면 아까울 때",
    "뒤로 가기로 쉽게 떠날 수 있을 때",
  ],
  whenNotToUse: [
    "자동 저장이 되는 화면(자동 저장 표시 사용)",
    "바꾼 것이 없는데도 매번 물을 때",
    "예, 아니요처럼 결과가 드러나지 않는 버튼",
  ],
  alternatives: [
    { name: "자동 저장 표시", slug: "autosave-indicator", reason: "저장을 자동으로 처리할 때" },
    { name: "확인 다이얼로그", slug: "confirmation-dialog", reason: "일반적인 확인 창" },
  ],
  accessibility: [
    'role="alertdialog"와 aria-modal로 열리고 제목과 본문을 이어 둡니다.',
    "가장 안전한 계속 편집에 처음 포커스를 둡니다.",
    "Esc를 누르면 계속 편집으로 닫힙니다.",
  ],
  tags: [...BASE_TAGS, "alertdialog", "beforeunload", "focus"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/unsaved-changes/UnsavedChangesDialogDemo").then(
      (m) => m.UnsavedChangesDialogDemo,
    ),
  Thumbnail: UnsavedChangesDialogThumbnail,
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
