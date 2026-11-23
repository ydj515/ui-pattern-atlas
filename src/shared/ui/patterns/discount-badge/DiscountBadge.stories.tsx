import type { Meta, StoryObj } from "@storybook/react-vite";
import { DiscountBadge } from "@/shared/ui/patterns/discount-badge/DiscountBadge";

const meta = {
  title: "Patterns/Pricing/Discount Badge",
  component: DiscountBadge,
  args: { referencePrice: 39000, price: 29000, referenceLabel: "최근 30일 판매가" },
} satisfies Meta<typeof DiscountBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
/** No verified reference price: only the price shows, no badge. */
export const Unverified: Story = {
  args: { referencePrice: null },
  render: (args) => (
    <p className="flex items-baseline gap-2 text-lg font-bold">
      29,000원 <DiscountBadge {...args} />
    </p>
  ),
};
