import type { Meta, StoryObj } from "@storybook/react-vite";

import { WaffleChart } from "@/shared/ui/patterns/waffle-chart/WaffleChart";

const meta = {
  title: "Patterns/Data Viz/Waffle Chart",
  component: WaffleChart,
  args: { title: "다시 구매하겠다는 응답", parts: [{ label: "그렇다", percent: 68 }] },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof WaffleChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const OnePart: Story = {};
export const ThreeParts: Story = {
  args: {
    parts: [
      { label: "그렇다", percent: 52 },
      { label: "모르겠다", percent: 30 },
      { label: "아니다", percent: 18 },
    ],
  },
};
