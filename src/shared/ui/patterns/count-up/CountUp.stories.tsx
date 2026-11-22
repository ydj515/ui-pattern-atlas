import type { Meta, StoryObj } from "@storybook/react-vite";
import { CountUp } from "@/shared/ui/patterns/count-up/CountUp";

const meta = {
  title: "Patterns/Text Motion/Count Up",
  component: CountUp,
  args: { to: 128400 },
} satisfies Meta<typeof CountUp>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithUnit: Story = {
  args: { to: 3250, format: (value: number) => `${Math.round(value).toLocaleString("ko-KR")}건` },
};
