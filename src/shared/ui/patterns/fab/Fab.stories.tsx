import type { Meta, StoryObj } from "@storybook/react-vite";

import { Fab } from "@/shared/ui/patterns/fab/Fab";

const plus = (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M10 4v12M4 10h12" />
  </svg>
);

const meta = {
  title: "Patterns/Buttons/FAB",
  component: Fab,
  args: { label: "새 메일", icon: plus, extended: true, onClick: () => {} },
  argTypes: { icon: { control: false } },
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Extended: Story = {};
export const IconOnly: Story = { args: { extended: false } };
