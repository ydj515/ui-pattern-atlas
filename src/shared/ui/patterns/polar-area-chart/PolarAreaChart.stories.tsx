import type { Meta, StoryObj } from "@storybook/react-vite";

import { PolarAreaChart } from "@/shared/ui/patterns/polar-area-chart/PolarAreaChart";

const MONTHS = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];
const RAIN = [20, 25, 50, 75, 95, 130, 380, 350, 140, 50, 50, 22];

const meta = {
  title: "Patterns/Data Viz/Polar Area Chart",
  component: PolarAreaChart,
  args: {
    title: "서울 월별 강수량",
    data: MONTHS.map((label, index) => ({ label, value: RAIN[index] ?? 0 })),
    format: (value: number) => `${value}mm`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof PolarAreaChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Quarters: Story = {
  args: {
    data: [
      { label: "1분기", value: 95 },
      { label: "2분기", value: 300 },
      { label: "3분기", value: 870 },
      { label: "4분기", value: 122 },
    ],
  },
};
