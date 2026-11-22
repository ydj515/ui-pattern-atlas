import type { Meta, StoryObj } from "@storybook/react-vite";
import { Shake } from "@/shared/ui/patterns/shake-on-error/Shake";

const meta = {
  title: "Patterns/Motion/Shake on Error",
  component: Shake,
  args: {
    trigger: 0,
    children: <input aria-label="비밀번호" className="rounded border px-2 py-1" />,
  },
} satisfies Meta<typeof Shake>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {};
export const AfterError: Story = { args: { trigger: 1 } };
