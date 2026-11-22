import type { Meta, StoryObj } from "@storybook/react-vite";

import { Popover } from "@/shared/ui/patterns/popover/Popover";

const meta = {
  title: "Patterns/Overlay/Popover",
  component: Popover,
  parameters: { layout: "padded" },
  args: {
    trigger: "요금 계산 방식",
    title: "요금은 이렇게 계산돼요",
    align: "start",
    children: "기본료 9,900원에 추가 사용량 1GB당 500원이 더해져요.",
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlignStart: Story = {};
export const AlignEnd: Story = {
  args: { align: "end" },
  decorators: [(Story) => <div className="flex justify-end">{Story()}</div>],
};
