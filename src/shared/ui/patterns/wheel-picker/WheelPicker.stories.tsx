import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { WheelPicker } from "@/shared/ui/patterns/wheel-picker/WheelPicker";

function Alarm({ hour: initialHour }: { readonly hour: string }) {
  const [period, setPeriod] = useState("오전");
  const [hour, setHour] = useState(initialHour);
  return (
    <WheelPicker
      label="알람 시간"
      columns={[
        { label: "오전 오후", options: ["오전", "오후"], value: period, onChange: setPeriod },
        {
          label: "시",
          options: Array.from({ length: 12 }, (_, index) => String(index + 1)),
          value: hour,
          onChange: setHour,
        },
      ]}
    />
  );
}

const meta = {
  title: "Patterns/Special Input/Wheel Picker",
  component: Alarm,
  args: { hour: "7" },
} satisfies Meta<typeof Alarm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Morning: Story = {};
export const Late: Story = { args: { hour: "11" } };
