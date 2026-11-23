import type { Meta, StoryObj } from "@storybook/react-vite";
import { CouponClaim } from "@/shared/ui/patterns/coupon-claim/CouponClaim";

const meta = {
  title: "Patterns/Pricing/Coupon Claim",
  component: CouponClaim,
  args: {
    title: "5,000원 할인",
    conditions: ["3만 원 이상 구매 시", "11월 30일까지"],
    claimed: false,
    onClaim: () => {},
  },
} satisfies Meta<typeof CouponClaim>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Claimed: Story = { args: { claimed: true } };
