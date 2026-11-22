import type { Meta, StoryObj } from "@storybook/react-vite";
import { TaskItem } from "@/shared/ui/patterns/completed-task-strikethrough/TaskItem";

const meta = {
  title: "Patterns/Completion/Completed Task Strikethrough",
  component: TaskItem,
  args: { label: "우유 사기", done: false, onToggle: () => {} },
} satisfies Meta<typeof TaskItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Done: Story = { args: { done: true } };
