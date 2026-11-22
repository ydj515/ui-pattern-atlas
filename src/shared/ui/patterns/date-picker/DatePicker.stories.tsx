import type { Meta, StoryObj } from "@storybook/react-vite";

import { DatePicker } from "@/shared/ui/patterns/date-picker/DatePicker";

const today = new Date(2026, 10, 23);

const meta = {
  title: "Patterns/Special Input/Date Picker",
  component: DatePicker,
  args: { label: "방문 날짜", value: null, onChange: () => {}, today, min: today },
  decorators: [(Story) => <div className="h-96 w-72">{Story()}</div>],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const Picked: Story = { args: { value: new Date(2026, 10, 25) } };
