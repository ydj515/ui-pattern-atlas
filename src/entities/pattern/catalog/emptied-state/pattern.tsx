import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { EmptiedStateThumbnail } from "@/entities/pattern/catalog/emptied-state/EmptiedStateThumbnail";

export const emptiedStatePattern: Pattern = {
  slug: "emptied-state",
  name: "Emptied State",
  nameKo: "삭제 직후 빈 화면",
  aliases: ["마지막 항목 삭제", "빈 장바구니", "emptied list", "last item removed"],
  category: "empty-error",
  summary: "마지막 항목을 지운 뒤의 상태와 다음 행동",
  description:
    "목록의 마지막 항목을 지워 화면이 비었을 때, 방금 무엇을 지웠는지 알려 주고 되돌리기와 다음 행동을 함께 주는 패턴입니다. 처음부터 빈 화면과 달리 방금 한 행동의 결과임을 분명히 합니다.",
  whenToUse: [
    "장바구니, 폴더, 재생 목록에서 마지막 항목을 지웠을 때",
    "실수로 지웠을 가능성이 있을 때",
    "비운 뒤에 자연스러운 다음 행동이 있을 때(쇼핑 계속하기)",
  ],
  whenNotToUse: [
    "처음부터 비어 있는 화면(빈 상태 사용)",
    "할 일을 모두 끝내 비운 경우(모두 완료 사용)",
    "되돌릴 수 없는 삭제(확인 대화상자로 먼저 묻기)",
  ],
  alternatives: [
    { name: "되돌리기", slug: "undo", reason: "목록이 남아 있을 때의 삭제 취소" },
    { name: "모두 완료", slug: "all-caught-up", reason: "할 일을 다 처리해 비었을 때" },
  ],
  accessibility: [
    "지운 항목과 버튼이 사라지므로 빈 화면 제목으로 포커스를 옮깁니다.",
    "설명에 지운 항목 이름을 넣어 무엇이 사라졌는지 알려 줍니다.",
    "되돌리면 항목의 삭제 버튼으로 포커스를 돌려줍니다.",
    "다음 행동은 실제 링크라 새 탭 열기 같은 기본 동작이 그대로 됩니다.",
  ],
  tags: [...BASE_TAGS, "Focus management", "UX writing"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/emptied-state/EmptiedStateDemo").then(
      (m) => m.EmptiedStateDemo,
    ),
  Thumbnail: EmptiedStateThumbnail,
  sources: [
    {
      fileName: "EmptiedState.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/emptied-state/EmptiedState.tsx?raw"),
    },
    {
      fileName: "EmptiedStateDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/emptied-state/EmptiedStateDemo.tsx?raw"),
    },
  ],
};
