import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slide } from "@/shared/ui/patterns/slide/Slide";

const meta = {
  title: "Patterns/Motion/Slide",
  component: Slide,
  args: {
    show: true,
    from: "bottom",
    children: <p className="rounded-xl bg-white p-3 text-sm shadow">새 메시지 1개</p>,
  },
} satisfies Meta<typeof Slide>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FromBottom: Story = {};
export const FromRight: Story = { args: { from: "right" } };
