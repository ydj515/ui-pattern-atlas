import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { RepostMenuThumbnail } from "@/entities/pattern/catalog/repost/RepostMenuThumbnail";

export const repostPattern: Pattern = {
  slug: "repost",
  name: "Repost",
  nameKo: "리포스트",
  aliases: ["리트윗", "재공유", "retweet", "quote post"],
  category: "reaction-share",
  summary: "기존 게시물을 내 피드에 다시 공유",
  description:
    "리포스트 버튼을 누르면 그대로 다시 올리기와 내 말을 덧붙여 인용하기 두 가지를 고르는 메뉴가 열리는 패턴입니다. 이미 리포스트했다면 같은 메뉴에서 취소할 수 있습니다.",
  whenToUse: [
    "팔로워가 있는 피드형 서비스",
    "다른 사람의 글을 내 구독자에게 보여 줄 때",
    "의견을 덧붙여 다시 올릴 때",
  ],
  whenNotToUse: [
    "특정 사람에게만 보낼 때(보내기와 전달 사용)",
    "피드가 없는 서비스",
    "한 번에 바로 올려 실수하기 쉬운 설계",
  ],
  alternatives: [
    { name: "보내기와 전달", slug: "send-forward", reason: "특정 사람에게 보낼 때" },
    { name: "공유 시트", slug: "share-sheet", reason: "앱 밖으로 보낼 때" },
  ],
  accessibility: [
    "버튼은 aria-haspopup=menu와 aria-expanded를 가집니다.",
    "메뉴가 열리면 첫 항목에 포커스가 가고 Esc로 닫힙니다.",
    "버튼 이름에 리포스트와 개수가 들어 있습니다.",
    "결과는 role=status로 알립니다.",
  ],
  tags: [...BASE_TAGS, "menu", "aria-haspopup", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/repost/RepostMenuDemo").then((m) => m.RepostMenuDemo),
  Thumbnail: RepostMenuThumbnail,
  sources: [
    {
      fileName: "RepostMenu.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/repost/RepostMenu.tsx?raw"),
    },
    {
      fileName: "RepostMenuDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/repost/RepostMenuDemo.tsx?raw"),
    },
  ],
};
