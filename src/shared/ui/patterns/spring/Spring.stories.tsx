import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spring } from "@/shared/ui/patterns/spring/Spring";

const meta = {
  title: "Patterns/Motion/Spring",
  component: Spring,
  args: {
    to: 120,
    children: (value: number) => (
      <span
        className="block size-8 rounded-full bg-blue-600"
        style={{ transform: `translateX(${value}px)` }}
      />
    ),
  },
} satisfies Meta<typeof Spring>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Bouncy: Story = {};
export const Gentle: Story = { args: { stiffness: 120, damping: 20 } };
