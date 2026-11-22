import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { NumberStepper } from "@/shared/ui/patterns/number-stepper/NumberStepper";

function Controlled({ initial }: { readonly initial: number }) {
  const [value, setValue] = useState(initial);
  return <NumberStepper label="수량" min={1} max={5} value={value} onChange={setValue} />;
}

const meta = {
  title: "Patterns/Text Input/Number Stepper",
  component: Controlled,
  args: { initial: 1 },
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AtMinimum: Story = {};
export const AtMaximum: Story = { args: { initial: 5 } };
