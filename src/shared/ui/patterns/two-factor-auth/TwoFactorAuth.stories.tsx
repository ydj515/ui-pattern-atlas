import type { Meta, StoryObj } from "@storybook/react-vite";

import { TwoFactorAuth } from "@/shared/ui/patterns/two-factor-auth/TwoFactorAuth";

const meta = {
  title: "Patterns/Auth/Two-Factor Auth",
  component: TwoFactorAuth,
  args: { onVerify: (code: string) => code === "123456" },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof TwoFactorAuth>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OneAttempt: Story = { args: { attempts: 1 } };
