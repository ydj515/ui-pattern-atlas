import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordReset } from "@/shared/ui/patterns/password-reset/PasswordReset";

const meta = {
  title: "Patterns/Auth/Password Reset",
  component: PasswordReset,
  args: { onRequest: () => undefined, placeholder: "haneul@example.com" },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof PasswordReset>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoPlaceholder: Story = { args: { placeholder: undefined } };
