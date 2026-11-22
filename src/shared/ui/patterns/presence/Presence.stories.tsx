import type { Meta, StoryObj } from "@storybook/react-vite";

import { Presence } from "@/shared/ui/patterns/presence/Presence";

const meta = {
  title: "Patterns/Indicator/Presence",
  component: Presence,
  args: { name: "김하늘", state: "online" },
} satisfies Meta<typeof Presence>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Online: Story = {};
export const Away: Story = { args: { state: "away" } };
export const Offline: Story = { args: { state: "offline" } };
