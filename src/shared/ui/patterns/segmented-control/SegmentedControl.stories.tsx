import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { SegmentedControl } from "./SegmentedControl";

const OPTIONS = [
  { value: "day", label: "일간" },
  { value: "week", label: "주간" },
  { value: "month", label: "월간" },
] as const;

function SegmentedControlStory({ showLabel }: { readonly showLabel: boolean }) {
  const [period, setPeriod] = useState<(typeof OPTIONS)[number]["value"]>("week");
  return (
    <SegmentedControl
      label="조회 기간"
      showLabel={showLabel}
      options={OPTIONS}
      value={period}
      onValueChange={setPeriod}
    />
  );
}

const meta = {
  title: "Patterns/Input/Segmented Control",
  component: SegmentedControl,
  args: {
    label: "조회 기간",
    options: OPTIONS,
    value: "week",
    onValueChange: () => {},
    showLabel: false,
  },
  render: ({ showLabel = false }) => <SegmentedControlStory showLabel={showLabel} />,
} satisfies Meta<typeof SegmentedControl<string>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HiddenLabel: Story = {};
export const VisibleLabel: Story = { args: { showLabel: true } };
