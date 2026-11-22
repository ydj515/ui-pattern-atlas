import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextField } from "./TextField";

const meta = {
  title: "Patterns/Feedback/Inline Validation",
  component: TextField,
  args: {
    label: "이메일",
    description: "영수증을 받을 주소를 입력해 주세요.",
    placeholder: "name@example.com",
    type: "email",
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const Invalid: Story = {
  args: {
    defaultValue: "name@exam",
    error: "이메일 형식이 올바르지 않아요. 예: name@example.com",
  },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: "name@example.com" } };
