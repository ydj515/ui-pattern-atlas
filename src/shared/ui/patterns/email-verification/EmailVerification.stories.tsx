import type { Meta, StoryObj } from "@storybook/react-vite";

import { EmailVerification } from "@/shared/ui/patterns/email-verification/EmailVerification";

const meta = {
  title: "Patterns/Auth/Email Verification",
  component: EmailVerification,
  args: { email: "haneul@example.com", onResend: () => undefined, onChangeEmail: () => undefined },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof EmailVerification>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ShortCooldown: Story = { args: { cooldown: 5 } };
