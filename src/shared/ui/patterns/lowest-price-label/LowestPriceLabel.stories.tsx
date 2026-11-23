import type { Meta, StoryObj } from "@storybook/react-vite";
import { LowestPriceLabel } from "@/shared/ui/patterns/lowest-price-label/LowestPriceLabel";

const meta = {
  title: "Patterns/Pricing/Lowest Price Label",
  component: LowestPriceLabel,
  args: { label: "최근 30일 최저가", basis: ["11월 1일~30일", "이 판매처 판매가 기준"] },
} satisfies Meta<typeof LowestPriceLabel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomButton: Story = { args: { basisLabel: "어떻게 정했나요?" } };
