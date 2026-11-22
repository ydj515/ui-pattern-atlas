import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SendButtonThumbnail } from "@/entities/pattern/catalog/send-animation/SendButtonThumbnail";

export const sendAnimationPattern: Pattern = {
  slug: "send-animation",
  name: "Send Animation",
  nameKo: "보냄 애니메이션",
  aliases: ["전송 애니메이션", "종이비행기", "send button", "message sent"],
  category: "completion",
  summary: "보낸 순간을 짧은 움직임으로 표시",
  description:
    "보내기를 누르면 종이비행기가 오른쪽 위로 날아가고 새 비행기가 돌아오며, 보낸 메시지가 대화 아래에서 올라오는 표현입니다. 움직임은 신호일 뿐이고 결과는 대화 목록에 메시지로 남습니다.",
  whenToUse: [
    "채팅, 댓글처럼 보내기가 잦은 입력창",
    "보냈다는 감각을 바로 주고 싶을 때",
    "보낸 결과가 같은 화면에 나타날 때",
  ],
  whenNotToUse: [
    "전송 실패 가능성이 큰데 성공처럼 보일 때",
    "메일처럼 보낸 뒤 화면을 떠날 때",
    "긴 비행 연출로 다음 입력을 막을 때",
  ],
  alternatives: [
    { name: "로딩 버튼", slug: "loading-button", reason: "보내는 데 시간이 걸릴 때" },
    { name: "체크 애니메이션", slug: "success-checkmark", reason: "전송 완료를 크게 알릴 때" },
  ],
  accessibility: [
    "보내기 버튼은 아이콘만 있어 aria-label로 이름을 붙입니다.",
    "입력이 비면 버튼을 비활성으로 둡니다.",
    "보낸 메시지는 대화 목록(ol)에 추가되어 화면 읽기로 확인할 수 있습니다.",
    "동작 줄이기에서는 비행기와 말풍선 움직임을 생략합니다.",
  ],
  tags: [...BASE_TAGS, "Web Animations API", "@starting-style", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/send-animation/SendButtonDemo").then(
      (m) => m.SendButtonDemo,
    ),
  Thumbnail: SendButtonThumbnail,
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
