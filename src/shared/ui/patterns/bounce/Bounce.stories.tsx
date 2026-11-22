import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bounce } from "@/shared/ui/patterns/bounce/Bounce";

const meta = {
  title: "Patterns/Motion/Bounce",
  component: Bounce,
  args: {
    trigger: 0,
    children: (
      <span className="rounded-full bg-slate-900 px-3 py-1 text-sm text-white">장바구니</span>
    ),
  },
} satisfies Meta<typeof Bounce>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {};
export const Bounced: Story = { args: { trigger: 1 } };
