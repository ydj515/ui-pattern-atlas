import type { Meta, StoryObj } from "@storybook/react-vite";

import { UndoBar } from "@/shared/ui/patterns/undo/UndoBar";

const meta = {
  title: "Patterns/Feedback/Undo",
  component: UndoBar,
  args: {
    message: "메일 1개를 삭제했어요",
    onUndo: () => {},
    onExpire: () => {},
    durationMs: 5000,
  },
} satisfies Meta<typeof UndoBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const LongWindow: Story = { args: { durationMs: 10000, undoLabel: "실행 취소" } };
