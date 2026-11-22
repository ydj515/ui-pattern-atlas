import type { Meta, StoryObj } from "@storybook/react-vite";

import { SignaturePad } from "@/shared/ui/patterns/signature-pad/SignaturePad";

const meta = {
  title: "Patterns/Special Input/Signature Pad",
  component: SignaturePad,
  args: { label: "서명", hint: "칸 안에 서명해 주세요", onChange: () => {} },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof SignaturePad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Tall: Story = { args: { height: 200 } };
