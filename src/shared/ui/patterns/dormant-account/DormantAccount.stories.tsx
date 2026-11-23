import type { Meta, StoryObj } from "@storybook/react-vite";

import { DormantAccount } from "@/shared/ui/patterns/dormant-account/DormantAccount";

const meta = {
  title: "Patterns/Leaving and returning/Dormant Account",
  component: DormantAccount,
  args: {
    account: "haneul@kakao.com",
    since: "2025년 3월 2일",
    kept: ["적립금 4,200원", "주문 내역 12건"],
    onReactivate: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof DormantAccount>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NothingKept: Story = { args: { kept: [] } };
