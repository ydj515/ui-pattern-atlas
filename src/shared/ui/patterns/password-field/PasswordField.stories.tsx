import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { PasswordField } from "@/shared/ui/patterns/password-field/PasswordField";

const RULES = [
  { label: "8자 이상", test: (value: string) => value.length >= 8 },
  { label: "숫자 포함", test: (value: string) => /\d/.test(value) },
];

function Controlled({ initial }: { readonly initial: string }) {
  const [value, setValue] = useState(initial);
  return <PasswordField label="새 비밀번호" value={value} onChange={setValue} rules={RULES} />;
}

const meta = {
  title: "Patterns/Text Input/Password Field",
  component: Controlled,
  args: { initial: "" },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const RulesMet: Story = { args: { initial: "sky20261" } };
