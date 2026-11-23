import type { Meta, StoryObj } from "@storybook/react-vite";

import { Gauge } from "@/shared/ui/patterns/gauge/Gauge";

const meta = {
  title: "Patterns/Data Viz/Gauge",
  component: Gauge,
  args: { value: 6200, max: 10000, target: 8000, label: "오늘 걸음 수" },
} satisfies Meta<typeof Gauge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithTarget: Story = {};
export const NoTarget: Story = { args: { target: undefined, value: 9100 } };
