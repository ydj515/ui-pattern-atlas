import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProgressToast } from "@/shared/ui/patterns/progress-toast/ProgressToast";

const meta = {
  title: "Patterns/Feedback/Progress Toast",
  component: ProgressToast,
  args: {
    title: "회의록.pdf 올리는 중",
    progress: 48,
    status: "running",
    resultText: "회의록.pdf 올리기 완료",
    onCancel: () => {},
  },
  argTypes: { progress: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<typeof ProgressToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Running: Story = {};
export const Done: Story = { args: { progress: 100, status: "done" } };
export const Cancelled: Story = { args: { status: "error", resultText: "올리기를 취소했어요" } };
