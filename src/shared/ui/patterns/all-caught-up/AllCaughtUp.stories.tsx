import type { Meta, StoryObj } from "@storybook/react-vite";

import { AllCaughtUp } from "@/shared/ui/patterns/all-caught-up/AllCaughtUp";

const meta = {
  title: "Patterns/Status/All Caught Up",
  component: AllCaughtUp,
  argTypes: { action: { control: false } },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof AllCaughtUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithAction: Story = {
  args: {
    title: "할 일을 모두 끝냈어요",
    description: "내일 할 일은 아침 9시에 보여 드릴게요.",
    action: (
      <a href="#done" className="font-medium text-emerald-800 underline">
        끝낸 일 보기
      </a>
    ),
  },
};
