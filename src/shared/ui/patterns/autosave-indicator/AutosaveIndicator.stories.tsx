import type { Meta, StoryObj } from "@storybook/react-vite";

import { AutosaveIndicator } from "@/shared/ui/patterns/autosave-indicator/AutosaveIndicator";

const meta = {
  title: "Patterns/Risky actions/Autosave Indicator",
  component: AutosaveIndicator,
  args: { status: "saved" },
} satisfies Meta<typeof AutosaveIndicator>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Saved: Story = {};
export const Saving: Story = { args: { status: "saving" } };
export const Offline: Story = { args: { status: "offline" } };
