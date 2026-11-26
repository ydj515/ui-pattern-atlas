import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const repostPattern: Pattern = {
  slug: "repost",

  name: "Repost",
  nameKo: "리포스트",
  aliases: ["리트윗", "재공유", "retweet", "quote post"],
  category: "reaction-share",
  summary: "기존 게시물을 내 피드에 다시 공유",
  description:
    "리포스트 버튼을 누르면 그대로 다시 올리기와 내 말을 덧붙여 인용하기 두 가지를 고르는 메뉴가 열리는 패턴입니다. 이미 리포스트했다면 같은 메뉴에서 취소할 수 있습니다.",
  tags: [...BASE_TAGS, "menu", "aria-haspopup", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/repost/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/repost/RepostMenuDemo").then((m) => m.RepostMenuDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/repost/RepostMenuThumbnail").then(
      (m) => m.RepostMenuThumbnail,
    ),
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
