import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { SortableList, type SortableItem } from "@/shared/ui/patterns/sortable-list/SortableList";

function Demo({ labels }: { readonly labels: readonly string[] }) {
  const [items, setItems] = useState<readonly SortableItem[]>(
    labels.map((label) => ({ id: label, label })),
  );
  return <SortableList label="오늘 할 일" items={items} onChange={setItems} />;
}

const meta = {
  title: "Patterns/List and Table/Sortable List",
  component: Demo,
  args: { labels: ["커피 원두 사기", "메일 답장하기", "보고서 마무리"] },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tasks: Story = {};
export const Two: Story = { args: { labels: ["첫째", "둘째"] } };
