import type { Meta, StoryObj } from "@storybook/react-vite";

import { CalendarHeatmap } from "@/shared/ui/patterns/calendar-heatmap/CalendarHeatmap";

const meta = {
  title: "Patterns/Data Viz/Calendar Heatmap",
  component: CalendarHeatmap,
  args: {
    title: "11월 운동 기록",
    firstWeekday: 6,
    values: [
      30, 0, 20, 0, 45, 0, 60, 40, 0, 25, 0, 50, 0, 0, 35, 20, 0, 30, 0, 55, 70, 30, 0, 40, 0, 20,
      0, 60, 45, 0,
    ],
    describe: (day: number, value: number) => `11월 ${day}일 · ${value}분`,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof CalendarHeatmap>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const StartsMonday: Story = { args: { firstWeekday: 0 } };
