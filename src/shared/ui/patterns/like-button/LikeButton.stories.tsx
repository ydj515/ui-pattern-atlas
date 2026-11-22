import type { Meta, StoryObj } from "@storybook/react-vite";
import { LikeButton } from "@/shared/ui/patterns/like-button/LikeButton";

const meta = {
  title: "Patterns/Reaction and Share/Like Button",
  component: LikeButton,
  args: { liked: false, count: 128, onToggle: () => {} },
} satisfies Meta<typeof LikeButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Liked: Story = { args: { liked: true, count: 129 } };
