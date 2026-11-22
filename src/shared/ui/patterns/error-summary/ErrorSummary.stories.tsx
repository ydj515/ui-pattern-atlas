import type { Meta, StoryObj } from "@storybook/react-vite";

import { ErrorSummary } from "@/shared/ui/patterns/error-summary/ErrorSummary";

const meta = {
  title: "Patterns/Feedback/Error Summary",
  component: ErrorSummary,
  args: {
    errors: [
      { fieldId: "email", message: "이메일 형식이 올바르지 않아요" },
      { fieldId: "password", message: "비밀번호를 8자 이상 입력해 주세요" },
    ],
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof ErrorSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoErrors: Story = {};
export const OneError: Story = {
  args: { errors: [{ fieldId: "email", message: "이메일을 입력해 주세요" }] },
};
export const CustomTitle: Story = {
  args: { title: (count) => `${count}개 항목을 확인해 주세요` },
};
