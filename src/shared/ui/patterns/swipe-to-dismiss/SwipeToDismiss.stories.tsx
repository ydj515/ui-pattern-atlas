import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwipeToDismiss } from "@/shared/ui/patterns/swipe-to-dismiss/SwipeToDismiss";

const meta = {
  title: "Patterns/Gestures/Swipe to Dismiss",
  component: SwipeToDismiss,
  args: { title: "공유", onDismiss: () => {}, children: <p>링크 복사</p> },
} satisfies Meta<typeof SwipeToDismiss>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const LowThreshold: Story = { args: { threshold: 40 } };
