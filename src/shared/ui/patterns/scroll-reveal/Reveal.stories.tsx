import type { Meta, StoryObj } from "@storybook/react-vite";
import { Reveal } from "@/shared/ui/patterns/scroll-reveal/Reveal";

const meta = {
  title: "Patterns/Motion/Scroll Reveal",
  component: Reveal,
  args: { children: <p className="rounded-xl bg-white p-4 text-sm shadow">봄 신상품</p> },
} satisfies Meta<typeof Reveal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FadeUp: Story = {};
export const ScaleIn: Story = { args: { variant: "scale-in" } };
