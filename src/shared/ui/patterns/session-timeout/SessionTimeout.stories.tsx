import type { Meta, StoryObj } from "@storybook/react-vite";

import { SessionTimeout } from "@/shared/ui/patterns/session-timeout/SessionTimeout";

const meta = {
  title: "Patterns/Leaving and returning/Session Timeout",
  component: SessionTimeout,
  args: {
    remaining: 58,
    onExtend: () => undefined,
    onSignOut: () => undefined,
    onSignIn: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof SessionTimeout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {};
export const Expired: Story = { args: { remaining: 0 } };
