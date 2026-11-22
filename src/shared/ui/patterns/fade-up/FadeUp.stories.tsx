import type { Meta, StoryObj } from "@storybook/react-vite";
import { FadeUp } from "@/shared/ui/patterns/fade-up/FadeUp";

const meta = {
  title: "Patterns/Text Motion/Fade Up",
  component: FadeUp,
  args: { children: <h3 className="text-xl font-bold">이제 사진으로 검색하세요</h3> },
} satisfies Meta<typeof FadeUp>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Delayed: Story = { args: { delay: 300 } };
