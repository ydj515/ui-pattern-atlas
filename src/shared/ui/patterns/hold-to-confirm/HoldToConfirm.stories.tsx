import type { Meta, StoryObj } from "@storybook/react-vite";

import { HoldToConfirm } from "@/shared/ui/patterns/hold-to-confirm/HoldToConfirm";

const meta = {
  title: "Patterns/Buttons/Hold to Confirm",
  component: HoldToConfirm,
  args: { label: "꾹 눌러 삭제", hint: "1.5초 동안 누르고 있으면 삭제돼요", onConfirm: () => {} },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof HoldToConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Longer: Story = { args: { holdMs: 3000, hint: "3초 동안 누르고 있으면 삭제돼요" } };
