import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ModalDialogThumbnail } from "@/entities/pattern/catalog/modal-dialog/ModalDialogThumbnail";

export const modalDialogPattern: Pattern = {
  slug: "modal-dialog",
  name: "Modal Dialog",
  nameKo: "모달 다이얼로그",
  aliases: ["모달", "다이얼로그", "팝업", "확인 창", "confirm", "dialog", "alert dialog"],
  category: "overlay",
  summary: "화면을 잠시 멈추고 중요한 결정을 받는 창",
  description:
    "사용자의 주의를 집중시키고, 중요한 결정이나 추가 입력이 필요한 경우 사용하는 UI 패턴입니다. 열려 있는 동안 뒤의 화면은 조작할 수 없습니다.",
  whenToUse: [
    "되돌리기 어려운 작업(삭제, 결제)에 대한 확인이 필요할 때",
    "다음 단계로 넘어가기 전에 사용자의 명시적인 결정이 필요할 때",
    "짧은 입력(이름 변경 등)을 현재 맥락에서 바로 받아야 할 때",
  ],
  whenNotToUse: [
    "단순한 상태 변경 결과를 안내할 때",
    "작업 흐름을 불필요하게 중단시킬 때",
    "긴 폼이나 여러 단계의 입력이 필요할 때",
  ],
  alternatives: [
    { name: "Toast", slug: "toast", reason: "간단한 처리 결과 안내" },
    { name: "Popover", slug: "popover", reason: "현재 맥락을 유지하는 부가 정보" },
    { name: "Drawer", slug: "drawer", reason: "상대적으로 복잡한 입력 작업" },
  ],
  accessibility: [
    "네이티브 <dialog>의 showModal()을 사용해 포커스가 창 안에 갇히고 배경은 inert 상태가 됩니다.",
    "aria-labelledby와 aria-describedby로 제목과 설명을 창에 연결합니다.",
    "Esc 키로 닫을 수 있고, 닫히면 창을 열었던 버튼으로 포커스가 돌아갑니다.",
    "파괴적인 작업에서는 안전한 버튼(취소)에 초기 포커스를 둡니다.",
  ],
  tags: [...BASE_TAGS, "dialog element", "Focus management"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/modal-dialog/ModalDialogDemo").then(
      (m) => m.ModalDialogDemo,
    ),
  Thumbnail: ModalDialogThumbnail,
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
