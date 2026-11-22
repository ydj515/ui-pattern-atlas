import type { Meta, StoryObj } from "@storybook/react-vite";
import { RatingSlider } from "@/shared/ui/patterns/rating-slider/RatingSlider";

const meta = {
  title: "Patterns/Reaction and Share/Rating Slider",
  component: RatingSlider,
  args: {
    label: "오늘 수업 만족도",
    value: 7,
    onChange: () => {},
    lowLabel: "아쉬웠어요",
    highLabel: "최고였어요",
  },
} satisfies Meta<typeof RatingSlider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Low: Story = { args: { value: 2 } };
