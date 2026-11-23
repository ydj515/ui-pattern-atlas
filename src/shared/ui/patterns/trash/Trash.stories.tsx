import type { Meta, StoryObj } from "@storybook/react-vite";

import { Trash } from "@/shared/ui/patterns/trash/Trash";

const meta = {
  title: "Patterns/Risky actions/Trash",
  component: Trash,
  args: {
    items: [
      { id: "notes", name: "회의록", daysLeft: 29 },
      { id: "checklist", name: "이사 체크리스트", daysLeft: 2 },
    ],
    onRestore: () => undefined,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof Trash>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Empty: Story = { args: { items: [] } };
