import type { Meta, StoryObj } from "@storybook/react-vite";

import { BulkActions } from "@/shared/ui/patterns/bulk-actions/BulkActions";

const ITEMS = [
  { id: "march", name: "영수증_3월.pdf", detail: "1.2MB" },
  { id: "april", name: "영수증_4월.pdf", detail: "980KB" },
  { id: "contract", name: "계약서.pdf", detail: "3.4MB" },
];

const meta = {
  title: "Patterns/Risky actions/Bulk Actions",
  component: BulkActions,
  args: {
    items: ITEMS,
    selected: new Set(["march", "april"]),
    onSelectedChange: () => undefined,
    onAction: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof BulkActions>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {};
export const NothingSelected: Story = { args: { selected: new Set() } };
