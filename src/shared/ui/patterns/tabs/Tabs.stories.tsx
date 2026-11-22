import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "./Tabs";

const meta = {
  title: "Patterns/Disclosure/Tabs",
  component: Tabs,
  args: {
    label: "상품 정보",
    items: [
      { id: "detail", label: "상세 정보", content: "용량 5.5L, 최대 200℃까지 설정할 수 있어요." },
      { id: "reviews", label: "리뷰 128", content: "★ 4.7 · 세척이 쉬워요" },
      { id: "shipping", label: "배송/교환", content: "오늘 오후 2시 전 주문 시 내일 도착해요." },
    ],
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const StartOnReviews: Story = { args: { defaultTabId: "reviews" } };
