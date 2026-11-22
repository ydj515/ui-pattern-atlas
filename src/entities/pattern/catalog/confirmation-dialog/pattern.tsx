import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ConfirmationDialogThumbnail } from "@/entities/pattern/catalog/confirmation-dialog/ConfirmationDialogThumbnail";

export const confirmationDialogPattern: Pattern = {
  slug: "confirmation-dialog",
  name: "Confirmation Dialog",
  nameKo: "확인 다이얼로그",
  aliases: ["확인창", "컨펌", "confirm", "나가기 확인", "저장 안 하고 나가기", "삭제 확인"],
  category: "overlay",
  summary: "작업을 계속할지 한 번 더 묻는 창",
  description:
    "되돌리기 어려운 작업을 실행하기 직전에 계속할지 취소할지 묻는 패턴입니다. await confirm() 한 줄로 쓸 수 있게 Promise로 감싸, 화면마다 모달 상태를 따로 관리하지 않아도 됩니다.",
  whenToUse: [
    "저장하지 않은 내용을 버리고 나갈 때",
    "삭제, 초기화처럼 되돌릴 수 없는 작업을 실행하기 직전에",
    "결제나 발송처럼 실수하면 비용이 큰 작업일 때",
  ],
  whenNotToUse: [
    "되돌릴 수 있는 작업일 때(되돌리기가 있는 토스트가 덜 방해됩니다)",
    "자주 묻게 되어 사용자가 습관적으로 확인을 누르게 될 때",
    "시스템이 먼저 알리는 긴급한 상황일 때(얼럿 다이얼로그 사용)",
  ],
  alternatives: [
    {
      name: "모달 다이얼로그",
      slug: "modal-dialog",
      reason: "확인 외에 입력이나 설명이 더 필요한 창",
    },
    {
      name: "얼럿 다이얼로그",
      slug: "alert-dialog",
      reason: "사용자가 아니라 시스템이 먼저 띄우는 경고",
    },
    { name: "토스트", slug: "toast", reason: "먼저 실행하고 되돌리기를 제공할 때" },
  ],
  accessibility: [
    "네이티브 <dialog>의 showModal()로 열어 포커스를 가두고 배경을 inert 상태로 만듭니다.",
    "취소 버튼을 먼저 두고 초기 포커스를 주어, 습관적으로 Enter를 눌러도 작업이 실행되지 않습니다.",
    "Esc와 배경 클릭은 취소(false)로 처리합니다.",
    "버튼 이름은 '확인' 대신 '나가기'처럼 실제로 일어날 동작을 씁니다.",
  ],
  tags: [...BASE_TAGS, "Promise", "dialog element"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/confirmation-dialog/ConfirmationDialogDemo").then(
      (m) => m.ConfirmationDialogDemo,
    ),
  Thumbnail: ConfirmationDialogThumbnail,
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
