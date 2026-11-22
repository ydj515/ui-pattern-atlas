import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleButton } from "@/shared/ui/patterns/toggle-button/ToggleButton";

const meta = {
  title: "Patterns/Buttons/Toggle Button",
  component: ToggleButton,
  args: {
    label: "굵게",
    pressed: false,
    onChange: () => {},
    children: <span className="font-bold">B</span>,
  },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};
export const On: Story = { args: { pressed: true } };
