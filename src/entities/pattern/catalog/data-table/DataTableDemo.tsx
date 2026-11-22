import { DataTable } from "@/shared/ui/patterns/data-table/DataTable";

interface Branch {
  readonly name: string;
  readonly orders: number;
  readonly sales: number;
}

const ROWS: readonly Branch[] = [
  { name: "강남점", orders: 412, sales: 18_240_000 },
  { name: "홍대점", orders: 365, sales: 15_100_000 },
  { name: "부산점", orders: 298, sales: 12_870_000 },
  { name: "대전점", orders: 184, sales: 7_920_000 },
];

export function DataTableDemo() {
  return (
    <div className="w-full max-w-sm">
      <DataTable
        caption="지점별 11월 매출"
        rowKey={(row) => row.name}
        rows={ROWS}
        sortLabel={(label) => `${label} 기준 정렬`}
        columns={[
          { key: "name", label: "지점" },
          {
            key: "orders",
            label: "주문 수",
            numeric: true,
            format: (value) => `${Number(value).toLocaleString("ko-KR")}건`,
          },
          {
            key: "sales",
            label: "매출",
            numeric: true,
            format: (value) => `${(Number(value) / 10_000).toLocaleString("ko-KR")}만원`,
          },
        ]}
      />
    </div>
  );
}
