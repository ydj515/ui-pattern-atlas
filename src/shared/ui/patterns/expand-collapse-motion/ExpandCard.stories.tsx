import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExpandCard } from "@/shared/ui/patterns/expand-collapse-motion/ExpandCard";

const meta = {
  title: "Patterns/Motion/Expand Collapse Motion",
  component: ExpandCard,
  args: {
    title: "주문 #2481",
    summary: "배송 중",
    expanded: false,
    onExpandedChange: () => {},
    children: <p className="text-sm">배송 출발 13:05</p>,
  },
} satisfies Meta<typeof ExpandCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {};
export const Expanded: Story = { args: { expanded: true } };
