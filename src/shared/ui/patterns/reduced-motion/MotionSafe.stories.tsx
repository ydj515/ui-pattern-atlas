import type { Meta, StoryObj } from "@storybook/react-vite";
import { MotionSafe } from "@/shared/ui/patterns/reduced-motion/MotionSafe";

const meta = {
  title: "Patterns/Motion/Reduced Motion",
  component: MotionSafe,
  args: {
    full: [{ transform: "translateX(110%)" }, { transform: "none" }],
    children: <p className="rounded-xl bg-white p-3 text-sm shadow">새 메시지가 왔어요</p>,
  },
} satisfies Meta<typeof MotionSafe>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FullMotion: Story = { args: { forceReduced: false } };
export const ReducedMotion: Story = { args: { forceReduced: true } };
