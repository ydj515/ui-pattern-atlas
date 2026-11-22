import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { EmojiReactionThumbnail } from "@/entities/pattern/catalog/emoji-reaction/EmojiReactionThumbnail";

export const emojiReactionPattern: Pattern = {
  slug: "emoji-reaction",
  name: "Emoji Reaction",
  nameKo: "이모지 반응",
  aliases: ["리액션", "반응 달기", "emoji reactions", "reaction chips"],
  category: "reaction-share",
  summary: "여러 감정으로 반응",
  description:
    "메시지 아래에 이모지와 개수가 담긴 칩을 두고, 눌러서 내 반응을 더하거나 뺄 수 있는 패턴입니다. 더하기 버튼으로 작은 고르기 창을 열어 새 반응을 남깁니다.",
  whenToUse: [
    "채팅, 협업 도구의 메시지",
    "답글 없이 가볍게 반응할 때",
    "몇 가지 감정을 구분하고 싶을 때",
  ],
  whenNotToUse: [
    "찬반처럼 둘 중 하나만 필요할 때(도움이 됐나요 사용)",
    "점수가 필요한 평가",
    "이모지가 많아 고르기 어려울 때",
  ],
  alternatives: [
    { name: "좋아요", slug: "like-button", reason: "공감 하나로 충분할 때" },
    { name: "길게 누르기", slug: "long-press", reason: "반응 메뉴를 숨겨 둘 때" },
  ],
  accessibility: [
    "칩은 aria-pressed 토글이고 이름에 감정과 개수가 들어 있습니다.",
    "이모지 자체는 aria-hidden이라 이름만 읽힙니다.",
    "더하기 버튼은 aria-expanded로 고르기 창 상태를 알립니다.",
    "고르기 창은 Esc로 닫힙니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "aria-expanded", "Chips"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/emoji-reaction/EmojiReactionDemo").then(
      (m) => m.EmojiReactionDemo,
    ),
  Thumbnail: EmojiReactionThumbnail,
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
