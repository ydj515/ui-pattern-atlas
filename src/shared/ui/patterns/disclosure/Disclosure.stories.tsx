import type { Meta, StoryObj } from "@storybook/react-vite";

import { Disclosure } from "@/shared/ui/patterns/disclosure/Disclosure";

const meta = {
  title: "Patterns/Disclosure/Disclosure",
  component: Disclosure,
  args: {
    summary: "환불은 언제 되나요?",
    children: "반품 상품이 창고에 도착하면 1~3일 안에 돌려드려요.",
  },
  argTypes: { children: { control: "text" } },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {};
export const Open: Story = { args: { defaultOpen: true } };
