import type { Meta, StoryObj } from "@storybook/react-vite";

import { DescriptionList } from "@/shared/ui/patterns/description-list/DescriptionList";

const meta = {
  title: "Patterns/List and Table/Description List",
  component: DescriptionList,
  args: {
    title: "주문 정보",
    items: [
      { term: "주문 번호", details: "A-1021" },
      { term: "결제 수단", details: "카드 (일시불)" },
    ],
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Order: Story = {};
export const Untitled: Story = { args: { title: undefined } };
