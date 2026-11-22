import type { Meta, StoryObj } from "@storybook/react-vite";
import { MaskReveal } from "@/shared/ui/patterns/mask-reveal/MaskReveal";

const meta = {
  title: "Patterns/Text Motion/Mask Reveal",
  component: MaskReveal,
  args: { lines: ["가을 컬렉션", "10월 1일 공개"], className: "text-3xl font-bold" },
} satisfies Meta<typeof MaskReveal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OneLine: Story = { args: { lines: ["가을 컬렉션"] } };
