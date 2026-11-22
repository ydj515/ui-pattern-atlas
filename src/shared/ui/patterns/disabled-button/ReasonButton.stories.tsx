import type { Meta, StoryObj } from "@storybook/react-vite";

import { ReasonButton } from "@/shared/ui/patterns/disabled-button/ReasonButton";

const meta = {
  title: "Patterns/Buttons/Disabled Button",
  component: ReasonButton,
  args: {
    children: "가입하기",
    onClick: () => {},
    disabledReason: "약관에 동의해야 가입할 수 있어요",
  },
  argTypes: { children: { control: "text" } },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof ReasonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithReason: Story = {};
export const Enabled: Story = { args: { disabledReason: undefined } };
