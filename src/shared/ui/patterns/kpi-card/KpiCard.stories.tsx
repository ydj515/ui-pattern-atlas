import type { Meta, StoryObj } from "@storybook/react-vite";

import { KpiCard } from "@/shared/ui/patterns/kpi-card/KpiCard";

const meta = {
  title: "Patterns/Data Viz/KPI Card",
  component: KpiCard,
  args: { label: "매출", value: "1,240만 원", change: 0.12, comparison: "지난주 대비" },
  decorators: [(Story) => <div className="w-48">{Story()}</div>],
} satisfies Meta<typeof KpiCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = {};
export const LowerIsBetter: Story = {
  args: { label: "반품률", value: "2.1%", change: -0.08, goodWhen: "down" },
};
