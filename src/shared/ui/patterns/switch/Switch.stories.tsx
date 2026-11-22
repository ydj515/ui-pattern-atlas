import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Switch } from "./Switch";

function SwitchStory(props: {
  label: string;
  description?: string;
  initiallyOn: boolean;
  disabled?: boolean;
}) {
  const [checked, setChecked] = useState(props.initiallyOn);
  return (
    <div className="w-80">
      <Switch
        label={props.label}
        description={props.description}
        checked={checked}
        onCheckedChange={setChecked}
        disabled={props.disabled}
      />
    </div>
  );
}

const meta = {
  title: "Patterns/Input/Switch",
  component: Switch,
  args: {
    label: "푸시 알림",
    description: "주문과 배송 소식을 알려드려요.",
    checked: true,
    onCheckedChange: () => {},
    disabled: false,
  },
  render: ({ label, description, checked, disabled }) => (
    <SwitchStory
      key={String(checked)}
      label={label}
      description={description}
      initiallyOn={checked}
      disabled={disabled}
    />
  ),
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = {};
export const Off: Story = { args: { checked: false } };
export const Disabled: Story = {
  args: {
    label: "혜택 알림",
    description: "푸시 알림을 먼저 켜 주세요.",
    checked: false,
    disabled: true,
  },
};
