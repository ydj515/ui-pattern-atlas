import type { Meta, StoryObj } from "@storybook/react-vite";

import { UnsavedChangesDialog } from "@/shared/ui/patterns/unsaved-changes/UnsavedChangesDialog";

const meta = {
  title: "Patterns/Risky actions/Unsaved Changes Dialog",
  component: UnsavedChangesDialog,
  args: {
    open: true,
    onSave: () => undefined,
    onDiscard: () => undefined,
    onCancel: () => undefined,
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof UnsavedChangesDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};
export const Closed: Story = { args: { open: false } };
