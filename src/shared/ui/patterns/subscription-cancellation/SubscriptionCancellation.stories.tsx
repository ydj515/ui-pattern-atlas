import type { Meta, StoryObj } from "@storybook/react-vite";

import { SubscriptionCancellation } from "@/shared/ui/patterns/subscription-cancellation/SubscriptionCancellation";

const meta = {
  title: "Patterns/Leaving and returning/Subscription Cancellation",
  component: SubscriptionCancellation,
  args: {
    plan: "프리미엄",
    paidUntil: "6월 30일",
    endings: ["광고 없이 듣기", "곡 저장해 두기"],
    reasons: ["요금이 부담돼요", "잘 쓰지 않아요"],
    onCancel: () => undefined,
    onPause: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof SubscriptionCancellation>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoReasons: Story = { args: { reasons: [] } };
