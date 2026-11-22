import type { Meta, StoryObj } from "@storybook/react-vite";

import { MonthCalendar } from "@/shared/ui/patterns/calendar/MonthCalendar";

const meta = {
  title: "Patterns/Special Input/Calendar",
  component: MonthCalendar,
  args: {
    month: new Date(2026, 10, 1),
    today: new Date(2026, 10, 23),
    events: [
      { id: "a", date: "2026-11-23", title: "주간 회의", time: "10:00" },
      { id: "b", date: "2026-11-27", title: "출시 회고", time: "16:00" },
    ],
  },
} satisfies Meta<typeof MonthCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithEvents: Story = {};
export const Empty: Story = { args: { events: [] } };
