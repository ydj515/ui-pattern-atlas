import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmojiRating } from "@/shared/ui/patterns/emoji-rating/EmojiRating";

const meta = {
  title: "Patterns/Reaction and Share/Emoji Rating",
  component: EmojiRating,
  args: {
    question: "배송은 어떠셨나요?",
    value: null,
    onChange: () => {},
    labels: ["매우 불만족", "불만족", "보통", "만족", "매우 만족"],
  },
} satisfies Meta<typeof EmojiRating>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Chosen: Story = { args: { value: 4 } };
