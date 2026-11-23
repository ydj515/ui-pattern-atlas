import type { Meta, StoryObj } from "@storybook/react-vite";

import { ConnectedAccounts } from "@/shared/ui/patterns/connected-accounts/ConnectedAccounts";

const meta = {
  title: "Patterns/Settings/Connected Accounts",
  component: ConnectedAccounts,
  args: {
    accounts: [
      { id: "kakao", name: "카카오", connected: true, detail: "haneul@kakao.com" },
      { id: "google", name: "구글", connected: false },
    ],
    hasPassword: false,
    onChange: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof ConnectedAccounts>;
export default meta;
type Story = StoryObj<typeof meta>;

export const LastOne: Story = {};
export const WithPassword: Story = { args: { hasPassword: true } };
