import type { Meta, StoryObj } from "@storybook/react-vite";
import { PricingPlanComparison } from "@/shared/ui/patterns/pricing-plan-comparison/PricingPlanComparison";

const meta = {
  title: "Patterns/Pricing/Pricing Plan Comparison",
  component: PricingPlanComparison,
  args: {
    plans: [
      { id: "basic", name: "베이직", price: "5,900원", cadence: "매월", benefits: ["광고 없음"] },
      {
        id: "standard",
        name: "스탠다드",
        price: "9,900원",
        cadence: "매월",
        benefits: ["광고 없음", "고화질"],
        recommended: true,
      },
    ],
    onSelect: () => {},
  },
} satisfies Meta<typeof PricingPlanComparison>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { selectedId: "standard" } };
