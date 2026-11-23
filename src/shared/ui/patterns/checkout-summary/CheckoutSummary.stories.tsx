import type { Meta, StoryObj } from "@storybook/react-vite";

import { CheckoutSummary } from "@/shared/ui/patterns/checkout-summary/CheckoutSummary";

const meta = {
  title: "Patterns/Checkout/Checkout Summary",
  component: CheckoutSummary,
  args: {
    lines: [
      { label: "상품 금액", amount: 92000 },
      { label: "배송비", amount: 0 },
      { label: "쿠폰 할인", amount: -5000 },
    ],
    onPay: () => undefined,
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof CheckoutSummary>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithShipping: Story = {
  args: {
    lines: [
      { label: "상품 금액", amount: 12000 },
      { label: "배송비", amount: 3000 },
    ],
  },
};
