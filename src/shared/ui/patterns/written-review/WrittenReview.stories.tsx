import type { Meta, StoryObj } from "@storybook/react-vite";
import { WrittenReview } from "@/shared/ui/patterns/written-review/WrittenReview";

const meta = {
  title: "Patterns/Reaction and Share/Written Review",
  component: WrittenReview,
  args: { onSubmit: () => {} },
} satisfies Meta<typeof WrittenReview>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ShortMinimum: Story = { args: { minLength: 5 } };
