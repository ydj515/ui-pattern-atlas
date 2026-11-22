import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextField } from "@/shared/ui/patterns/text-field/TextField";

const meta = {
  title: "Patterns/Text Input/Text Field",
  component: TextField,
  args: {
    label: "닉네임",
    placeholder: "예: 하늘",
    hint: "2~12자로 입력해 주세요",
    required: true,
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithError: Story = { args: { error: "닉네임을 입력해 주세요" } };
export const Optional: Story = { args: { required: false, hint: undefined } };
