import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { MaskedInput } from "@/shared/ui/patterns/input-mask/MaskedInput";

function Controlled({
  label,
  mask,
  initial,
}: {
  readonly label: string;
  readonly mask: string;
  readonly initial: string;
}) {
  const [value, setValue] = useState(initial);
  return <MaskedInput label={label} mask={mask} value={value} onChange={setValue} />;
}

const meta = {
  title: "Patterns/Text Input/Input Mask",
  component: Controlled,
  args: { label: "휴대폰 번호", mask: "000-0000-0000", initial: "0101234" },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Phone: Story = {};
export const Card: Story = {
  args: { label: "카드 번호", mask: "0000 0000 0000 0000", initial: "12345678" },
};
