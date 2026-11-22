import type { Meta, StoryObj } from "@storybook/react-vite";

import { StatusDot } from "@/shared/ui/patterns/status-dot/StatusDot";

const meta = {
  title: "Patterns/Indicator/Status Dot",
  component: StatusDot,
  args: { status: "success", label: "정상" },
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};
export const Down: Story = { args: { status: "error", label: "장애" } };
