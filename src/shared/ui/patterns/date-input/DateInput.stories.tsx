import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { DateInput } from "@/shared/ui/patterns/date-input/DateInput";

function Controlled({ initial }: { readonly initial: string }) {
  const [value, setValue] = useState(initial);
  return <DateInput label="생년월일" value={value} onChange={setValue} />;
}

const meta = {
  title: "Patterns/Special Input/Date Input",
  component: Controlled,
  args: { initial: "" },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const Filled: Story = { args: { initial: "1995.03.14" } };
