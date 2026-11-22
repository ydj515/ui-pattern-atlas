import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Listbox } from "@/shared/ui/patterns/listbox/Listbox";

const SOUNDS = [
  { value: "default", label: "기본", description: "짧은 알림음" },
  { value: "bell", label: "맑은 종소리", description: "두 번 울려요" },
  { value: "silent", label: "무음" },
];

function Controlled({ initial }: { readonly initial: string }) {
  const [value, setValue] = useState(initial);
  return <Listbox label="알림 소리" options={SOUNDS} value={value} onChange={setValue} />;
}

const meta = {
  title: "Patterns/Selection/Listbox",
  component: Controlled,
  args: { initial: "default" },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstSelected: Story = {};
export const LastSelected: Story = { args: { initial: "silent" } };
