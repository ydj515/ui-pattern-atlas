import type { Meta, StoryObj } from "@storybook/react-vite";

import { BoxPlot } from "@/shared/ui/patterns/box-plot/BoxPlot";

const meta = {
  title: "Patterns/Data Viz/Box Plot",
  component: BoxPlot,
  args: {
    title: "지역별 배송 시간(시간)",
    min: 0,
    max: 48,
    groups: [
      { label: "서울", values: [6, 8, 9, 10, 12, 12, 14, 15, 18, 40] },
      { label: "경기", values: [10, 12, 14, 16, 18, 20, 22, 24, 26, 30] },
    ],
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof BoxPlot>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OneGroup: Story = {
  args: { groups: [{ label: "서울", values: [6, 8, 9, 10, 12, 14, 18] }] },
};
