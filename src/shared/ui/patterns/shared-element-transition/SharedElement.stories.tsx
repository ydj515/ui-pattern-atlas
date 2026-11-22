import type { Meta, StoryObj } from "@storybook/react-vite";
import { SharedElement } from "@/shared/ui/patterns/shared-element-transition/SharedElement";

const meta = {
  title: "Patterns/Motion/Shared Element Transition",
  component: SharedElement,
  args: {
    name: "photo-jeju",
    className: "h-24 w-32 rounded-xl bg-gradient-to-br from-emerald-300 to-sky-400",
    children: null,
  },
} satisfies Meta<typeof SharedElement>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Thumbnail: Story = {};
export const Large: Story = {
  args: { className: "h-48 w-72 rounded-2xl bg-gradient-to-br from-emerald-300 to-sky-400" },
};
