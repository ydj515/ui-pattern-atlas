import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResponseFeedback } from "@/shared/ui/patterns/response-feedback/ResponseFeedback";

const meta = {
  title: "Patterns/AI/Response Feedback",
  component: ResponseFeedback,
  args: { text: "서울숲 근처 세 곳을 골라 봤어요.", onRate: () => {}, onRegenerate: () => {} },
} satisfies Meta<typeof ResponseFeedback>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomLabels: Story = {
  args: {
    labels: {
      copy: "답변 복사",
      copied: "복사됨",
      good: "도움 됨",
      bad: "도움 안 됨",
      regenerate: "새로 만들기",
    },
  },
};
