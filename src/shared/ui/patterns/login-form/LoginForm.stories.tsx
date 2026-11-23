import type { Meta, StoryObj } from "@storybook/react-vite";

import { LoginForm } from "@/shared/ui/patterns/login-form/LoginForm";

const meta = {
  title: "Patterns/Auth/Login Form",
  component: LoginForm,
  args: {
    onSubmit: (): string | null => "이메일 또는 비밀번호가 맞지 않아요",
    onForgot: () => undefined,
    emailPlaceholder: "haneul@example.com",
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof LoginForm>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AlwaysSignsIn: Story = { args: { onSubmit: (): string | null => null } };
