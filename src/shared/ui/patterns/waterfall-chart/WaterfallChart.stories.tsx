import type { Meta, StoryObj } from "@storybook/react-vite";

import { WaterfallChart } from "@/shared/ui/patterns/waterfall-chart/WaterfallChart";

const meta = {
  title: "Patterns/Data Viz/Waterfall Chart",
  component: WaterfallChart,
  args: {
    title: "11월 손익",
    start: { label: "매출", value: 1200 },
    steps: [
      { label: "원가", value: -480 },
      { label: "인건비", value: -300 },
      { label: "광고", value: -150 },
      { label: "기타 수익", value: 60 },
    ],
    endLabel: "순이익",
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof WaterfallChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loss: Story = {
  args: {
    steps: [
      { label: "원가", value: -900 },
      { label: "인건비", value: -400 },
    ],
  },
};
