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
  tags: [...BASE_TAGS, "aria-busy", "aria-live", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/streaming-text/guide").then((m) => m.guide),
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
