import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const completedTaskStrikethroughPattern: Pattern = {
  slug: "completed-task-strikethrough",
  name: "Completed Task Strikethrough",
  nameKo: "할 일 줄긋기",
  aliases: ["취소선", "할 일 완료", "todo strikethrough", "check off"],
  category: "completion",
  summary: "체크한 할 일에 줄을 긋기",
  description:
    "할 일을 체크하면 글자 위로 왼쪽부터 줄이 그어지고 회색으로 바뀌는 패턴입니다. 진짜 상태는 체크박스가 가지고, 줄은 끝냈다는 감각을 더하는 시각 표현입니다.",
  whenToUse: [
    "할 일, 장보기처럼 하나씩 지워 가는 목록",
    "끝낸 항목도 잠시 목록에 남겨 둘 때",
    "진행 개수를 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "끝낸 항목을 바로 목록에서 빼야 할 때",
    "삭제와 완료가 헷갈릴 수 있는 곳",
    "읽어야 하는 내용을 흐리게 만들 때",
  ],
  alternatives: [
    { name: "체크박스", slug: "checkbox", reason: "완료 표시 없이 선택만 할 때" },
    { name: "설정 체크리스트", slug: "setup-checklist", reason: "처음 할 일과 진행률" },
  ],
  accessibility: [
    "완료 상태는 체크박스 자체로 화면 읽기에 전달됩니다.",
    "줄은 장식이라 aria-hidden입니다.",
    "회색 글자도 배경과 대비를 유지합니다.",
    "동작 줄이기에서는 줄을 바로 긋습니다.",
  ],
  tags: [...BASE_TAGS, "Checkbox", "CSS transition", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/completed-task-strikethrough/TaskItemDemo").then(
      (m) => m.TaskItemDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/completed-task-strikethrough/TaskItemThumbnail").then(
      (m) => m.TaskItemThumbnail,
    ),
  sources: [
    {
      fileName: "TaskItem.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/completed-task-strikethrough/TaskItem.tsx?raw"),
    },
    {
      fileName: "TaskItemDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/completed-task-strikethrough/TaskItemDemo.tsx?raw"),
    },
  ],
};
