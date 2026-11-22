import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { SelectableTable } from "@/shared/ui/patterns/selectable-table/SelectableTable";

const rows = [
  { id: "A-1021", customer: "김하늘" },
  { id: "A-1022", customer: "이도윤" },
];

function Demo({ initial }: { readonly initial: readonly string[] }) {
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set(initial));
  return (
    <SelectableTable
      caption="주문 목록"
      headers={["주문 번호", "고객"]}
      rows={rows}
      rowKey={(row) => row.id}
      renderCells={(row) => [row.id, row.customer]}
      selected={selected}
      onSelectedChange={setSelected}
      actions={<span>{selected.size}개 선택</span>}
    />
  );
}

const meta = {
  title: "Patterns/List and Table/Selectable Table",
  component: Demo,
  args: { initial: [] },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoneSelected: Story = {};
export const SomeSelected: Story = { args: { initial: ["A-1021"] } };
