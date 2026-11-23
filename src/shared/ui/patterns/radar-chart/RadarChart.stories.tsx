import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadarChart } from "@/shared/ui/patterns/radar-chart/RadarChart";

const meta = {
  title: "Patterns/Data Viz/Radar Chart",
  component: RadarChart,
  args: {
    title: "노트북 비교",
    axes: ["성능", "배터리", "가벼움", "화면", "가격"],
    max: 5,
    series: [
      { name: "프로 16", values: [5, 3, 2, 4, 2] },
      { name: "에어 14", values: [3, 5, 5, 3, 4] },
    ],
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof RadarChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const TwoSeries: Story = {};
export const OneSeries: Story = {
  args: { series: [{ name: "프로 16", values: [5, 3, 2, 4, 2] }] },
};
