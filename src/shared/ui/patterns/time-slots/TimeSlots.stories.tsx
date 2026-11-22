import type { Meta, StoryObj } from "@storybook/react-vite";

import { TimeSlots } from "@/shared/ui/patterns/time-slots/TimeSlots";

const meta = {
  title: "Patterns/Special Input/Time Slots",
  component: TimeSlots,
  args: {
    label: "예약 시간",
    slots: [
      { time: "10:00", available: true },
      { time: "10:30", available: false },
      { time: "11:00", available: true },
    ],
    value: null,
    onChange: () => {},
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof TimeSlots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};
export const Picked: Story = { args: { value: "11:00" } };
