import type { Meta, StoryObj } from "@storybook/react-vite";

import { DataTable } from "@/shared/ui/patterns/data-table/DataTable";

interface Row {
  readonly name: string;
  readonly orders: number;
}

function Table({ caption }: { readonly caption: string }) {
  return (
    <DataTable<Row>
      caption={caption}
      rowKey={(row) => row.name}
      rows={[
        { name: "강남점", orders: 412 },
        { name: "부산점", orders: 298 },
      ]}
      columns={[
        { key: "name", label: "지점" },
        { key: "orders", label: "주문 수", numeric: true },
      ]}
    />
  );
}

const meta = {
  title: "Patterns/List and Table/Data Table",
  component: Table,
  args: { caption: "지점별 주문" },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Branches: Story = {};
export const OtherCaption: Story = { args: { caption: "지점별 11월 주문" } };
