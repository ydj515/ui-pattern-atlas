import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { AutoTextarea } from "@/shared/ui/patterns/textarea/AutoTextarea";

function Controlled({
  initial,
  maxLength,
}: {
  readonly initial: string;
  readonly maxLength: number;
}) {
  const [value, setValue] = useState(initial);
  return (
    <AutoTextarea
      label="후기"
      placeholder="어떤 점이 좋았나요?"
      maxLength={maxLength}
      value={value}
      onChange={setValue}
    />
  );
}

const meta = {
  title: "Patterns/Text Input/Textarea",
  component: Controlled,
  args: { initial: "", maxLength: 100 },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const NearLimit: Story = {
  args: { initial: "배송이 빨랐어요. 포장도 꼼꼼했어요.", maxLength: 21 },
};
