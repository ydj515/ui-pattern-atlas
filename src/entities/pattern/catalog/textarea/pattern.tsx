import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TextareaThumbnail } from "@/entities/pattern/catalog/textarea/TextareaThumbnail";

export const textareaPattern: Pattern = {
  slug: "textarea",
  name: "Textarea",
  nameKo: "텍스트 영역",
  aliases: ["여러 줄 입력", "자동 높이", "글자 수", "textarea", "auto-resize"],
  category: "text-input",
  summary: "높이 자동 조절과 글자 수 표시",
  description:
    "여러 줄 글을 입력받으며 내용에 맞춰 높이가 늘어나고, 남은 글자 수를 함께 보여 주는 패턴입니다. 스크롤 안에 갇히지 않고 쓴 글 전체를 보면서 고칠 수 있습니다.",
  whenToUse: [
    "후기, 문의, 메모처럼 길이가 정해지지 않은 글",
    "글자 수 제한이 있을 때",
    "쓴 내용을 한눈에 보며 고쳐야 할 때",
  ],
  whenNotToUse: [
    "한 줄짜리 입력(텍스트 필드 사용)",
    "서식이 필요한 긴 글(리치 텍스트 에디터 사용)",
    "화면 높이가 고정된 곳에서 끝없이 늘어나면 안 될 때(최대 높이 지정)",
  ],
  alternatives: [{ name: "텍스트 필드", slug: "text-field", reason: "짧은 한 줄 입력" }],
  accessibility: [
    "글자 수는 aria-describedby로 연결되어 필드에 들어가면 함께 읽힙니다.",
    "글자를 칠 때마다 읽어 주지 않도록 글자 수를 live region으로 두지 않습니다.",
    "maxLength로 제한을 넘지 않게 하고, 90%를 넘으면 색과 숫자로 알려 줍니다.",
    "높이는 내용에 맞추되 resize 손잡이는 숨겨 레이아웃이 깨지지 않게 합니다.",
  ],
  tags: [...BASE_TAGS, "Forms", "Character count"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/textarea/TextareaDemo").then((m) => m.TextareaDemo),
  Thumbnail: TextareaThumbnail,
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
