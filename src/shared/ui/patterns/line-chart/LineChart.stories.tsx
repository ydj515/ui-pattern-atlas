import type { Meta, StoryObj } from "@storybook/react-vite";

import { LineChart } from "@/shared/ui/patterns/line-chart/LineChart";

const meta = {
  title: "Patterns/Data Viz/Line Chart",
  component: LineChart,
  args: {
    title: "월별 방문자 수",
    labels: ["6월", "7월", "8월", "9월", "10월", "11월"],
    series: [
      { name: "올해", values: [1200, 1500, 1400, 1900, 2300, 2600] },
      { name: "작년", values: [1000, 1100, 1300, 1250, 1500, 1700] },
    ],
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof LineChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const TwoSeries: Story = {};
export const OneSeries: Story = {
  args: { series: [{ name: "올해", values: [1200, 1500, 1400, 1900, 2300, 2600] }] },
};
