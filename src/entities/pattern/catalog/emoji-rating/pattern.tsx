import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { EmojiRatingThumbnail } from "@/entities/pattern/catalog/emoji-rating/EmojiRatingThumbnail";

export const emojiRatingPattern: Pattern = {
  slug: "emoji-rating",
  name: "Emoji Rating",
  nameKo: "이모지 평가",
  aliases: ["표정 평가", "만족도 얼굴", "smiley rating", "CSAT faces"],
  category: "reaction-share",
  summary: "만족도를 순서 있는 얼굴로 입력",
  description:
    "찡그린 얼굴부터 웃는 얼굴까지 다섯 표정을 순서대로 놓은 만족도 입력입니다. 표정마다 매우 불만족부터 매우 만족까지 글자 이름이 있어 얼굴을 읽지 않아도 뜻이 분명합니다.",
  whenToUse: [
    "배송, 상담처럼 한 번의 경험 만족도",
    "가볍고 빠른 응답이 필요할 때",
    "다섯 단계로 충분할 때",
  ],
  whenNotToUse: [
    "정밀한 점수가 필요할 때(NPS, 평점 슬라이더 사용)",
    "진지한 의료, 금융 상담",
    "얼굴 표정이 문화마다 다르게 읽힐 수 있는 곳에서 글자 없이",
  ],
  alternatives: [
    { name: "별점", slug: "star-rating", reason: "공개 평점으로 쓸 때" },
    { name: "도움이 됐나요", slug: "thumbs-feedback", reason: "두 가지로 충분할 때" },
  ],
  accessibility: [
    "라디오 버튼이라 방향키로 고르고 이름은 매우 불만족~매우 만족입니다.",
    "얼굴 그림은 aria-hidden입니다.",
    "고른 얼굴은 색과 크기 둘 다로 보여 줍니다.",
    "고른 결과를 글자로 함께 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "radio", "SVG", "CSAT"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/emoji-rating/EmojiRatingDemo").then(
      (m) => m.EmojiRatingDemo,
    ),
  Thumbnail: EmojiRatingThumbnail,
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
