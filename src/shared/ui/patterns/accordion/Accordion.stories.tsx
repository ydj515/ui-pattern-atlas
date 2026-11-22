import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion } from "./Accordion";

const meta = {
  title: "Patterns/Disclosure/Accordion",
  component: Accordion,
  args: {
    items: [
      {
        id: "refund",
        title: "환불은 언제 처리되나요?",
        content: "도착한 날부터 영업일 3일 안에 환불돼요.",
      },
      {
        id: "address",
        title: "배송지를 바꿀 수 있나요?",
        content: "상품 준비 중 단계까지 바꿀 수 있어요.",
      },
      {
        id: "receipt",
        title: "현금영수증은 어떻게 받나요?",
        content: "주문 상세에서 신청할 수 있어요.",
      },
    ],
    defaultOpenIds: ["refund"],
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleOpen: Story = {};
export const MultipleOpen: Story = {
  args: { allowMultiple: true, defaultOpenIds: ["refund", "address"] },
};
