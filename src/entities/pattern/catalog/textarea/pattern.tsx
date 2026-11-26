import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const textareaPattern: Pattern = {
  slug: "textarea",

  name: "Textarea",
  nameKo: "텍스트 영역",
  aliases: ["여러 줄 입력", "자동 높이", "글자 수", "textarea", "auto-resize"],
  category: "text-input",
  summary: "높이 자동 조절과 글자 수 표시",
  description:
    "여러 줄 글을 입력받으며 내용에 맞춰 높이가 늘어나고, 남은 글자 수를 함께 보여 주는 패턴입니다. 스크롤 안에 갇히지 않고 쓴 글 전체를 보면서 고칠 수 있습니다.",
  tags: [...BASE_TAGS, "Forms", "Character count"],
  loadGuide: () => import("@/entities/pattern/catalog/textarea/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/textarea/TextareaDemo").then((m) => m.TextareaDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/textarea/TextareaThumbnail").then(
      (m) => m.TextareaThumbnail,
    ),
  sources: [
    {
      fileName: "AutoTextarea.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/textarea/AutoTextarea.tsx?raw"),
    },
    {
      fileName: "TextareaDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/textarea/TextareaDemo.tsx?raw"),
    },
  ],
};
