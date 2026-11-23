import type { Meta, StoryObj } from "@storybook/react-vite";
import { LowStockIndicator } from "@/shared/ui/patterns/low-stock-indicator/LowStockIndicator";

const meta = {
  title: "Patterns/Pricing/Low Stock Indicator",
  component: LowStockIndicator,
  args: { stock: 3 },
} satisfies Meta<typeof LowStockIndicator>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SoldOut: Story = { args: { stock: 0 } };
