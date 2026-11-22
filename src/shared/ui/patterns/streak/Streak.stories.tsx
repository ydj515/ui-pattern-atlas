import type { Meta, StoryObj } from "@storybook/react-vite";
import { Streak } from "@/shared/ui/patterns/streak/Streak";

const meta = {
  title: "Patterns/Completion/Streak",
  component: Streak,
  args: {
    count: 7,
    countLabel: (count: number) => `${count}일 연속`,
    days: ["월", "화", "수", "목", "금", "토", "일"].map((label, index) => ({
      label,
      done: index < 5,
    })),
  },
} satisfies Meta<typeof Streak>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Missed: Story = {
  args: {
    count: 0,
    days: ["월", "화", "수", "목", "금", "토", "일"].map((label) => ({ label, done: false })),
  },
};
