import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { RadioGroup } from "@/shared/ui/patterns/radio-group/RadioGroup";

const OPTIONS = [
  { value: "standard", label: "일반 배송", description: "무료 · 2~3일 뒤 도착" },
  { value: "express", label: "빠른 배송", description: "3,000원 · 내일 도착" },
];

function Controlled({ initial }: { readonly initial: string }) {
  const [value, setValue] = useState(initial);
  return <RadioGroup legend="배송 방법" options={OPTIONS} value={value} onChange={setValue} />;
}

const meta = {
  title: "Patterns/Selection/Radio Group",
  component: Controlled,
  args: { initial: "standard" },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SecondChosen: Story = { args: { initial: "express" } };
