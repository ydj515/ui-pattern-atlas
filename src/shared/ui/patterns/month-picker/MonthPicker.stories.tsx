import type { Meta, StoryObj } from "@storybook/react-vite";

import { MonthPicker } from "@/shared/ui/patterns/month-picker/MonthPicker";

const meta = {
  title: "Patterns/Special Input/Month Picker",
  component: MonthPicker,
  args: {
    label: "정산 월",
    value: { year: 2026, month: 11 },
    max: { year: 2026, month: 11 },
    onChange: () => {},
  },
} satisfies Meta<typeof MonthPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThisMonth: Story = {};
export const LastYear: Story = { args: { value: { year: 2025, month: 4 } } };
