import type { Meta, StoryObj } from "@storybook/react-vite";

import { PieChart } from "@/shared/ui/patterns/pie-chart/PieChart";

const meta = {
  title: "Patterns/Data Viz/Pie Chart",
  component: PieChart,
  args: {
    title: "유입 경로",
    data: [
      { label: "검색", value: 45 },
      { label: "SNS", value: 30 },
      { label: "광고", value: 15 },
      { label: "기타", value: 10 },
    ],
    format: (value: number) => `${value}%`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof PieChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TwoParts: Story = {
  args: {
    data: [
      { label: "검색", value: 70 },
      { label: "기타", value: 30 },
    ],
  },
};
