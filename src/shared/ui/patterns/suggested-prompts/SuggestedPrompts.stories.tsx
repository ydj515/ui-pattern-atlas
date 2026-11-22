import type { Meta, StoryObj } from "@storybook/react-vite";
import { SuggestedPrompts } from "@/shared/ui/patterns/suggested-prompts/SuggestedPrompts";

const meta = {
  title: "Patterns/AI/Suggested Prompts",
  component: SuggestedPrompts,
  args: {
    label: "추천 질문",
    prompts: ["주말 브런치 추천해 줘", "회의록을 세 줄로 요약해 줘"],
    onPick: () => {},
  },
} satisfies Meta<typeof SuggestedPrompts>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const One: Story = { args: { prompts: ["주말 브런치 추천해 줘"] } };
