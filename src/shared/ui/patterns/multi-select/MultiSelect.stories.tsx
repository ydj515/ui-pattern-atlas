import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { MultiSelect } from "@/shared/ui/patterns/multi-select/MultiSelect";

function Controlled({ initial }: { readonly initial: readonly string[] }) {
  const [selected, setSelected] = useState(initial);
  return (
    <MultiSelect
      label="담당 팀"
      options={["디자인", "개발", "마케팅", "영업"]}
      selected={selected}
      onChange={setSelected}
    />
  );
}

const meta = {
  title: "Patterns/Selection/Multi-select",
  component: Controlled,
  args: { initial: [] },
  decorators: [(Story) => <div className="h-56 w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const TwoPicked: Story = { args: { initial: ["개발", "마케팅"] } };
