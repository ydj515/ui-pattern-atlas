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
  tags: [...BASE_TAGS, "Checkbox", "CSS transition", "Reduced motion"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/completed-task-strikethrough/guide").then((m) => m.guide),
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
