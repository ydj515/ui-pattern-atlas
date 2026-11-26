import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const sendAnimationPattern: Pattern = {
  slug: "send-animation",

  name: "Send Animation",
  nameKo: "보냄 애니메이션",
  aliases: ["전송 애니메이션", "종이비행기", "send button", "message sent"],
  category: "completion",
  summary: "보낸 순간을 짧은 움직임으로 표시",
  description:
    "보내기를 누르면 종이비행기가 오른쪽 위로 날아가고 새 비행기가 돌아오며, 보낸 메시지가 대화 아래에서 올라오는 표현입니다. 움직임은 신호일 뿐이고 결과는 대화 목록에 메시지로 남습니다.",
  tags: [...BASE_TAGS, "Web Animations API", "@starting-style", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/send-animation/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/send-animation/SendButtonDemo").then(
      (m) => m.SendButtonDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/send-animation/SendButtonThumbnail").then(
      (m) => m.SendButtonThumbnail,
    ),
  sources: [
    {
      fileName: "SendButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/send-animation/SendButton.tsx?raw"),
    },
    {
      fileName: "SendButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/send-animation/SendButtonDemo.tsx?raw"),
    },
  ],
};
