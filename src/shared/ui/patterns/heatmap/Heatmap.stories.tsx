import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heatmap } from "@/shared/ui/patterns/heatmap/Heatmap";

const meta = {
  title: "Patterns/Data Viz/Heatmap",
  component: Heatmap,
  args: {
    title: "시간대별 주문",
    rows: ["월", "화", "수"],
    columns: ["9시", "12시", "15시", "18시", "21시"],
    values: [
      [4, 18, 9, 30, 22],
      [6, 20, 11, 42, 25],
      [5, 16, 8, 28, 19],
    ],
    describe: (row: string, column: string, value: number) => `${row} ${column} · ${value}건`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof Heatmap>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomScale: Story = { args: { lowLabel: "한가함", highLabel: "붐빔" } };
