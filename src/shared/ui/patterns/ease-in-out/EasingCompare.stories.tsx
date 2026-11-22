import type { Meta, StoryObj } from "@storybook/react-vite";
import { EasingCompare } from "@/shared/ui/patterns/ease-in-out/EasingCompare";

const meta = {
  title: "Patterns/Motion/Ease In Ease Out",
  component: EasingCompare,
  args: {
    runKey: 0,
    curves: [
      { label: "일정하게", easing: "linear" },
      { label: "천천히 멈춤", easing: "ease-out" },
    ],
  },
} satisfies Meta<typeof EasingCompare>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Ready: Story = {};
export const Played: Story = { args: { runKey: 1 } };
