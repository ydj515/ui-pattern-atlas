import type { Meta, StoryObj } from "@storybook/react-vite";

import { SignupForm } from "@/shared/ui/patterns/signup-form/SignupForm";

const meta = {
  title: "Patterns/Auth/Signup Form",
  component: SignupForm,
  args: {
    rules: [
      { label: "8자 이상", test: (value: string) => value.length >= 8 },
      { label: "숫자 포함", test: (value: string) => /\d/.test(value) },
    ],
    isEmailTaken: (email: string) => email === "haneul@example.com",
    onSubmit: () => undefined,
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof SignupForm>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OneRule: Story = {
  args: { rules: [{ label: "8자 이상", test: (value: string) => value.length >= 8 }] },
};
