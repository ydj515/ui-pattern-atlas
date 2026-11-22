import type { Meta, StoryObj } from "@storybook/react-vite";

import { DateRangePicker } from "@/shared/ui/patterns/date-range-picker/DateRangePicker";

const meta = {
  title: "Patterns/Special Input/Date Range Picker",
  component: DateRangePicker,
  args: { month: new Date(2026, 10, 1), value: { start: null, end: null }, onChange: () => {} },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const TwoNights: Story = {
  args: { value: { start: new Date(2026, 10, 27), end: new Date(2026, 10, 29) } },
};
