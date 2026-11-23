import type { Meta, StoryObj } from "@storybook/react-vite";

import { ColumnChart } from "@/shared/ui/patterns/column-chart/ColumnChart";

const meta = {
  title: "Patterns/Data Viz/Column Chart",
  component: ColumnChart,
  args: {
    title: "월별 신규 가입",
    data: [
      { label: "1월", value: 120 },
      { label: "2월", value: 150 },
      { label: "3월", value: 180 },
      { label: "4월", value: 160 },
      { label: "5월", value: 210 },
      { label: "6월", value: 240 },
    ],
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof ColumnChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FixedScale: Story = { args: { max: 400 } };
