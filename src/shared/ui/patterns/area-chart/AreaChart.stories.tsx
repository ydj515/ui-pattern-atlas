import type { Meta, StoryObj } from "@storybook/react-vite";

import { AreaChart } from "@/shared/ui/patterns/area-chart/AreaChart";

const meta = {
  title: "Patterns/Data Viz/Area Chart",
  component: AreaChart,
  args: {
    title: "일별 방문자",
    labels: ["1일", "2일", "3일", "4일", "5일", "6일", "7일"],
    values: [820, 900, 760, 1100, 1240, 980, 1320],
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof AreaChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Week: Story = {};
export const Flat: Story = { args: { values: [500, 520, 510, 505, 515, 500, 510] } };
