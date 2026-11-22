import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThinkingIndicator } from "@/shared/ui/patterns/thinking-indicator/ThinkingIndicator";

const meta = {
  title: "Patterns/AI/Thinking Indicator",
  component: ThinkingIndicator,
  args: {},
} satisfies Meta<typeof ThinkingIndicator>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ShowSecondsNow: Story = { args: { showSecondsAfter: 0 } };
