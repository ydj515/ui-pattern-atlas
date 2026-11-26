import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const emptiedStatePattern: Pattern = {
  slug: "emptied-state",

  name: "Emptied State",
  nameKo: "삭제 직후 빈 화면",
  aliases: ["마지막 항목 삭제", "빈 장바구니", "emptied list", "last item removed"],
  category: "empty-error",
  summary: "마지막 항목을 지운 뒤의 상태와 다음 행동",
  description:
    "목록의 마지막 항목을 지워 화면이 비었을 때, 방금 무엇을 지웠는지 알려 주고 되돌리기와 다음 행동을 함께 주는 패턴입니다. 처음부터 빈 화면과 달리 방금 한 행동의 결과임을 분명히 합니다.",
  tags: [...BASE_TAGS, "Focus management", "UX writing"],
  loadGuide: () => import("@/entities/pattern/catalog/emptied-state/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/emptied-state/EmptiedStateDemo").then(
      (m) => m.EmptiedStateDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/emptied-state/EmptiedStateThumbnail").then(
      (m) => m.EmptiedStateThumbnail,
    ),
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
