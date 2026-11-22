import type { Meta, StoryObj } from "@storybook/react-vite";

import { BackToTop } from "@/shared/ui/patterns/back-to-top/BackToTop";

const meta = {
  title: "Patterns/Navigation/Back to Top",
  component: BackToTop,
  args: { threshold: -1 },
  decorators: [(Story) => <div className="p-4">{Story()}</div>],
} satisfies Meta<typeof BackToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Threshold below zero keeps it visible for the story. */
export const Visible: Story = {};
export const CustomLabel: Story = { args: { label: "처음으로" } };
