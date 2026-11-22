import type { Meta, StoryObj } from "@storybook/react-vite";

import { StickyHeader } from "@/shared/ui/patterns/sticky-header/StickyHeader";

const meta = {
  title: "Patterns/Layout/Sticky Header",
  component: StickyHeader,
  args: { title: "주문 내역", scrolled: false },
  decorators: [(Story) => <div className="w-72 border">{Story()}</div>],
} satisfies Meta<typeof StickyHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AtTop: Story = {};
export const Scrolled: Story = { args: { scrolled: true } };
