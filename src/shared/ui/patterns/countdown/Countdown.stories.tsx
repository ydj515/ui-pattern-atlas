import type { Meta, StoryObj } from "@storybook/react-vite";
import { Countdown } from "@/shared/ui/patterns/countdown/Countdown";

const meta = {
  title: "Patterns/Pricing/Countdown",
  component: Countdown,
  args: { endsAt: new Date(Date.now() + 2 * 3600 * 1000), endLabel: "오늘 23:59" },
} satisfies Meta<typeof Countdown>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Ended: Story = { args: { endsAt: new Date(0) } };
