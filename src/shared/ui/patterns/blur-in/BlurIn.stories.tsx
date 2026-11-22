import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlurIn } from "@/shared/ui/patterns/blur-in/BlurIn";

const meta = {
  title: "Patterns/Text Motion/Blur In",
  component: BlurIn,
  args: { children: <p className="text-2xl font-semibold">작은 습관이 큰 변화를 만듭니다</p> },
} satisfies Meta<typeof BlurIn>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Delayed: Story = { args: { delay: 300 } };
