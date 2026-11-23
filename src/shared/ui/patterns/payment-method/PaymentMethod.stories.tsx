import type { Meta, StoryObj } from "@storybook/react-vite";

import { PaymentMethod } from "@/shared/ui/patterns/payment-method/PaymentMethod";

const meta = {
  title: "Patterns/Checkout/Payment Method",
  component: PaymentMethod,
  args: {
    options: [
      { id: "card", label: "신용·체크카드" },
      { id: "easy", label: "간편결제", note: "등록한 계좌나 카드로 한 번에" },
      { id: "bank", label: "계좌이체" },
    ],
    value: "card",
    onChange: () => undefined,
    installments: ["일시불", "2개월", "3개월"],
    installment: "일시불",
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof PaymentMethod>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {};
export const Easy: Story = { args: { value: "easy" } };
