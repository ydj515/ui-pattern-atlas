import type { Meta, StoryObj } from "@storybook/react-vite";
import { RewardPoints } from "@/shared/ui/patterns/reward-points/RewardPoints";

const meta = {
  title: "Patterns/Pricing/Reward Points",
  component: RewardPoints,
  args: { price: 39000, rate: 0.01, condition: "구매 확정 후 지급" },
} satisfies Meta<typeof RewardPoints>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Membership: Story = { args: { rate: 0.03 } };
