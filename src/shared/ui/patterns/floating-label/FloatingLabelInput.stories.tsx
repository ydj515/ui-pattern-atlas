import type { Meta, StoryObj } from "@storybook/react-vite";

import { FloatingLabelInput } from "@/shared/ui/patterns/floating-label/FloatingLabelInput";

const meta = {
  title: "Patterns/Text Input/Floating Label",
  component: FloatingLabelInput,
  args: { label: "이메일", type: "email" },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof FloatingLabelInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const Filled: Story = { args: { defaultValue: "sky@example.com" } };
