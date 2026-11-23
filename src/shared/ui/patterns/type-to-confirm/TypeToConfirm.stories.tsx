import type { Meta, StoryObj } from "@storybook/react-vite";

import { TypeToConfirm } from "@/shared/ui/patterns/type-to-confirm/TypeToConfirm";

const meta = {
  title: "Patterns/Risky actions/Type to Confirm",
  component: TypeToConfirm,
  args: {
    target: "봄 사진첩",
    consequences: ["사진 128장이 함께 지워져요", "공유받은 3명도 더 볼 수 없어요"],
    onConfirm: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof TypeToConfirm>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SingleConsequence: Story = {
  args: { target: "메모", consequences: ["메모 하나가 지워져요"] },
};
