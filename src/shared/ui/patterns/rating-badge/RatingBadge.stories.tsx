import type { Meta, StoryObj } from "@storybook/react-vite";
import { RatingBadge } from "@/shared/ui/patterns/rating-badge/RatingBadge";

const meta = {
  title: "Patterns/Reaction and Share/Rating Badge",
  component: RatingBadge,
  args: { score: 4.6, count: 1284 },
} satisfies Meta<typeof RatingBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FewReviews: Story = { args: { score: 4.9, count: 7 } };
