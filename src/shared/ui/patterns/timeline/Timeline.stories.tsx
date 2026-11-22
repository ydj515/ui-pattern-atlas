import type { Meta, StoryObj } from "@storybook/react-vite";

import { Timeline } from "@/shared/ui/patterns/timeline/Timeline";

const meta = {
  title: "Patterns/List and Table/Timeline",
  component: Timeline,
  args: {
    label: "배송 현황",
    events: [
      { id: "a", title: "주문 접수", time: "11월 22일 09:12" },
      { id: "b", title: "배송 출발", time: "11월 23일 08:05" },
      { id: "c", title: "배송 완료", time: "11월 23일 14:20" },
    ],
    current: 1,
  },
  argTypes: { current: { control: { type: "range", min: 0, max: 2 } } },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InTransit: Story = {};
export const Delivered: Story = { args: { current: 2 } };
