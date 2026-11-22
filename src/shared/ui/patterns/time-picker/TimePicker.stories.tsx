import type { Meta, StoryObj } from "@storybook/react-vite";

import { TimePicker } from "@/shared/ui/patterns/time-picker/TimePicker";

const meta = {
  title: "Patterns/Special Input/Time Picker",
  component: TimePicker,
  args: { label: "픽업 시간", value: "14:30", onChange: () => {}, fromHour: 10, toHour: 20 },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OpeningHours: Story = {};
export const QuarterSteps: Story = {
  args: { minuteStep: 15, value: "09:45", fromHour: 0, toHour: 23 },
};
