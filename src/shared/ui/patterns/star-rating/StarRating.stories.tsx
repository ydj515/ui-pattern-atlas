import type { Meta, StoryObj } from "@storybook/react-vite";
import { StarRating } from "@/shared/ui/patterns/star-rating/StarRating";

const meta = {
  title: "Patterns/Reaction and Share/Star Rating",
  component: StarRating,
  args: { label: "별점", value: 4, onChange: () => {} },
} satisfies Meta<typeof StarRating>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const HalfStars: Story = { args: { step: 0.5, value: 3.5 } };
