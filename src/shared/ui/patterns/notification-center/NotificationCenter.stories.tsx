import type { Meta, StoryObj } from "@storybook/react-vite";

import { NotificationCenter } from "@/shared/ui/patterns/notification-center/NotificationCenter";

const items = [
  { id: "shipping", title: "배송이 시작됐어요", time: "5분 전", read: false },
  { id: "comment", title: "김하늘 님이 댓글을 남겼어요", time: "1시간 전", read: false },
  { id: "coupon", title: "쿠폰이 곧 만료돼요", time: "어제", read: true },
];

const meta = {
  title: "Patterns/Feedback/Notification Center",
  component: NotificationCenter,
  args: { notifications: items, onRead: () => {}, onReadAll: () => {} },
  decorators: [(Story) => <div className="flex h-80 justify-end">{Story()}</div>],
} satisfies Meta<typeof NotificationCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unread: Story = {};
export const AllRead: Story = {
  args: { notifications: items.map((item) => ({ ...item, read: true })) },
};
