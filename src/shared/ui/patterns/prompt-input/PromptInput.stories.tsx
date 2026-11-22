import type { Meta, StoryObj } from "@storybook/react-vite";
import { PromptInput } from "@/shared/ui/patterns/prompt-input/PromptInput";

const meta = {
  title: "Patterns/AI/Prompt Input",
  component: PromptInput,
  args: { onSend: () => {}, onStop: () => {}, generating: false },
} satisfies Meta<typeof PromptInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Generating: Story = { args: { generating: true } };
