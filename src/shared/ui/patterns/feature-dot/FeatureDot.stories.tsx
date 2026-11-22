import type { Meta, StoryObj } from "@storybook/react-vite";

import { FeatureDot } from "@/shared/ui/patterns/feature-dot/FeatureDot";

const meta = {
  title: "Patterns/Indicator/Feature Dot",
  component: FeatureDot,
  args: { show: true },
  decorators: [(Story) => <p className="flex items-center gap-1.5 text-sm">보고서{Story()}</p>],
} satisfies Meta<typeof FeatureDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const New: Story = {};
export const Seen: Story = { args: { show: false } };
