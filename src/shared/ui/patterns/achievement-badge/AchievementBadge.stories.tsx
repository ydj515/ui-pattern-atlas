import type { Meta, StoryObj } from "@storybook/react-vite";
import { AchievementBadge } from "@/shared/ui/patterns/achievement-badge/AchievementBadge";

const meta = {
  title: "Patterns/Completion/Achievement Badge",
  component: AchievementBadge,
  args: { title: "다섯 번째 후기", icon: "★", progress: 4, goal: 5 },
} satisfies Meta<typeof AchievementBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Earned: Story = { args: { progress: 5, earnedOn: "11월 3일 획득" } };
