import type { Meta, StoryObj } from "@storybook/react-vite";

import { BulletChart } from "@/shared/ui/patterns/bullet-chart/BulletChart";

const meta = {
  title: "Patterns/Data Viz/Bullet Chart",
  component: BulletChart,
  args: {
    label: "매출 달성률",
    value: 82,
    target: 90,
    max: 100,
    bands: [60, 80],
    format: (n: number) => `${n}%`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof BulletChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const BelowTarget: Story = {};
export const AboveTarget: Story = { args: { value: 96 } };
