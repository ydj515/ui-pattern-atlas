import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { RangeSlider } from "@/shared/ui/patterns/range-slider/RangeSlider";

function Controlled({ low, high }: { readonly low: number; readonly high: number }) {
  const [value, setValue] = useState<readonly [number, number]>([low, high]);
  return (
    <RangeSlider
      label="가격대"
      min={0}
      max={200_000}
      step={10_000}
      value={value}
      onChange={setValue}
      format={(number) => `${number / 10_000}만원`}
    />
  );
}

const meta = {
  title: "Patterns/Selection/Range Slider",
  component: Controlled,
  args: { low: 30_000, high: 120_000 },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wide: Story = {};
export const Narrow: Story = { args: { low: 50_000, high: 60_000 } };
