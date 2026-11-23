import type { Meta, StoryObj } from "@storybook/react-vite";

import { NotificationSettings } from "@/shared/ui/patterns/notification-settings/NotificationSettings";

const meta = {
  title: "Patterns/Settings/Notification Settings",
  component: NotificationSettings,
  args: {
    caption: "받을 알림",
    topics: [
      { id: "order", label: "주문·배송", required: ["push"] },
      { id: "event", label: "이벤트·혜택" },
    ],
    channels: [
      { id: "push", label: "앱 푸시" },
      { id: "email", label: "이메일" },
    ],
    enabled: new Set(["order:email"]),
    onChange: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof NotificationSettings>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AllOff: Story = { args: { enabled: new Set() } };
