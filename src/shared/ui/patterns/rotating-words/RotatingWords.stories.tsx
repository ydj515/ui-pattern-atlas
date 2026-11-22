import type { Meta, StoryObj } from "@storybook/react-vite";
import { RotatingWords } from "@/shared/ui/patterns/rotating-words/RotatingWords";

const meta = {
  title: "Patterns/Text Motion/Rotating Words",
  component: RotatingWords,
  args: { lead: "함께 만드는", words: ["디자인", "문서", "발표"] },
} satisfies Meta<typeof RotatingWords>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SingleWord: Story = { args: { words: ["디자인"] } };
