import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const emojiRatingPattern: Pattern = {
  slug: "emoji-rating",

  name: "Emoji Rating",
  nameKo: "이모지 평가",
  aliases: ["표정 평가", "만족도 얼굴", "smiley rating", "CSAT faces"],
  category: "reaction-share",
  summary: "만족도를 순서 있는 얼굴로 입력",
  description:
    "찡그린 얼굴부터 웃는 얼굴까지 다섯 표정을 순서대로 놓은 만족도 입력입니다. 표정마다 매우 불만족부터 매우 만족까지 글자 이름이 있어 얼굴을 읽지 않아도 뜻이 분명합니다.",
  tags: [...BASE_TAGS, "radio", "SVG", "CSAT"],
  loadGuide: () => import("@/entities/pattern/catalog/emoji-rating/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/emoji-rating/EmojiRatingDemo").then(
      (m) => m.EmojiRatingDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/emoji-rating/EmojiRatingThumbnail").then(
      (m) => m.EmojiRatingThumbnail,
    ),
  sources: [
    {
      fileName: "EmojiRating.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/emoji-rating/EmojiRating.tsx?raw"),
    },
    {
      fileName: "EmojiRatingDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/emoji-rating/EmojiRatingDemo.tsx?raw"),
    },
  ],
};
