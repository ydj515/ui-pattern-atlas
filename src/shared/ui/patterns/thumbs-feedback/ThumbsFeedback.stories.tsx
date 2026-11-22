import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThumbsFeedback } from "@/shared/ui/patterns/thumbs-feedback/ThumbsFeedback";

const meta = {
  title: "Patterns/Reaction and Share/Thumbs Feedback",
  component: ThumbsFeedback,
  args: {
    question: "이 도움말이 도움이 됐나요?",
    reasons: ["정보가 틀려요", "설명이 어려워요"],
    onSubmit: () => {},
  },
} satisfies Meta<typeof ThumbsFeedback>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomLabels: Story = { args: { yesLabel: "도움이 됐어요", noLabel: "아쉬워요" } };
