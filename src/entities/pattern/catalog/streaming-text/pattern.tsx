import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const streamingTextPattern: Pattern = {
  slug: "streaming-text",
  name: "Streaming Text",
  nameKo: "스트리밍 응답",
  aliases: ["실시간 답변", "토큰 스트리밍", "streaming response", "typewriter answer"],
  category: "ai",
  summary: "답이 써지듯 들어오기",
  description:
    "답변이 만들어지는 대로 몇 글자씩 들어오고 끝에 커서가 보이는 표현입니다. 쓰는 동안은 aria-busy로 두어 화면 읽기가 조각마다 읽지 않게 하고, 멈추면 그때까지 쓴 내용을 남깁니다.",
  whenToUse: [
    "답이 완성되기까지 몇 초 걸리는 AI 응답",
    "첫 글자를 빨리 보여 기다림을 줄이고 싶을 때",
    "도중에 멈출 수 있어야 할 때",
  ],
  whenNotToUse: [
    "결과가 바로 나오는 짧은 응답",
    "표, 코드처럼 다 나온 뒤 봐야 하는 형식",
    "일부러 천천히 보여 주는 연출",
  ],
  alternatives: [
    { name: "타이핑 효과", slug: "typewriter", reason: "정해진 문장을 연출로 써 보일 때" },
    { name: "생각 중 표시", slug: "thinking-indicator", reason: "첫 글자가 나오기 전 기다림" },
  ],
  accessibility: [
    "쓰는 동안 aria-busy를 켜 완성된 답을 한 번에 읽게 합니다.",
    "커서는 장식이라 aria-hidden이고 동작 줄이기에서는 깜빡이지 않습니다.",
    "멈추기 버튼은 답변 받기와 같은 자리에 둡니다.",
    "줄바꿈을 지키도록 white-space: pre-wrap을 씁니다.",
  ],
  tags: [...BASE_TAGS, "aria-busy", "aria-live", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/streaming-text/StreamingTextDemo").then(
      (m) => m.StreamingTextDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/streaming-text/StreamingTextThumbnail").then(
      (m) => m.StreamingTextThumbnail,
    ),
  sources: [
    {
      fileName: "StreamingText.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/streaming-text/StreamingText.tsx?raw"),
    },
    {
      fileName: "StreamingTextDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/streaming-text/StreamingTextDemo.tsx?raw"),
    },
  ],
};
