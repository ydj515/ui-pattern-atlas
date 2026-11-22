import type { Meta, StoryObj } from "@storybook/react-vite";

import { VirtualizedList } from "@/shared/ui/patterns/virtualized-list/VirtualizedList";

const meta = {
  title: "Patterns/List and Table/Virtualized List",
  component: VirtualizedList,
  args: {
    label: "주문 10,000건",
    count: 10_000,
    rowHeight: 36,
    height: 240,
    renderRow: (index: number) => `주문 ${index + 1}`,
  },
  argTypes: { renderRow: { control: false } },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof VirtualizedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TenThousand: Story = {};
export const Million: Story = { args: { count: 1_000_000, label: "주문 1,000,000건" } };
