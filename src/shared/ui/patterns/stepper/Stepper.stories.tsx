import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stepper } from "@/shared/ui/patterns/stepper/Stepper";

const meta = {
  title: "Patterns/Navigation/Stepper",
  component: Stepper,
  args: { steps: ["장바구니", "배송", "결제", "완료"], current: 1 },
  argTypes: { current: { control: { type: "range", min: 0, max: 3 } } },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shipping: Story = {};
export const Done: Story = { args: { current: 3 } };
