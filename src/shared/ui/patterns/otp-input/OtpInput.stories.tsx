import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { OtpInput } from "@/shared/ui/patterns/otp-input/OtpInput";

function Controlled({ initial, invalid }: { readonly initial: string; readonly invalid: boolean }) {
  const [value, setValue] = useState(initial);
  return <OtpInput label="인증번호" value={value} onChange={setValue} invalid={invalid} />;
}

const meta = {
  title: "Patterns/Text Input/OTP Input",
  component: Controlled,
  args: { initial: "", invalid: false },
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const Partly: Story = { args: { initial: "123" } };
export const Wrong: Story = { args: { initial: "654321", invalid: true } };
