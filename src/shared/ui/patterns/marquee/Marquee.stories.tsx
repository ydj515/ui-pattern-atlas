import type { Meta, StoryObj } from "@storybook/react-vite";
import { Marquee } from "@/shared/ui/patterns/marquee/Marquee";

const meta = {
  title: "Patterns/Text Motion/Marquee",
  component: Marquee,
  args: { label: "혜택", items: ["무료 배송", "오늘 출발", "30일 반품", "적립 5%"] },
} satisfies Meta<typeof Marquee>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Fast: Story = { args: { duration: 8 } };
