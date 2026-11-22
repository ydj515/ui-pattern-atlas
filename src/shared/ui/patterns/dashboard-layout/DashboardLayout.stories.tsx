import type { Meta, StoryObj } from "@storybook/react-vite";

import { DashboardLayout } from "@/shared/ui/patterns/dashboard-layout/DashboardLayout";

const meta = {
  title: "Patterns/Layout/Dashboard Layout",
  component: DashboardLayout,
  args: {
    metrics: [
      { label: "방문", value: "4,210", change: "+8% 증가", positive: true },
      { label: "주문", value: "312", change: "+3% 증가", positive: true },
      { label: "환불", value: "9", change: "-2% 감소", positive: false },
    ],
    chart: <div className="h-16 rounded bg-slate-100" />,
    detail: <p className="p-3 text-xs">표</p>,
  },
  argTypes: { chart: { control: false }, detail: { control: false } },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
} satisfies Meta<typeof DashboardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Week: Story = {};
export const NoChange: Story = { args: { metrics: [{ label: "방문", value: "4,210" }] } };
