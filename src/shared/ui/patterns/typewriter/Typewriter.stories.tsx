import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typewriter } from "@/shared/ui/patterns/typewriter/Typewriter";

const meta = {
  title: "Patterns/Text Motion/Typewriter",
  component: Typewriter,
  args: { text: "오늘 저녁 메뉴를 골라 드릴게요" },
} satisfies Meta<typeof Typewriter>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Slow: Story = { args: { speed: 160 } };
