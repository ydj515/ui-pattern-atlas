import type { Meta, StoryObj } from "@storybook/react-vite";
import { StrikethroughPrice } from "@/shared/ui/patterns/strikethrough-price/StrikethroughPrice";

const meta = {
  title: "Patterns/Pricing/Strikethrough Price",
  component: StrikethroughPrice,
  args: { price: "39,000원" },
} satisfies Meta<typeof StrikethroughPrice>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {};
export const CouponApplied: Story = {
  args: { referencePrice: "39,000원", price: "19,500원", condition: "첫 주문 쿠폰" },
};
