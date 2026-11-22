import type { Meta, StoryObj } from "@storybook/react-vite";
import { StaggeredText } from "@/shared/ui/patterns/staggered-text-reveal/StaggeredText";

const meta = {
  title: "Patterns/Text Motion/Staggered Text Reveal",
  component: StaggeredText,
  args: { lines: ["작게 시작해서", "매일 조금씩"], className: "text-2xl font-bold" },
} satisfies Meta<typeof StaggeredText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ByWord: Story = { args: { by: "word" } };
