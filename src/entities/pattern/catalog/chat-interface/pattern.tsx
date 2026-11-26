import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const chatInterfacePattern: Pattern = {
  slug: "chat-interface",

  name: "Chat Interface",
  nameKo: "채팅 화면",
  aliases: ["AI 채팅", "대화 화면", "chatbot", "conversation UI"],
  category: "ai",
  summary: "주고받는 말풍선 대화",
  description:
    "내 말은 오른쪽, 답변은 왼쪽 말풍선으로 쌓이는 대화 화면입니다. 맨 아래를 보고 있을 때만 새 메시지를 따라 내려가고, 위로 올려 읽는 중이면 자리를 지킨 채 새 메시지 보기 버튼을 띄웁니다.",
  tags: [...BASE_TAGS, "role=log", "aria-live", "Scroll anchoring"],
  loadGuide: () => import("@/entities/pattern/catalog/chat-interface/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/chat-interface/ChatInterfaceDemo").then(
      (m) => m.ChatInterfaceDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/chat-interface/ChatInterfaceThumbnail").then(
      (m) => m.ChatInterfaceThumbnail,
    ),
  sources: [
    {
      fileName: "ChatInterface.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/chat-interface/ChatInterface.tsx?raw"),
    },
    {
      fileName: "ChatInterfaceDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/chat-interface/ChatInterfaceDemo.tsx?raw"),
    },
  ],
};
