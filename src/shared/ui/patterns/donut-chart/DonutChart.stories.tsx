import type { Meta, StoryObj } from "@storybook/react-vite";

import { DonutChart } from "@/shared/ui/patterns/donut-chart/DonutChart";

const meta = {
  title: "Patterns/Data Viz/Donut Chart",
  component: DonutChart,
  args: {
    title: "11월 지출",
    data: [
      { label: "식비", value: 52 },
      { label: "교통", value: 18 },
      { label: "주거", value: 20 },
      { label: "기타", value: 10 },
    ],
    format: (value: number) => `${value}만 원`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof DonutChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TwoParts: Story = {
  args: {
    data: [
      { label: "식비", value: 70 },
      { label: "기타", value: 30 },
    ],
  },
};
