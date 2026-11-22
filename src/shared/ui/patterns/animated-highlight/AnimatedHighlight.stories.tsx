import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnimatedHighlight } from "@/shared/ui/patterns/animated-highlight/AnimatedHighlight";

const meta = {
  title: "Patterns/Text Motion/Animated Highlight",
  component: AnimatedHighlight,
  args: { children: "첫 달은 무료" },
} satisfies Meta<typeof AnimatedHighlight>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoDelay: Story = { args: { delay: 0 } };
