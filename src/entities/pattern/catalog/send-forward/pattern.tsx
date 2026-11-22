import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ForwardDialogThumbnail } from "@/entities/pattern/catalog/send-forward/ForwardDialogThumbnail";

export const sendForwardPattern: Pattern = {
  slug: "send-forward",
  name: "Send / Forward",
  nameKo: "보내기와 전달",
  aliases: ["전달하기", "다른 사람에게 보내기", "forward message", "send to"],
  category: "reaction-share",
  summary: "기존 항목을 다른 사람에게 전달",
  description:
    "사진이나 메시지를 앱 안의 다른 사람에게 보내는 고르기 창입니다. 이름으로 찾아 여러 명을 체크하고, 덧붙일 말을 쓴 뒤 몇 명에게 보내는지 적힌 버튼으로 보냅니다.",
  whenToUse: [
    "메신저, 협업 도구 안에서 항목을 옮겨 보낼 때",
    "여러 명에게 한 번에 보낼 때",
    "받는 사람이 앱 안에 있을 때",
  ],
  whenNotToUse: [
    "앱 밖으로 보낼 때(공유 시트 사용)",
    "내 피드에 다시 올릴 때(리포스트 사용)",
    "받는 사람이 수백 명일 때",
  ],
  alternatives: [
    { name: "공유 시트", slug: "share-sheet", reason: "기기 앱으로 보낼 때" },
    { name: "리포스트", slug: "repost", reason: "내 피드에 다시 올릴 때" },
  ],
  accessibility: [
    "받는 사람 목록은 fieldset과 체크박스로 만듭니다.",
    "검색과 메시지 칸에 이름을 붙입니다.",
    "보낼 사람이 없으면 버튼을 비활성으로 둡니다.",
    "결과는 role=status로 알립니다.",
  ],
  tags: [...BASE_TAGS, "Checkbox list", "Search", "role=dialog"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/send-forward/ForwardDialogDemo").then(
      (m) => m.ForwardDialogDemo,
    ),
  Thumbnail: ForwardDialogThumbnail,
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
