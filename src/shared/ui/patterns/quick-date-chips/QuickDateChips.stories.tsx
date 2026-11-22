import type { Meta, StoryObj } from "@storybook/react-vite";

import { QuickDateChips } from "@/shared/ui/patterns/quick-date-chips/QuickDateChips";

const options = [
  { label: "오늘", date: new Date(2026, 10, 23) },
  { label: "내일", date: new Date(2026, 10, 24) },
  { label: "이번 주말", date: new Date(2026, 10, 28) },
];

const meta = {
  title: "Patterns/Special Input/Quick Date Chips",
  component: QuickDateChips,
  args: { label: "받는 날", options, value: null, onChange: () => {} },
} satisfies Meta<typeof QuickDateChips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NothingPicked: Story = {};
export const Weekend: Story = { args: { value: new Date(2026, 10, 28) } };
