import type { Meta, StoryObj } from "@storybook/react-vite";

import { BarChart } from "@/shared/ui/patterns/bar-chart/BarChart";

const meta = {
  title: "Patterns/Data Viz/Bar Chart",
  component: BarChart,
  args: {
    title: "요일별 주문 수",
    data: [
      { label: "월", value: 42 },
      { label: "화", value: 38 },
      { label: "수", value: 51 },
      { label: "목", value: 47 },
      { label: "금", value: 64 },
    ],
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof BarChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FixedScale: Story = { args: { max: 100 } };
