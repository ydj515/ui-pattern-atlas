import type { Meta, StoryObj } from "@storybook/react-vite";

import { Histogram } from "@/shared/ui/patterns/histogram/Histogram";

const meta = {
  title: "Patterns/Data Viz/Histogram",
  component: Histogram,
  args: {
    title: "주문 금액 분포",
    values: [12, 18, 22, 24, 25, 27, 28, 31, 33, 34, 36, 38, 41, 45, 52, 58, 63, 77],
    min: 0,
    max: 80,
    binSize: 10,
    formatBin: (start: number, end: number) => `${start}~${end}천 원`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof Histogram>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WideBins: Story = { args: { binSize: 20 } };
