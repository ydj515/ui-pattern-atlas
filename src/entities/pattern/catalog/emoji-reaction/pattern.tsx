import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const emojiReactionPattern: Pattern = {
  slug: "emoji-reaction",

  name: "Emoji Reaction",
  nameKo: "이모지 반응",
  aliases: ["리액션", "반응 달기", "emoji reactions", "reaction chips"],
  category: "reaction-share",
  summary: "여러 감정으로 반응",
  description:
    "메시지 아래에 이모지와 개수가 담긴 칩을 두고, 눌러서 내 반응을 더하거나 뺄 수 있는 패턴입니다. 더하기 버튼으로 작은 고르기 창을 열어 새 반응을 남깁니다.",
  tags: [...BASE_TAGS, "aria-pressed", "aria-expanded", "Chips"],
  loadGuide: () => import("@/entities/pattern/catalog/emoji-reaction/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/emoji-reaction/EmojiReactionDemo").then(
      (m) => m.EmojiReactionDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/emoji-reaction/EmojiReactionThumbnail").then(
      (m) => m.EmojiReactionThumbnail,
    ),
  sources: [
    {
      fileName: "EmojiReaction.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/emoji-reaction/EmojiReaction.tsx?raw"),
    },
    {
      fileName: "EmojiReactionDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/emoji-reaction/EmojiReactionDemo.tsx?raw"),
    },
  ],
};
