import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const sendForwardPattern: Pattern = {
  slug: "send-forward",

  name: "Send / Forward",
  nameKo: "보내기와 전달",
  aliases: ["전달하기", "다른 사람에게 보내기", "forward message", "send to"],
  category: "reaction-share",
  summary: "기존 항목을 다른 사람에게 전달",
  description:
    "사진이나 메시지를 앱 안의 다른 사람에게 보내는 고르기 창입니다. 이름으로 찾아 여러 명을 체크하고, 덧붙일 말을 쓴 뒤 몇 명에게 보내는지 적힌 버튼으로 보냅니다.",
  tags: [...BASE_TAGS, "Checkbox list", "Search", "role=dialog"],
  loadGuide: () => import("@/entities/pattern/catalog/send-forward/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/send-forward/ForwardDialogDemo").then(
      (m) => m.ForwardDialogDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/send-forward/ForwardDialogThumbnail").then(
      (m) => m.ForwardDialogThumbnail,
    ),
  sources: [
    {
      fileName: "ForwardDialog.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/send-forward/ForwardDialog.tsx?raw"),
    },
    {
      fileName: "ForwardDialogDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/send-forward/ForwardDialogDemo.tsx?raw"),
    },
  ],
};
