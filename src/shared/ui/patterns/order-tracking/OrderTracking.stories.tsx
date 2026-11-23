import type { Meta, StoryObj } from "@storybook/react-vite";

import { OrderTracking } from "@/shared/ui/patterns/order-tracking/OrderTracking";

const meta = {
  title: "Patterns/Checkout/Order Tracking",
  component: OrderTracking,
  args: {
    steps: [
      { label: "결제 완료", time: "11월 24일 09:12" },
      { label: "상품 준비", time: "11월 24일 14:30" },
      { label: "배송 시작" },
      { label: "배송 완료" },
    ],
    current: 1,
    eta: "11월 26일(수) 도착 예정",
    carrier: "동네택배",
    trackingNumber: "5821 3307 4410",
    onCopy: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof OrderTracking>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preparing: Story = {};
export const Delivered: Story = { args: { current: 3 } };
