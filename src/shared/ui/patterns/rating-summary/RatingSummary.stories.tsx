import type { Meta, StoryObj } from "@storybook/react-vite";
import { RatingSummary } from "@/shared/ui/patterns/rating-summary/RatingSummary";

const meta = {
  title: "Patterns/Reaction and Share/Rating Summary",
  component: RatingSummary,
  args: { average: 4.6, counts: [812, 301, 98, 41, 32], filter: null, onFilter: () => {} },
} satisfies Meta<typeof RatingSummary>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Filtered: Story = { args: { filter: 5 } };
