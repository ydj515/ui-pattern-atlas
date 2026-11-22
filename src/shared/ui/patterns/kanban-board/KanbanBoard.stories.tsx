import type { Meta, StoryObj } from "@storybook/react-vite";

import { KanbanBoard } from "@/shared/ui/patterns/kanban-board/KanbanBoard";

const meta = {
  title: "Patterns/List and Table/Kanban Board",
  component: KanbanBoard,
  args: {
    columns: [
      { id: "todo", title: "할 일" },
      { id: "done", title: "완료" },
    ],
    cards: [
      { id: "a", title: "회의록 정리", column: "todo" },
      { id: "b", title: "배포 공지", column: "done" },
    ],
    onMove: () => {},
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
} satisfies Meta<typeof KanbanBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumns: Story = {};
export const Empty: Story = { args: { cards: [] } };
