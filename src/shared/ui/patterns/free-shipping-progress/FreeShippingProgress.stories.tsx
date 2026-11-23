import type { Meta, StoryObj } from "@storybook/react-vite";
import { FreeShippingProgress } from "@/shared/ui/patterns/free-shipping-progress/FreeShippingProgress";

const meta = {
  title: "Patterns/Pricing/Free Shipping Progress",
  component: FreeShippingProgress,
  args: { total: 22000, threshold: 30000 },
} satisfies Meta<typeof FreeShippingProgress>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Reached: Story = { args: { total: 31000 } };
