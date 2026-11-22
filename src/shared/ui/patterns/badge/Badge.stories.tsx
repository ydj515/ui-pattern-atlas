import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "@/shared/ui/patterns/badge/Badge";

const meta = {
  title: "Patterns/Indicator/Badge",
  component: Badge,
  args: { count: 3 },
  decorators: [(Story) => <div className="p-4">{Story()}</div>],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Few: Story = {};
export const Capped: Story = { args: { count: 120 } };
