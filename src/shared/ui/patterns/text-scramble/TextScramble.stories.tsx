import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextScramble } from "@/shared/ui/patterns/text-scramble/TextScramble";

const meta = {
  title: "Patterns/Text Motion/Text Scramble",
  component: TextScramble,
  args: { text: "보안 연결 완료" },
} satisfies Meta<typeof TextScramble>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Slow: Story = { args: { duration: 2000 } };
