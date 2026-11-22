import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwipeToDelete } from "@/shared/ui/patterns/swipe-to-delete/SwipeToDelete";

const meta = {
  title: "Patterns/Gestures/Swipe to Delete",
  component: SwipeToDelete,
  args: {
    deleteLabel: "회의록 삭제",
    onDelete: () => {},
    children: <p className="px-3 py-3 text-sm">회의록</p>,
  },
} satisfies Meta<typeof SwipeToDelete>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomActionText: Story = { args: { actionText: "지우기" } };
