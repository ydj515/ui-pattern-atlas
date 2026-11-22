import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReceiptSummary } from "@/shared/ui/patterns/receipt-summary/ReceiptSummary";

const meta = {
  title: "Patterns/Completion/Receipt Summary",
  component: ReceiptSummary,
  args: {
    paidWith: "신용카드 일시불",
    items: [
      { name: "린넨 셔츠", quantity: 1, price: 39000 },
      { name: "양말", quantity: 2, price: 3000 },
    ],
  },
} satisfies Meta<typeof ReceiptSummary>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithDiscount: Story = { args: { discount: 5000, shipping: 3000 } };
