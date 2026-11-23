import type { Meta, StoryObj } from "@storybook/react-vite";

import { OrderCancellation } from "@/shared/ui/patterns/order-cancellation/OrderCancellation";

const meta = {
  title: "Patterns/Checkout/Order Cancellation",
  component: OrderCancellation,
  args: {
    items: [
      { id: "shirt", name: "린넨 셔츠", price: 39000 },
      { id: "bag", name: "캔버스 백", price: 29000 },
    ],
    reasons: ["단순 변심", "다른 상품을 잘못 주문했어요"],
    couponBack: (kept: number) => (kept < 30000 ? 5000 : 0),
    refundMethod: "결제한 카드로 3영업일 안에",
    onCancel: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof OrderCancellation>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoCoupon: Story = { args: { couponBack: () => 0 } };
