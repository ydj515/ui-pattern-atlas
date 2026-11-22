import type { Meta, StoryObj } from "@storybook/react-vite";

import { PushNotificationBanner } from "@/shared/ui/patterns/push-notification/PushNotification";

const meta = {
  title: "Patterns/Feedback/Push Notification",
  component: PushNotificationBanner,
  args: { appName: "쇼핑앱", title: "배송이 시작됐어요", body: "주문하신 상품이 출발했어요" },
  decorators: [(Story) => <div className="bg-slate-100 p-6">{Story()}</div>],
} satisfies Meta<typeof PushNotificationBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {};
export const Earlier: Story = {
  args: { time: "10분 전", title: "쿠폰이 곧 만료돼요", body: "오늘 자정까지 쓸 수 있어요" },
};
