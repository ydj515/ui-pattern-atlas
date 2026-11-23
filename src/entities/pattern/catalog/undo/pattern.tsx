import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { UndoThumbnail } from "@/entities/pattern/catalog/undo/UndoThumbnail";

export const undoPattern: Pattern = {
  slug: "undo",
  name: "Undo",
  nameKo: "되돌리기",
  aliases: ["실행 취소", "되돌리기 스낵바", "undo snackbar", "undo toast"],
  category: "feedback",
  summary: "삭제 등 작업을 되돌리는 스낵바",
  description:
    "삭제처럼 실수하기 쉬운 작업을 먼저 화면에서 처리하고, 잠깐 동안 되돌릴 기회를 주는 패턴입니다. 시간이 지나면 그때 실제로 확정합니다. 매번 확인 창을 띄우는 것보다 흐름을 덜 끊습니다.",
  whenToUse: [
    "메일, 할 일, 파일처럼 자주 지우고 되살릴 수 있는 항목을 지울 때",
    "확인 창을 매번 띄우면 반복 작업이 느려질 때",
    "서버 반영을 몇 초 늦춰도 괜찮을 때",
  ],
  whenNotToUse: [
    "결제, 계정 삭제처럼 되돌릴 수 없는 작업(확인 대화상자 사용)",
    "다른 사람에게 바로 알림이 가는 작업(보낸 뒤에는 되돌릴 수 없음)",
    "여러 단계가 얽혀 있어 되돌리기 상태를 정확히 복원하기 어려울 때",
  ],
  alternatives: [
    {
      name: "확인 다이얼로그",
      slug: "confirmation-dialog",
      reason: "되돌릴 수 없는 작업을 하기 전에 한 번 더 묻기",
    },
    { name: "토스트", slug: "toast", reason: "되돌릴 필요 없는 결과만 짧게 알릴 때" },
  ],
  accessibility: [
    '스낵바는 role="status"라 화면을 옮기지 않고도 결과를 읽어 줍니다.',
    "포인터를 올리거나 키보드로 포커스하면 시간이 멈춰서, 되돌리기 버튼에 닿기 전에 사라지지 않습니다(WCAG 2.2.1).",
    "남은 시간 선은 장식이라 aria-hidden이고, 동작 줄이기 설정에서는 숨깁니다.",
    "한 번에 하나만 되돌릴 수 있게 하고, 새 작업을 하면 이전 작업은 바로 확정합니다.",
  ],
  tags: [...BASE_TAGS, "role=status", "WCAG 2.2.1"],
  loadPreview: () => import("@/entities/pattern/catalog/undo/UndoDemo").then((m) => m.UndoDemo),
  Thumbnail: UndoThumbnail,
  sources: [
    {
      fileName: "UndoBar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/undo/UndoBar.tsx?raw"),
    },
    {
      fileName: "UndoDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/undo/UndoDemo.tsx?raw"),
    },
  ],
};
