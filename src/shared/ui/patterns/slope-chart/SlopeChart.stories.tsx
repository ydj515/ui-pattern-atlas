import type { Meta, StoryObj } from "@storybook/react-vite";

import { SlopeChart } from "@/shared/ui/patterns/slope-chart/SlopeChart";

const meta = {
  title: "Patterns/Data Viz/Slope Chart",
  component: SlopeChart,
  args: {
    title: "결제 수단 비중",
    beforeLabel: "작년",
    afterLabel: "올해",
    items: [
      { label: "카드", before: 58, after: 44 },
      { label: "간편결제", before: 22, after: 41 },
      { label: "계좌이체", before: 15, after: 11 },
    ],
    format: (value: number) => `${value}%`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof SlopeChart>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FixedScale: Story = { args: { min: 0, max: 100 } };
