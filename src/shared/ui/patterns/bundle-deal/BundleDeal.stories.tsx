import type { Meta, StoryObj } from "@storybook/react-vite";
import { BundleDeal } from "@/shared/ui/patterns/bundle-deal/BundleDeal";

const meta = {
  title: "Patterns/Pricing/Bundle Deal",
  component: BundleDeal,
  args: { unitPrice: 12000, threshold: 2, rate: 0.1, quantity: 1, onQuantityChange: () => {} },
} satisfies Meta<typeof BundleDeal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Applied: Story = { args: { quantity: 3 } };
