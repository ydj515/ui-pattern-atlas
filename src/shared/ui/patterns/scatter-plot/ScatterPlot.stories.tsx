import type { Meta, StoryObj } from "@storybook/react-vite";

import { ScatterPlot } from "@/shared/ui/patterns/scatter-plot/ScatterPlot";

const meta = {
  title: "Patterns/Data Viz/Scatter Plot",
  component: ScatterPlot,
  args: {
    title: "배송 거리와 걸린 시간",
    xLabel: "거리(km)",
    yLabel: "시간(시간)",
    xMax: 40,
    yMax: 12,
    points: [
      { x: 3, y: 2 },
      { x: 8, y: 3 },
      { x: 12, y: 4 },
      { x: 18, y: 6 },
      { x: 25, y: 7 },
      { x: 30, y: 9 },
      { x: 10, y: 10 },
    ],
    describe: (p: { x: number; y: number }) => `${p.x}km · ${p.y}시간`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof ScatterPlot>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithMean: Story = { args: { showMean: true } };
