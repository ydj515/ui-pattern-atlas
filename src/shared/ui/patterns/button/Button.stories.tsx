import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/shared/ui/patterns/button/Button";

const meta = {
  title: "Patterns/Buttons/Button",
  component: Button,
  args: { children: "저장", variant: "primary", size: "md" },
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "나중에" } };
export const Text: Story = { args: { variant: "text", children: "버리기" } };
export const Disabled: Story = { args: { disabled: true } };
