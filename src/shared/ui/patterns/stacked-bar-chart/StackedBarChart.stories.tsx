import type { Meta, StoryObj } from "@storybook/react-vite";

import { StackedBarChart } from "@/shared/ui/patterns/stacked-bar-chart/StackedBarChart";

const meta = {
  title: "Patterns/Data Viz/Stacked Bar Chart",
  component: StackedBarChart,
  args: {
    title: "월별 문의 처리",
    series: [
      { key: "done", label: "해결" },
      { key: "doing", label: "진행 중" },
      { key: "waiting", label: "대기" },
    ],
    rows: [
      { label: "9월", values: { done: 32, doing: 10, waiting: 8 } },
      { label: "10월", values: { done: 41, doing: 12, waiting: 5 } },
      { label: "11월", values: { done: 26, doing: 14, waiting: 12 } },
    ],
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof StackedBarChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Count: Story = {};
export const Percent: Story = { args: { mode: "percent" } };
