import type { Meta, StoryObj } from "@storybook/react-vite";

import { RecurrencePicker } from "@/shared/ui/patterns/recurrence-picker/RecurrencePicker";

const labels = {
  repeat: "반복",
  frequencies: { daily: "매일", weekly: "매주", monthly: "매월" },
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
  ends: "종료",
  never: "계속 반복",
  after: "횟수",
  times: "회 후 종료",
};

const meta = {
  title: "Patterns/Special Input/Recurrence Picker",
  component: RecurrencePicker,
  args: {
    labels,
    value: { frequency: "weekly", weekdays: [1, 3], end: { type: "count", count: 10 } },
    onChange: () => {},
  },
} satisfies Meta<typeof RecurrencePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Weekly: Story = {};
export const DailyForever: Story = {
  args: { value: { frequency: "daily", weekdays: [], end: { type: "never" } } },
};
