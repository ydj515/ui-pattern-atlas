import type { Meta, StoryObj } from "@storybook/react-vite";
import { RatingTags } from "@/shared/ui/patterns/rating-tags/RatingTags";

const meta = {
  title: "Patterns/Reaction and Share/Rating Tags",
  component: RatingTags,
  args: {
    label: "좋았던 점",
    tags: ["친절해요", "빨라요", "안전 운전"],
    selected: ["친절해요"],
    onChange: () => {},
  },
} satisfies Meta<typeof RatingTags>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoneSelected: Story = { args: { selected: [] } };
