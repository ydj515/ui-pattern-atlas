import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Slider } from "@/shared/ui/patterns/slider/Slider";

function Controlled({ initial }: { readonly initial: number }) {
  const [value, setValue] = useState(initial);
  return (
    <Slider
      label="최대 가격"
      min={10_000}
      max={100_000}
      step={5_000}
      value={value}
      onChange={setValue}
      format={(number) => `${number.toLocaleString("ko-KR")}원`}
    />
  );
}

const meta = {
  title: "Patterns/Selection/Slider",
  component: Controlled,
  args: { initial: 30_000 },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Low: Story = {};
export const High: Story = { args: { initial: 90_000 } };
