import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProgressRing } from "@/shared/ui/patterns/progress-ring/ProgressRing";

const meta = {
  title: "Patterns/Loading/Progress Ring",
  component: ProgressRing,
  args: { value: 40, label: "사진 백업" },
  argTypes: { value: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<typeof ProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {};
export const Done: Story = { args: { value: 100 } };
export const Small: Story = { args: { size: 36, strokeWidth: 4 } };
