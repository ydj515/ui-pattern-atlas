import type { Meta, StoryObj } from "@storybook/react-vite";
import { Parallax } from "@/shared/ui/patterns/parallax/Parallax";

const meta = {
  title: "Patterns/Motion/Parallax",
  component: Parallax,
  args: {
    label: "여름 캠핑",
    backgroundHeight: 160,
    background: <div className="h-full bg-gradient-to-b from-sky-300 to-emerald-400" />,
    children: <p className="h-96 bg-white p-4 text-sm">여름 캠핑</p>,
  },
} satisfies Meta<typeof Parallax>;
export default meta;
type Story = StoryObj<typeof meta>;

export const HalfSpeed: Story = {};
export const Still: Story = { args: { speed: 0 } };
