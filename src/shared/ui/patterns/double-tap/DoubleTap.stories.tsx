import type { Meta, StoryObj } from "@storybook/react-vite";
import { DoubleTap } from "@/shared/ui/patterns/double-tap/DoubleTap";

const meta = {
  title: "Patterns/Gestures/Double Tap",
  component: DoubleTap,
  args: {
    label: "바다 사진",
    liked: false,
    onLike: () => {},
    children: <div className="h-48 bg-gradient-to-b from-sky-300 to-blue-600" />,
  },
} satisfies Meta<typeof DoubleTap>;
export default meta;
type Story = StoryObj<typeof meta>;

export const NotLiked: Story = {};
export const Liked: Story = { args: { liked: true } };
