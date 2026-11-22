import type { Meta, StoryObj } from "@storybook/react-vite";

import { ConfirmationMessage } from "@/shared/ui/patterns/confirmation-message/ConfirmationMessage";

const meta = {
  title: "Patterns/Feedback/Confirmation Message",
  component: ConfirmationMessage,
  args: {
    title: "문의를 보냈어요",
    children: "접수 번호 Q-2048 · 영업일 1일 안에 이메일로 답해 드려요.",
  },
  argTypes: { children: { control: "text" }, action: { control: false } },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof ConfirmationMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithAction: Story = {
  args: {
    action: (
      <a href="#new" className="text-sm font-medium underline underline-offset-2">
        새 문의 쓰기
      </a>
    ),
  },
};
