import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmojiReaction } from "@/shared/ui/patterns/emoji-reaction/EmojiReaction";

const meta = {
  title: "Patterns/Reaction and Share/Emoji Reaction",
  component: EmojiReaction,
  args: {
    onToggle: () => {},
    choices: [
      { emoji: "👍", name: "좋아요" },
      { emoji: "🎉", name: "축하" },
    ],
    reactions: [
      { emoji: "👍", name: "좋아요", count: 3, mine: true },
      { emoji: "🎉", name: "축하", count: 1, mine: false },
    ],
  },
} satisfies Meta<typeof EmojiReaction>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoReactions: Story = { args: { reactions: [] } };
