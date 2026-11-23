import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sparkline } from "@/shared/ui/patterns/sparkline/Sparkline";

const meta = {
  title: "Patterns/Data Viz/Sparkline",
  component: Sparkline,
  args: {
    values: [120, 135, 128, 150, 162, 158, 180],
    label: "최근 7일 방문, 120에서 180으로 증가",
  },
} satisfies Meta<typeof Sparkline>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Rising: Story = {};
export const Wide: Story = { args: { width: 160, height: 32 } };
