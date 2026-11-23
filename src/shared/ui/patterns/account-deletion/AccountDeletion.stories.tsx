import type { Meta, StoryObj } from "@storybook/react-vite";

import { AccountDeletion } from "@/shared/ui/patterns/account-deletion/AccountDeletion";

const meta = {
  title: "Patterns/Auth/Account Deletion",
  component: AccountDeletion,
  args: {
    losses: ["주문 내역 3건", "적립금 2,300원", "찜한 상품 12개"],
    reasons: ["자주 쓰지 않아요", "원하는 상품이 없어요"],
    confirmWord: "탈퇴",
    graceDays: 30,
    onDelete: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof AccountDeletion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoReasons: Story = { args: { reasons: [] } };
